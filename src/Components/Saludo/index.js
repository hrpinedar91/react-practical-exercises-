const user = false

const valores = {
    primary: "text-primary",
    secundary: "text-danger"
}

const Saludo = () => <h2 className={valores.primary}>Saludando</h2>

const Despedida = () => <h2 className={valores.secundary}>Hasta luego</h2>

const index = () => {
    return (
        <div>
            <div className="container">
                <h2>Componente Saludo Condicional</h2>
                {
                    user ? <Saludo /> : <Despedida className={valores.secundary} />
                }
            </div>
        </div>
    )
}

export default index
