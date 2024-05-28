import styled from "styled-components";

export const DeleteButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    width: 100%;
    min-width: 5.6rem;
    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 8px;
    cursor: pointer;

    p {
        font: ${(props) => props.theme.ButtonS};
    }

`