
export const CarouselHome = () => {
    return (
        <article className='carousel'>
            <div className="carousel-content content">

                <div className='carousel-title'>
                    <h1>Disfruta de la mas bella experiencia gastronomica </h1>
                </div>
                <div className="carousel-cards">
                    <div className='carousel-cards-items'>
                        <img src="/src/assets/img/lomo.jpg" alt="" />
                        <p>
                            Disfruta de los mas suculentos cortes
                        </p>
                    </div>
                    <div className='carousel-cards-items'>
                        <img src="/src/assets/img/sodas-saborisadas.jpg" alt="" />
                        <p>
                            Refrescate con nuestras sodas de la casa
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}
