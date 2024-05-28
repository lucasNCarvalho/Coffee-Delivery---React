import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    gap: 2rem;
    padding-bottom: 15rem;
    
    form {
        margin-top: calc(1.62rem - 0.75rem);
    }

    
    @media (min-width: 768px) { 

    flex-direction: row;
    justify-content: space-between;

    }
`

export const Title = styled.p`
    font: ${(props) => props.theme["Baloo2-Title-XS Bold"]};
`
