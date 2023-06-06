import styled from "styled-components";


export const FooterStyled = styled.footer`
    padding-block: 8rem;
    text-align: left;
    background-color: hsl(190,100%,26%);
    color: white;

`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'A B';
    width: min(112rem, 100%);

    
`

export const ColA = styled.div`
    align-self: center;
    grid-area: A;

`

export const ColB = styled.div`
    align-self: center;
    justify-self: flex-end;
    grid-area: B;
    
`

export const Logo = styled.a`
    display: inline-block;
    margin-bottom: 2.4rem;
`

export const Paragraph = styled.p`
    margin-bottom: 0;
    color: hsl(39,100%,97%);
    line-height: 2;
`

export const Social_Links = styled.ul`
    justify-content: flex-start;
    display: flex;
    align-items: center;
    gap: 3.2rem;

`

