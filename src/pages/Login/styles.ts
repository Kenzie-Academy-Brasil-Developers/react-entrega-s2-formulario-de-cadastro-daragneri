import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 7.063rem;
    padding: 0.781rem;

    .nav-box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 370px;
        
    }
`;
export const Img = styled.img`
    width: 101px;
    height: 14px;

    @media screen and (min-width: 768px){
        width: 144.06px;
        height: 19.97px;
    }
`;
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0.781rem;
    padding-bottom: 2.5rem;

`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 370px;
    min-height: 402px;
    padding: 2.625rem 1rem 2.625rem 1rem;
    gap: 1rem;
    text-align: center;
    background-color: var(--Grey-3);
    border-radius: 4px;

    #modules {
        margin-bottom: 1.2rem;
        height: 38px;
        background-color: var(--Grey-2);
        color: var(--Grey-1);
        border-radius: 5px;
        border: none;
        font-size: 13.0293px;
        padding: 0.526rem 0.814rem;
        margin: 1rem 0rem;

        @media screen and (min-width: 768px){
        font-size: 16.2426px;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    background-color: var(--Grey-3);
    border-radius: 4px;
    gap: 17px;
`;

