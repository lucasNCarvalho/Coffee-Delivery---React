import styled from "styled-components";

export const IncrementButtonContainer = styled.div`
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme["base-button"]};
    width: 100%;
    min-width: 72px;
    border-radius: 4px;
    gap: 0.25rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    border-radius: 8px;

    p {
        font: ${(props) => props.theme["Roboto-TextM Regular"]};
        padding: 0.53rem 0;
    }

    span {
        font: inherit !important;
        color:  ${(props) => props.theme.purple};
        font-weight: bold;
        cursor: pointer;
    }
`