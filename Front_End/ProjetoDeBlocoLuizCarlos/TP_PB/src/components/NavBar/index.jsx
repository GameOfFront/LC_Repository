import doctorCare from "../../assets/doctor-care.svg";
import { ButtonLink } from "../../styles";
import whatsapp from "../../assets/whatsapp.svg"
import { DivMenu, Logo, MenuUp, Nav } from "./styles";

export const NavBar = () => {
  return(
  <Nav>
      <DivMenu>
          <div className="logo"><img src={doctorCare} alt="" /></div>
          <Logo  className="menu">
              <MenuUp >
                <li className="text-2xl">
                  <a href="#home" className="text-black no-underline">Início</a>
                </li>
                <li className="text-2xl">
                  <a href="#services" className="text-black no-underline">Serviços</a>
                </li>
                <li className="text-2xl">
                  <a href="#about" className="text-black no-underline">Sobre</a>
                </li>
              </MenuUp>
          </Logo>

          <ButtonLink className=" mt-5 flex items-center justify-center gap-4" href="#contact">
                <img className="" src={whatsapp} alt="" />
                Agende sua consulta
              </ButtonLink>
      </DivMenu>
  </Nav>
  )
}