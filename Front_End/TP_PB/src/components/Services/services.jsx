import { Wrapper } from "../../styled/homeStyled/wrapperStyled"
import { H4_ } from "../../styled/ServicesStyled/wrapperH4"
import { H2_ } from "../../styled/ServicesStyled/wrapperH2"
import { Cards } from "../../styled/ServicesStyled/cards"
import { Card } from "../../styled/ServicesStyled/card"
import { Paragrafo } from "../../styled/ServicesStyled/card_P"

export const Services = () => {
    return(
        <section style={{paddingBlock:"16rem",backgroundColor:"hsl(180, 14%, 97%)"}} id="services">
            <Wrapper className="wrapper">
                <header style={{display:"block",textAlign:"center", overflow:"overlay"}}>
                    <H4_>Serviços</H4_>
                    <H2_>Como podemos ajudá-lo a se sentir melhor?</H2_>
                </header>
        
                <div style={{textAlign:"center", overflow:"overlay"}} className="content">
                    <Cards className="cards">
                        <Card className="card">
                            <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                            <path
                                d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                                stroke="#00856F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
            
                            <h3 style={{marginBlock:"1.6rem"}}>Problemas digestivos</h3>
                            <Paragrafo>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim.
                            </Paragrafo>
                        </Card>
            
                        <Card className="card">
                            <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                            <path
                                d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                                stroke="#00856F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
            
                            <h3 style={{marginBlock:"1.6rem"}}>Saúde Hormonal</h3>
                            <Paragrafo>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim.
                            </Paragrafo>
                        </Card>
            
                        <Card className="card">
                            <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                            <path
                                d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                                stroke="#00856F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
            
                            <h3 style={{marginBlock:"1.6rem"}}>Bem-estar mental</h3>
                            <Paragrafo>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim.
                            </Paragrafo>
                        </Card>
            
                        <Card className="card">
                            <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                            <path
                                d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                                stroke="#00856F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
            
                            <h3 style={{marginBlock:"1.6rem"}}>Cuidados Pediátricos</h3>
                            <Paragrafo>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim.
                            </Paragrafo>
                        </Card>
            
                        <Card className="card">
                            <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                            <path
                                d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                                stroke="#00856F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
            
                            <h3 style={{marginBlock:"1.6rem"}}>Autoimune e Inflamação</h3>
                            <Paragrafo>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim.
                            </Paragrafo>
                        </Card>
            
                        <Card className="card">
                            <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                            <path
                                d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                                stroke="#00856F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
            
                            <h3 style={{marginBlock:"1.6rem"}}>Saúde do Coração</h3>
                            <Paragrafo>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim.
                            </Paragrafo>
                        </Card>
                    </Cards>
                </div>
            </Wrapper>
        </section>
  
    )
}