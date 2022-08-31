import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       
    }
    body, html {
        width: 100vw;
        height: 100vh;
        background-color: var(--Grey-4);
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }
    #root{
        width: 100%;
        height: 100%;
    }
    .App{
        width: 100%;
        height: 100%;
    }

    :root {
        --White: #fff;
        --Grey-0: #F8F9FA;
        --Grey-1:  #868E96;
        --Grey-2: #343B41;
        --Grey-3: #212529;
        --Grey-4: #121214;
        --Red: #FF577F;
        --Red-2: #FF427F;
        --Red-3: #59323F;
        --Red-4: #FF0000;

    }
    div, section, aside {
        display: flex;
        flex-direction: column;
    }
    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
    }
    a {
        text-decoration: none;
    }
    ul, li {
        list-style: none;
    }
`
export const SmallButton = styled.button`
    width: 4.971rem;
    height: 1.997rem;
    color: var(--Grey-0);
    font-weight: 600;
    font-size: 0.6rem;
    background-color: var(--Grey-3);
    border: 1px solid var(--Grey-3);
    border-radius: 4px;
    transition: .2s;

    &:hover{
        background-color: var(--Grey-2);
    }
`