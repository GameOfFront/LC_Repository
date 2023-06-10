import { Card, Cards, H2_, H4_, Paragrafo, WrapperServices } from "./styles"

export const Services = () => {
    return(
        <section className="py-4 custom-padding-block bg-customCinza" id="services">
            <WrapperServices className="">
                <header className="block text-center overflow-auto">
                    <div className="relative">
                        <H4_>Serviços</H4_>
                        <H2_>Como podemos ajudá-lo a se sentir melhor?</H2_>
                    </div>
                    
                </header>
                
                <div className="relative">
                    
                    <div className="text-center overflow-auto">
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
                
                                <h3 className="mb-4 text-2xl" >Problemas digestivos</h3>
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
                
                                <h3 className="mb-4 text-2xl">Saúde Hormonal</h3>
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
                
                                <h3 className="mb-4 text-2xl">Bem-estar mental</h3>
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
                
                                <h3 className="mb-4 text-2xl">Cuidados Pediátricos</h3>
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
                
                                <h3 className="mb-4 text-2xl">Autoimune e Inflamação</h3>
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
                
                                <h3 className="mb-4 text-2xl">Saúde do Coração</h3>
                                <Paragrafo>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                amet sint. Velit officia consequat duis enim.
                                </Paragrafo>
                            </Card>
                        </Cards>
                    </div>
                </div>

            </WrapperServices>
        </section>
  
    )
}