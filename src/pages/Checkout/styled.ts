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

export const CheckoutFooter = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    padding: 2.5rem;
    background-color: ${(props) => props.theme["base-card"]};

    h1 {
        font: ${(props) => props.theme["Roboto-TextM Regular"]};
    }
`

export const PaymentContainer = styled.div`
    display: flex;
    gap: 0.75rem;
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
    margin-bottom: 2rem;

    h1 {
        color: ${(props) => props.theme["base-subtitle"]};
        font: ${(props) => props.theme["Roboto-TextM Regular"]};
    }

    p {
        color: ${(props) => props.theme["base-text"]};
        font: ${(props) => props.theme["Roboto-TextS Regular"]};
    }
`