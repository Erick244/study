import Navegador from '../components/Navegador';
export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino="/estiloso" texto="Estiloso"/>
            <Navegador destino="/exemplo" texto="Exemplo" cor="#9400d3"/>
            <Navegador destino="/jsx" texto="JSX" cor="crimson" />
            <Navegador destino="/navegacao" texto="Navegação #01" cor="green" />
            <Navegador destino="/cliente/sp-2/123" texto="Navegação #02" cor="blue" />
            <Navegador destino="/estado" texto="Componenete com Estado" cor="#06A77D" />
            <Navegador destino="/integracao_1" texto="Integração com API" cor="#416788" />
            <Navegador destino="/estatico" texto="Conteúdo Estático" cor="#fa054a" />
        </div>
    )
}