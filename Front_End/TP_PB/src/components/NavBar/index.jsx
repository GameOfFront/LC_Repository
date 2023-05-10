import doctorCare from "../../assets/doctor-care.svg"


export const NavBar = () => {
    return(
    <nav id="navigation">
        <div className="logo"><img src={doctorCare} alt="" /></div>
        <div className="wrapper">
            <ul className="menu">
                <li>
                    <a>Início</a>
                </li>
                <li>
                    <a>Serviços</a>
                </li>
                <li>
                    <a>Sobre</a>
                </li>
            </ul>
        </div>
        <div><button>Agende sua consulta</button></div>
        
    </nav>
    )
}