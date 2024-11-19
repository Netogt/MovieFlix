import '../css/errorElement.css'
export default function ErrorElement(){
    return (
        <section className="sectionError">
            <h3>Erro</h3>
            <h2>404</h2>
            <h3>Pagina não encontrada!</h3>
            <p>
                a pagina ou o endpoint solicitado não existe, <br />
                verifique e tente novamente.
            </p>
        </section>
    )
}