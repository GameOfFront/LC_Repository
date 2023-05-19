import mulher from "../../assets/mulherDeVerde.png" 
import { HomeStyled } from "../../styled/homeStyled/HomeStyled"
import { Wrapper } from "../../styled/homeStyled/wrapperStyled"
import { Col_a } from "../../styled/homeStyled/Col_A"
import { Col_b } from "../../styled/homeStyled/Col_B"
import { Col_c } from "../../styled/homeStyled/Col_C"
import { HeaderColA } from "../../styled/homeStyled/HeaderCol_A"
import { H4_HeaderA } from "../../styled/homeStyled/H4_Header"
import { H1_HeaderA } from "../../styled/homeStyled/H1_HeaderColA"
import { P_content } from "../../styled/homeStyled/Content_P"
import { BotaoA } from "../../styled/homeStyled/Botao_A_Content"
import { Stat } from "../../styled/homeStyled/stat"

export const Home = () => {
    return(
        <HomeStyled id="home">
            <Wrapper className="wrapper">
                <Col_a className="col-a">
                    <HeaderColA>
                        <H4_HeaderA>BOAS-VINDAS A DOCTORCARE 👋</H4_HeaderA>
                        <H1_HeaderA>Assistência médica simplificada para todos</H1_HeaderA>
                    </HeaderColA>

                    <div className="content">
                        <P_content>
                            Os médicos da DoctorCare vão além dos sintomas para tratar a causa
                            raiz de sua doença e proporcionar uma cura a longo prazo.
                        </P_content>
                        <BotaoA className="button" href="#contact">
                            <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M13.8337 11.6667C13.667 11.5833 12.5837 11.0833 12.417 11C12.2503 10.9167 12.0837 10.9167 11.917 11.0833C11.7503 11.25 11.417 11.75 11.2503 11.9167C11.167 12.0833 11.0003 12.0833 10.8337 12C10.2503 11.75 9.66699 11.4167 9.16699 11C8.75033 10.5833 8.33366 10.0833 8.00033 9.58334C7.91699 9.41668 8.00033 9.25001 8.08366 9.16668C8.16699 9.08334 8.25033 8.91668 8.41699 8.83334C8.50033 8.75001 8.58366 8.58334 8.58366 8.50001C8.66699 8.41668 8.66699 8.25001 8.58366 8.16668C8.50033 8.08334 8.08366 7.08334 7.91699 6.66668C7.83366 6.08334 7.66699 6.08334 7.50033 6.08334C7.41699 6.08334 7.25033 6.08334 7.08366 6.08334C6.91699 6.08334 6.66699 6.25001 6.58366 6.33334C6.08366 6.83334 5.83366 7.41668 5.83366 8.08334C5.91699 8.83334 6.16699 9.58334 6.66699 10.25C7.58366 11.5833 8.75033 12.6667 10.167 13.3333C10.5837 13.5 10.917 13.6667 11.3337 13.75C11.7503 13.9167 12.167 13.9167 12.667 13.8333C13.2503 13.75 13.7503 13.3333 14.0837 12.8333C14.2503 12.5 14.2503 12.1667 14.167 11.8333C14.167 11.8333 14.0003 11.75 13.8337 11.6667ZM15.917 4.08334C12.667 0.833344 7.41699 0.833344 4.16699 4.08334C1.50033 6.75001 1.00033 10.8333 2.83366 14.0833L1.66699 18.3333L6.08366 17.1667C7.33366 17.8333 8.66699 18.1667 10.0003 18.1667C14.5837 18.1667 18.2503 14.5 18.2503 9.91668C18.3337 7.75001 17.417 5.66668 15.917 4.08334ZM13.667 15.75C12.5837 16.4167 11.3337 16.8333 10.0003 16.8333C8.75033 16.8333 7.58366 16.5 6.50033 15.9167L6.25033 15.75L3.66699 16.4167L4.33366 13.9167L4.16699 13.6667C2.16699 10.3333 3.16699 6.16668 6.41699 4.08334C9.66699 2.00001 13.8337 3.08334 15.8337 6.25001C17.8337 9.50001 16.917 13.75 13.667 15.75Z"
                                fill="white"
                            />
                            </svg>
                            Agende sua consulta
                        </BotaoA>
                    </div>
                </Col_a>

                <Col_b className="col-b"><img src={mulher} alt="" /></Col_b>

                <Col_c className="stats">
                    <Stat  className="stat">
                        <h3 style={{fontSize: "4.8rem", color:"hsl(210, 11%, 15%)", lineHeight:"130%",marginBottom:"0.4rem"}}>+3.500</h3>
                        <p style={{color:"hsl(190, 100%, 26%)",margin:"0",fontSize:"1.6rem",lineHeight:"150%"}}>Pacientes atendidos</p>
                    </Stat>

                    <Stat style={{borderLeft: "1px solid", color:"hsl(190, 100%, 26%)"}} className="stat">
                        <h3 style={{fontSize: "4.8rem", color:"hsl(210, 11%, 15%)", lineHeight:"130%",marginBottom:"0.4rem"}}>+15</h3>
                        <p style={{color:"hsl(190, 100%, 26%)",margin:"0",fontSize:"1.6rem",lineHeight:"150%"}}>Especialistas disponíveis</p>
                    </Stat>

                    <Stat style={{borderLeft: "1px solid", color:"hsl(190, 100%, 26%)"}} className="stat">
                        <h3 style={{fontSize: "4.8rem", color:"hsl(210, 11%, 15%)", lineHeight:"130%",marginBottom:"0.4rem"}}>+10</h3>
                        <p style={{color:"hsl(190, 100%, 26%)",margin:"0",fontSize:"1.6rem",lineHeight:"150%"}}>Anos no mercado</p>
                    </Stat>
                </Col_c>
            </Wrapper>
        </HomeStyled>
    )
}