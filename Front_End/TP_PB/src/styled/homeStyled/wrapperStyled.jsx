import styled from "styled-components";

export const Wrapper = styled.div`
    grid-template-columns: 60.5rem 1fr;
    grid-template-areas:
        'A B'
        'C C';
    width: min(112rem, 100%);
    display: grid;
    margin-inline: auto;
    padding-inline: 2.4rem;
`

