import styled from "styled-components";

export const CardContainer = styled.div`
    max-width: 16rem;
    padding: 0 1.5rem;
    background-color: ${(props) => props.theme["base-card"]};
    text-align: center;
    border-top-right-radius: 1.8rem;
    border-bottom-left-radius: 1.8rem;
`
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: -1.25rem;
        max-width: 7.5rem;
    }
   
   span {
    margin-top: 0.75em;
    padding: 2px 10px;
    border-radius: 999px;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    font: ${(props) => props.theme.Tag};
   }

   h1 {
    margin-top: 1rem;
    font: ${(props) => props.theme["Baloo2-Title-S Bold"]};
   }

   p {
    padding-top: 0.5rem;
    font: ${(props) => props.theme["Roboto-TextS Regular"]};
    color: ${(props) => props.theme["base-label"]}
   }

`

export const Label = styled.div`
    display: flex;
    gap: 0.25rem;
`

export const Footer = styled.div`
    padding-top: 2.28rem;
    padding-bottom: 1.78rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
   

    h1 { 
        font: ${(props) => props.theme["Roboto-TextS Regular"]};
    }

    span {
        font: ${(props) => props.theme["Baloo2-Title-M ExtraBold"]};
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        svg {
           width: 100%;
           padding: 8px;
           border-radius: 8px;
           cursor: pointer;
        }
    }
`