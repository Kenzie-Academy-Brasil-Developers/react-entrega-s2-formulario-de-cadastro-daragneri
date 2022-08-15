import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 82px;
    padding: 0.781rem;
    border-bottom: 1px solid var(--Grey-3);

    .nav-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 90%;  
        
        @media screen and (min-width: 768px){
          width: 70%;  
        }
    }
`;
export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.781rem;
    height: 100px;
    border-bottom: 1px solid var(--Grey-3);


    .header-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        align-items: center;

        @media screen and (min-width: 768px){
            width: 70%;
        }
    }
`;
export const Main = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.781rem;
    
`;
export const Container = styled.div`
    display: flex;
    width: 90%;
    gap: 1rem;
    padding: 1rem 0rem;

    @media screen and (min-width: 768px){
        width: 70%;
    }
`;

