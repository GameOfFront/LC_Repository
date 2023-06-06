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
`



