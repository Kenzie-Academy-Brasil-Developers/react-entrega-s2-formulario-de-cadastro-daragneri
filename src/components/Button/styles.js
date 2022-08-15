import styled from "styled-components";

export const Buttons = styled.button`
    background-color: ${({bcColor}) => bcColor};
    width: 100%;
    font-size: 12.8347px;
    color: var(--White);
    font-weight: 500;
    border-radius: 0.254rem;
    border: 1.2182px solid var(--Red-3);
    transition: .2s;
    padding: 0.512rem 0rem 0.512rem 0rem;

    &:hover {
        background-color: ${({bcHover}) => bcHover}
    }

    @media screen and (min-width: 768px) {
      font-size: 1rem;  
    }

`