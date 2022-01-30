import { useState } from "react"
import PortifolioList from "../portifolioList/PortifolioList"
import "./portifolio.scss"

export default function Portifolio(){
    const [selected, setSelected] = useState("destaque");
    const list = [
        {
            id: "destaque",
            title: "Destaque",
        },
        {   id: "web",
            title: "App Web",
        },
        {
            id: "mobile",
            title: "App Mobile",
        },
        {
            id: "design",
            title:"Design",
        },
        {
            id: "marca",
            title: "Marca",
        },
    ]
    return(
        <div className="portifolio" id="portifolio">
            <h1>Portifolio</h1>
            <ul>
               {list.map((item) => (
                   <PortifolioList 
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                   />
        
               ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2014/12/13/08/22/mail-566337__340.jpg" alt="" />
                    <h3>Banco do App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2014/12/13/08/22/mail-566337__340.jpg" alt="" />
                    <h3>Banco do App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2014/12/13/08/22/mail-566337__340.jpg" alt="" />
                    <h3>Banco do App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2014/12/13/08/22/mail-566337__340.jpg" alt="" />
                    <h3>Banco do App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2014/12/13/08/22/mail-566337__340.jpg" alt="" />
                    <h3>Banco do App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2014/12/13/08/22/mail-566337__340.jpg" alt="" />
                    <h3>Banco do App</h3>
                </div>
            </div>
        </div>
    )
}