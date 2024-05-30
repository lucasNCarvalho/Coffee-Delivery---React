import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    width: 11.12ren;
    display: flex;
    padding: 1rem;
    font: ${(props) => props.theme.ButtonS};
    color: ${(props) => props.theme["base-text"]};
    background-color:  ${(props) => props.theme["base-button"]};
    gap: 0.75rem;
    border-radius: 8px;

    &:hover {
      background-color:  ${(props) => props.theme["base-hover"]};
    }

    input[type="radio"] {
        display: none;
    }

    &[data-state='true'] {
    background-color:  ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple-dark"]};
  }

  
`;