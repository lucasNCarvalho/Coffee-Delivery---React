import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 2.5rem;
    background-color: ${(props) => props.theme["base-card"]};
    width: 40rem;
    gap: 1rem;
    flex-wrap: wrap;
    border-radius: 8px;
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
interface BaseInputProps {
    $full?: boolean;
}

export const BaseInput = styled.input<BaseInputProps>`

    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-button"]} ;
    height: 0.93rem;
    padding: 0.75rem;
`

export const Input = styled(BaseInput)<BaseInputProps & { customwidth?: string }>`
  width: ${(props) => (props.$full ? '100%' : props.customwidth ? props.customwidth : 'auto')};

`;

export const GridForm = styled.div`
    display: flex;
    gap: 0.75rem;
    width: 100%;

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

export const HeaderFooter = styled.div`
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