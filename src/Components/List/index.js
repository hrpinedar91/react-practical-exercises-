const fruits = ["🍉","🍓","🍋","🍄"]

const index = () => {
    return (
        <div>
            <h2>Componente Ejemplo Listas y Keys</h2>    
            {
                fruits.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            }        
        </div>
    )
}

export default index
