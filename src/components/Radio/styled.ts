import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;


    input[type="radio"] {
        display: none;
    }

    &[data-state='true'] {
    background-color: ${({ theme }) => 'red'};
    border-color: ${({ theme }) => 'red'};
  }

`;