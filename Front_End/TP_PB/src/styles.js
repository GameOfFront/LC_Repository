import styled from "styled-components";

export const ButtonLink = styled.a`
    display: none;
    @media (min-width: 1280px) {
        background: hsl(190, 100%, 26%);
        border: none;
        border-radius: 4rem;

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
        cursor: pointer;
    }


`