import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2.06rem 0;

    div {
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

`
export const CartContainer = styled.div`

    position: relative;
`

export const CartOrderNotification = styled.p`
    display: flex;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    border-radius: 999px;
    padding: 2px 8px;
`