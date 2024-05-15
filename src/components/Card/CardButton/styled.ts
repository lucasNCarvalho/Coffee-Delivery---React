import styled from "styled-components";

export const CardButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme["base-button"]};
    width: 72px;
    border-radius: 4px;
    padding: 0.53rem 0.53rem;

    p {
        font: ${(props) => props.theme["Roboto-TextM Regular"]};
    }

    h1 {
        color:  ${(props) => props.theme.purple};
        font: bold
    }
`