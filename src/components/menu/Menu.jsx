import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")} >
            <ul>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#portifolio">Portifolio</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#works">Trabalhos</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#testimonials">Testimunhos</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#contact">Contato</a>
                </li>
            </ul>
        </div>
    )
}
