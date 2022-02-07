import { useState } from "react";
import PortifolioList from "../portifolioList/PortifolioList";
import "./portifolio.scss";
import {
    destaquePortifolio,
    webPortifolio,
    mobilePortifolio,
    designPortifolio,
    marcaPortifolio,

} from "../../data";
import { useEffect } from "react";

export default function Portifolio(){
    const [selected, setSelected] = useState("destaque");
    const [data, setData] = useState([]);
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

    useEffect(()=>{
        switch(selected){
                case "destaque":
                    setData(destaquePortifolio);
                    break;
                    case "web":
                    setData(webPortifolio);
                    break;
                    case "mobile":
                    setData(mobilePortifolio);
                    break;
                    case "design":
                    setData(designPortifolio);
                    break;    
                    case "marca":
                    setData(marcaPortifolio);
                    break;
                    default:
                        setData(destaquePortifolio)     
        }
           
    },[selected])

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
                {data.map((d) => (
                <div className="item">
                    <img 
                    src={d.img}
                    alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}