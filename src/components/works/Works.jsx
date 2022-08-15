import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/smartphone-touchscreen.png" alt="" />
                                </div>
                                <h2>O que é SmartPhone?</h2>
                                <p>Smartphone é um telefone celular, e significa telefone inteligente, 
                                    em português,e é um termo de origem inglesa. 
                                    O smartphone é um celular com tecnologias
                                </p>
                                    <span>Projetos</span>
                            </div>
                        </div>
                        <div className="right">
                            <img 
                        src="https://larepublica.pe/resizer/K_CuBjd--qYEStWKKTCfXf_4X5U=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/FKIDDOTHRZF65F6ZROXCCGBNLY.png" 
                        alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}