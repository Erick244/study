interface ClienteProps {
    nome: string,
    idade?: number
}

export default function Cliente(props: ClienteProps) {
    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade ?? 'Não informada'}</div>
        </div>
    )
}