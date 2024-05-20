import styled from "styled-components";

export const RootContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 1rem;
    font: ${(props) => props.theme.ButtonS};
    width: 100%;
    min-width: 11rem;
    gap: 0.75rem;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${(props) => props.theme["base-button"]};;
`