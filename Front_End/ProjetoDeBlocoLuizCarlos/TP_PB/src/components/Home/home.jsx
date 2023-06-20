import mulher from "../../assets/mulherDeVerde.png" 
import {Col_a, Col_b, Col_c, H1_HeaderA, H4_HeaderA, HeaderColA, HomeStyled, P_content, Stat, Wrapper} from "./styles"
import whatsapp from "../../assets/whatsapp.svg"
import { ButtonLink } from "../../styles";

export const Home = () => {
    return(
        <HomeStyled id="home">
            <Wrapper >
                <Col_a >
                    <HeaderColA>
                        <H4_HeaderA className="">BOAS-VINDAS A DOCTORCARE 👋</H4_HeaderA>
                        <H1_HeaderA>Assistência médica simplificada para todos</H1_HeaderA>
                    </HeaderColA>

                    <div className="content">
                        <P_content>
                            Os médicos da DoctorCare vão além dos sintomas para tratar a causa
                            raiz de sua doença e proporcionar uma cura a longo prazo.
                        </P_content>
                        <ButtonLink className="2xl:ml-[400px]" ><img src={whatsapp} alt="" />Agende sua consulta</ButtonLink>
                    </div>
                </Col_a>

                <Col_b ><img src={mulher} alt="" /></Col_b>

                <Col_c >
                    <Stat >
                        <h3 className="text-center text-6xl text-gray-800 leading-7 mx-16 my-1">+3.500</h3>
                        <p className="mt-4  text-center mb-1 text-customBlueColor text-2xl leading-6">Pacientes atendidos</p>
                    </Stat>

                    <Stat >
                        <h3 className="text-center text-6xl text-gray-800 leading-7 mx-16 my-1">+15</h3>
                        <p className="mt-4 text-center mb-1 text-customBlueColor text-2xl leading-6">Especialistas disponíveis</p>
                    </Stat>

                    <Stat >
                        <h3 className="text-center text-6xl text-gray-800 leading-7 mx-16 my-1">+10</h3>
                        <p className="mt-4 text-center mb-1 text-customBlueColor text-2xl leading-6">Anos no mercado</p>
                    </Stat>
                </Col_c>
            </Wrapper>
        </HomeStyled>
    )
}