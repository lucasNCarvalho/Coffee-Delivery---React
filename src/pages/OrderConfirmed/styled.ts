import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;

    h1 {
        color: ${(props) => props.theme["yellow-dark"]};
        font: ${(props) => props.theme["Baloo2-Title-L ExtraBold"]};
    }

    p {
        color: ${(props) => props.theme["base-subtitle"]};
        font: ${(props) => props.theme["Roboto-TextL Relugar"]};
    }
`

export const OrderContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    margin-top: 2.5rem;
    border: 1px solid transparent;
    border-image: linear-gradient(to right, ${(props) => props.theme["yellow-dark"]},${(props) => props.theme["purple-dark"]}) 1;
    border-bottom-left-radius: 22px;
    border-top-right-radius: 22px;
`


export const OrderItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
        
        color:  ${(props) => props.theme["base-text"]};
        font: ${(props) => props.theme["Roboto-TextM Regular"]};
    }

    span {
        font-weight: bold;
        color: ${(props) => props.theme["base-text"]};
    }

    svg {
           padding: 8px;
           border-radius: 999%;
        }

`