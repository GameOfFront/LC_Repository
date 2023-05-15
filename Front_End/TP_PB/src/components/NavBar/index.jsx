import doctorCare from "../../assets/doctor-care.svg"


export const NavBar = () => {
    return(
    <nav style={{display: "flex", height: "7.2rem", position:"fixed", top:"0",width:"100vw", zIndex:"100"}} id="navigation">
        <div className="logo"><img src={doctorCare} alt="" /></div>
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}} className="wrapper">
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