import HomemFeliz from "../../assets/DoutorFeliz.png"
import { Col_IMG, Col_Texto, Img, Wrapper, AboutUs, AboutText, BlocoText, Paragrafo } from "./styles"



export const About = () => {
    return(
        <Wrapper >
            <Col_IMG>
                <Img src={HomemFeliz} alt="Doutor feliz segurando prancheta com pacientes" />
            </Col_IMG>
            <Col_Texto >
                <header>
                    <AboutUs >Sobre nós</AboutUs>
                    <AboutText >Entenda quem somos e por que existimos</AboutText>
                </header>
                <BlocoText >
                    <Paragrafo >
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </Paragrafo>
                </BlocoText>
            </Col_Texto>
        </Wrapper>
    )
}