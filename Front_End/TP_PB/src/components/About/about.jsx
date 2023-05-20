import HomemFeliz from "../../assets/DoutorFeliz.png"

import { Section } from "../../styled/AboutStyled/aboutStyled"
import { Wrapper } from "../../styled/AboutStyled/wrapperAbout"
import { ColA } from "../../styled/AboutStyled/colA_About"
import { H4_ } from "../../styled/AboutStyled/H4_AboutStyled"
import { H2_ } from "../../styled/AboutStyled/H2_About"
import { Paragraph } from "../../styled/AboutStyled/ParagraphStyled"

export const About = () => {
    return(
        <Section id="about">
            <Wrapper className="wrapper">
                <ColA className="col-a">
                    <header>
                        <H4_>Sobre nós</H4_>
                        <H2_>Entenda quem somos e por que existimos</H2_>
                    </header>

                    <div className="content">
                        <Paragraph>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint. Velit officia consequat duis enim. Amet minim mollit
                        non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                        officia consequat duis enim. Amet minim mollit non deserunt
                        ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim. Amet minim
                        mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        </Paragraph>
                    </div>
                </ColA>

                <div style={{gridArea:"B"}} className="col-b">
                    <img style={{maxWidth:"100%"}}
                        src={HomemFeliz}
                        alt="Doutor feliz segurando prancheta com pacientes"
                    />
                </div>
            </Wrapper>
        </Section>
    )
}