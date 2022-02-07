import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro () {

    const textRef = useRef();

    useEffect(()=>{
      init(textRef.current, { 
          showCursor: true,
          backDelay:1500,
          backSpeed:60, 
          strings: ['Developer', ' Designer','Criador de Conteudo!' ],
        });
    }, []);


    return (
        <div className="intro" id="intro">
           <div className="left">

                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
           </div>
           <div className="right">
               <div className="wrapper">
                   <h1>Olá, eu sou..</h1>
                   <h2>Cristiano Manoel Da Silva</h2>
                   <h3>Freelance <span ref={textRef}>Designer</span></h3>
               </div>
               <a href="#portifolio">
                   <img src="assets/selecionado.png" alt="" />
               </a>
           </div>
        </div>
    )
}