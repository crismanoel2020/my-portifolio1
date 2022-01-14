import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")} >
            <ul>
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#portifolio">Portifolio</a>
                </li>
                <li>
                    <a href="#works">Trabalhos</a>
                </li>
                <li>
                    <a href="#testimonials">Testimunhos</a>
                </li>
                <li>
                    <a href="#contact">Contato</a>
                </li>
            </ul>
        </div>
    )
}
