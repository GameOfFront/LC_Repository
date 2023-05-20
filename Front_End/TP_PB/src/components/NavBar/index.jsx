import doctorCare from "../../assets/doctor-care.svg"
import { Nav } from "../../styled/NavBar/navStyled"
import { DivMenu } from "../../styled/NavBar/divStyled"
import { MenuUp } from "../../styled/NavBar/Menu"
import { Botao } from "../../styled/NavBar/BotaoStyled"
import { Logo } from "../../styled/NavBar/LogoStyled"

export const NavBar = () => {
    return(
    <Nav>
        <DivMenu>
            <div className="logo"><img src={doctorCare} alt="" /></div>
            <Logo  className="menu">
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