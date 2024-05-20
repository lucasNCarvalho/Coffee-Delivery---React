import styled from "styled-components";


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5.87rem;
    margin-bottom: 9.81rem;
    /* margin-right: 10rem;
    margin-left: 10rem;; */
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    gap: 3.5rem;

    img {
       @media (max-width: 1290px) { 

        display: none; 

        }
    }

`

export const HeaderTextSection = styled.div`
    margin: 0.125rem 0;
    

    h1 {
        font: ${(props) => props.theme["Baloo2-Title-XL ExtraBold"]};
    }

    p {
        font: ${(props) => props.theme["Roboto-TextL Relugar"]};
        color: ${(props) => props.theme["base-subtitle"]}
    }
`



export const GridIcon = styled.div`
    display: grid;
    margin-top: calc(5.12rem - 1.25rem) ;
    grid-template-columns: 1fr;
    padding-bottom: 6.75rem;
    
    p {
        display: flex;
        align-items: center;
        padding: 0.34rem 0;
        margin-top: 1.25rem;
        gap: 12px;
       
        font: ${(props) => props.theme["Roboto-TextM Regular"]};

        svg {
           padding: 8px;
           border-radius: 999%;
        }


    }

    @media (min-width: 768px) { 

        grid-template-columns: 1fr 1fr

    }

`


export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 2.12rem;
    gap: 2.5rem;
    justify-items: center;


    @media (min-width: 768px) { 

        grid-template-columns: 1fr 1fr

    }

    @media (min-width: 1024px) { 

         grid-template-columns: 1fr 1fr 1fr

    }

    @media (min-width: 1280px) { 

        grid-template-columns: 1fr 1fr 1fr 1fr

    }   
`

export const Body = styled.div`
    p {
        font: ${(props) => props.theme["Baloo2-Title-L ExtraBold"]};
    }
`