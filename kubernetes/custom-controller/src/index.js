import k8s from "@kubernetes/client-node";
import { randomUUID } from "crypto";

// Cria um novo objeto KubeConfig e configura-o para usar o arquivo padrão
const kc = new k8s.KubeConfig();
kc.loadFromDefault();

// Instancia a API para obter acesso aos recursos do Kubernetes
const coreApi = kc.makeApiClient(k8s.CoreV1Api);

// Define o namespace e a imagem especificados
const namespace = "default";
const defaultImage = "nginx:latest";

async function ensurePodReplicas(name, replicas) {
	try {
		const pods = await getAppPods(name);

		const isEnsure = pods.length === replicas
		if (isEnsure) return;

		const hasMoreThanTheLimit = pods.length > replicas;
		if (hasMoreThanTheLimit) {
			console.log(`Reducing to ${replicas} replicas...`);

			const extraPods = pods.slice(0, pods.length - replicas);
			deleteExtraPods(extraPods);
		} else {
			console.log(`Increase to ${replicas} replicas...`);

			await increaseMissingPods(pods, replicas, name);
		}
	} catch (error) {
		console.error(error);
	}
}

const getAppPods = async (appName) => {
	try {
		const pods = await coreApi.listNamespacedPod(namespace, undefined, undefined, undefined, undefined, `app=${appName}`);
		return pods.body.items;
	} catch (error) {
		console.error(error);
	}
};

const deleteExtraPods = async (extraPods) => {
	for (const pod of extraPods) {
		await coreApi.deleteNamespacedPod(pod.metadata.name, namespace);
	}
}

const increaseMissingPods = async (pods, replicas, appName) => {
	while (pods.length < replicas) {
		const podObject = createPodObject(appName)

		await coreApi.createNamespacedPod(namespace, podObject);
	}
}

const createPodObject = (name) => {
	return {
		apiVersion: "v1",
		kind: "Pod",
		metadata: {
			name: `${name}-pod-${randomUUID()}`,
			labels: {
				app: name
			}
		},
		spec: {
			containers: [
				{
					name: `${name}-${defaultImage}`,
					image: defaultImage
				}
			]
		}
	}
}

async function watchMyResources() {
	const watcher = new k8s.Watch(kc);
	const resourcesPath = `/apis/example.com/v1/namespaces/${namespace}/myresources`

	const handleWatch = async (type, apiObj) => {
		const isMutation = type === "ADDED" || type === "MODIFIED";

		if (isMutation) {
			const { name } = apiObj.metadata;
			const replicas = apiObj.spec.replicas || 1;

			await ensurePodReplicas(name, replicas);
		}
	}

	watcher.watch(resourcesPath, {}, handleWatch, console.error);
}

watchMyResources();