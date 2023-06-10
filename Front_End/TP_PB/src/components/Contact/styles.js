import styled from "styled-components";

export const Button = styled.button`
    background: hsl(190,100%,26%);
    border: none;
    border-radius: 4rem;
    margin-bottom: 6rem;
    padding: 1.6rem 3.2rem;
    width: fit-content;
    color: white;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    text-decoration: none;
    transition: background 200ms;

    @media (max-width: 768px) {
        margin-left: 225px;
}

`
export const Section = styled.section`
    text-align: left;
    padding-block: 16rem;

`
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 3.2rem;


`
export const Li = styled.li`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 57.5rem;
    grid-template-areas: 'A B';
    width: min(112rem, 100%);
    @media (max-width: 640px) {
        grid-template-columns: 1fr;  /* Define apenas uma coluna para telas menores ou iguais a 640px */
        grid-template-areas: 'A' 'B';  /* Cada elemento ocupa uma linha separada */
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;  /* Define apenas uma coluna para telas menores ou iguais a 640px */
        grid-template-areas: 'A' 'B';  /* Cada elemento ocupa uma linha separada */
    }
`
export const EntreEmContato = styled.h2`
width: 40.4rem;
font-size: 4rem;
line-height: 5.2rem;
color: hsl(210,11%,15%);

@media (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60rem;
}

@media (max-width: 768px) {
    text-align: center;
    width: 60rem;
    padding-left: 10rem;
}
`
export const Img = styled.img`
max-width:100%;
height: 250px;

@media (max-width: 640px) {
    max-width:100%;
    height: 340px;
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    max-width:100%;
    height: 450px;
    margin-bottom: 20px;
}

@media (max-width: 1024px) {
    max-width:100%;
    height: 350px;
}

@media (max-width: 1280px) {
    max-width:100%;
    height: 450px;
}
` 

export const Localizacao = styled.div`


`