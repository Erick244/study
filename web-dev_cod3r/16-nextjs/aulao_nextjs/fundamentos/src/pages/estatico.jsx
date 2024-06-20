import Layout from "../components/Layout";

export async function getStaticProps() {
    const data = await fetch('http://localhost:3000/api/hello');
    const json = await data.json()
    return {
        revalidate: 10,
        props: {
            json
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{JSON.stringify(props.json.random)}</div>
        </Layout>
    )
}