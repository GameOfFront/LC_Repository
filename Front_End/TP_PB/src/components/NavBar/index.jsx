import doctorCare from "../../assets/doctor-care.svg"
import { Nav } from "../../styled/navStyled"
import { DivMenu } from "../../styled/divStyled"
import { MenuUp } from "../../styled/Menu"
import { Botao } from "../../styled/BotaoStyled"
import { Logo } from "../../styled/LogoStyled"

export const NavBar = () => {
    return(
    <Nav>
        <DivMenu>
            <div className="logo"><img src={doctorCare} alt="" /></div>
            <Logo style={{}} className="menu">
                <MenuUp >
                    <li>
                        <a>Início</a>
                    </li>
                    <li>
                        <a>Serviços</a>
                    </li>
                    <li>
                        <a>Sobre</a>
                    </li>
                </MenuUp>
            </Logo>

            <div><Botao>Agende sua consulta</Botao></div>
        </DivMenu>
        
    </Nav>
    )
}