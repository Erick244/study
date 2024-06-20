import Cliente from "../components/Cliente";

export default function pagina() {
    return (
        <div style={{
            backgroundColor: '#222',
            color: '#fff',
            height: '100vh'
        }}>
            <Cliente nome="Maria" idade={23}/>
            <Cliente nome="Pedro"/>
        </div>
    )
}