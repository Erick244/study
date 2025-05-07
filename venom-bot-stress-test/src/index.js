import * as venom from "venom-bot";

(async () => {
	for (let i = 0; i < 1; i++) {
		console.log("Creating session" + i);

		venom.create({
			session: 'session' + i,
			headless: "new",
			browserArgs: [
				'--no-sandbox',
				'--disable-setuid-sandbox',
				'--disable-dev-shm-usage',
				'--disable-accelerated-2d-canvas',
				'--disable-gpu',
				'--disable-web-security',
				'--disable-extensions',
				'--single-process',
				'--renderer-process-limit=1',
				'--no-first-run',
				'--no-zygote',
				'--disable-background-timer-throttling',
				'--disable-renderer-backgrounding',
				'--disk-cache-size=0',
				'--media-cache-size=0'
			],

		}).then(client => {
			client.onMessage(async (message) => {
				if (message.body === ".") {
					client.sendText(message.from, "Hello World");
				}
			})
		})
	}
})()