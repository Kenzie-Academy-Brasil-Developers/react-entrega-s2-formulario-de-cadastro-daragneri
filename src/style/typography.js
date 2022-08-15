import styled, {css} from "styled-components";
import BaseTitle from "../components/BaseTitle";


export const ThemeLogo = styled.img`
  width: 6.313rem;
  height: 0.875rem;
  
  @media screen and (min-width: 768px){
   width: 9.004rem;
   height: 1.248rem;
   background-color: var(--Red);
  }
`;

export const ThemeTitle = styled(BaseTitle)`
    color: var(--Grey-0);
    font-weight: 700;
    ${(props) => {
        switch(props.titleSize){
            case 'title1':
                return css`
                font-size: 14.439px;
                @media (min-width: 768px){
                    font-size: 18px;
                }

                `
                case 'title2':
                return css`
                font-size: 18px;
                @media (min-width: 768px){
                    font-size: 18px;                    
                }
                `
                case 'title3':
                return css`
                font-size: 18px;
                `
            default: 
            return false;
        }
    }}   
`;

export const ThemeLabel = styled.label`
    font-family: 'Inter', sans-serif;
    font-size: 12.99px;
    font-weight: 400;
    color: var(--Grey-0);
    text-align: left;
    padding-bottom: 4px;

    @media screen and (min-width: 768px) {
        font-size: 16.2426px;
    }
`;

export const ThemeLabelRegister = styled.span`
    font-weight: 400;
    font-size: 0.6rem;
    color: var(--Grey-1);

    @media screen and (min-width: 768px) {
        font-size: 0.75rem;
    }
`;

export const ThemeInput = styled.input`
    font-size: 13.0293px;
    background-color: var(--Grey-2);
    color: var(--Grey-1);
    padding: 0.526rem 0.814rem;
    border: ${(props) => props.border};
    border-radius: 3.20867px;
    height: 2.375rem;

    &::placeholder{
        color: var(--Grey-1);
    }
    @media screen and (min-width: 768px) {
        font-size: 16.2426px;
        padding: 0.656rem 1.015rem;
    }
`;

export const ThemeSmallLink = styled.a`
    font-size: 0.602rem;
    color: var(--White);
    font-weight: 600;

    @media screen and (min-width: 768px) {
        font-size: 0.75rem;
    }
`;

export const ThemeP = styled.p`
    color: var(--Grey-1);
    font-weight: 600;
    font-size: 9.63px;

    @media screen and (min-width: 768px) {
        font-size: 12px;
    }

`;
export const SmallError = styled.small`
    color: var(--Red-4);
    text-align: left;
    font-size: 11px;
    padding-top: 4px;

    @media screen and (min-width: 768px){
        font-size: 13px;
    }
`;
export const ThemeLabelDashboard = styled.span`
    font-weight: 400;
    font-size: 12px;
    color: var(--Grey-1);
`