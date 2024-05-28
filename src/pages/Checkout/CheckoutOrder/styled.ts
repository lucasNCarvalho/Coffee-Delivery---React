import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 2.5rem;
    padding-top: 2.5rem;
    padding-right: 2.5rem;
    background-color: ${(props) => props.theme["base-card"]};
    width: 28rem;
    border-top-right-radius: 30px;

    
`

export const OrderContainer = styled.div`
    display: flex;
    
    width: 100%;
    max-width: 23rem;
    background-color: ${(props) => props.theme["base-card"]};
    padding: 0.5rem 0;
    padding-left: 0.25rem;
    padding-bottom: 1.5rem;

    &:not(:first-child) {
        border-top: 2px solid ${(props) => props.theme["base-button"]};
        padding-top: 1.5rem;
    }

    img {
        width: 100%;
        max-width: 4rem;
    }

    h1 {
        font: ${(props) => props.theme["Roboto-TextM Regular"]}
    }

`

export const OrderButtons = styled.div`
    display: flex;
    padding-top: 0.5rem;
    gap: 0.5rem;
`

export const OrderContent = styled.div`

    margin-left: 1.25rem;
    min-width: 10.68rem;
    
`

export const OrderValue = styled.span`
    font: ${(props) => props.theme["Roboto-TextM Bold"]};
    color: ${(props) => props.theme["base-text"]};
    margin-left: 3.1rem;
`

interface PriceContainerProps {
    $bold?: boolean;
}

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.81rem;
    width: 100%;
    color: ${(props) => props.theme["base-text"]};;
    border-top: 2px solid ${(props) => props.theme["base-button"]};
    padding-top: 1.5rem;
`

export const PriceItem = styled.div<PriceContainerProps>`
    display: flex;
    justify-content: space-between;
    
    p {
        font: ${(props) => props.$bold ? props.theme["Roboto-TextL Bold"] : props.theme["Roboto-TextS Regular"]};
    }

    span {
        font: ${(props) =>props.$bold ? props.theme["Roboto-TextL Bold"] : props.theme["Roboto-TextM Regular"]};
    }
`

export const PriceButton = styled.button`
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    padding: 0.75rem 0;
    border: 0;
    border-radius: 8px;
    margin-bottom: 2.5rem;
    cursor: pointer;
`