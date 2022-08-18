import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: auto;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0, 45%);

    .content {
        position: absolute;
        display: flex;
        width: 100%;
        max-width: 369px;
        height: 342px;
        max-height: 342px;
        border-radius: 4px;
        background-color: var(--Grey-3);
    
    }
    .top-box-modal {
        display: flex;
        justify-content: space-between;
        border-radius: 4px 4px 0px 0px;
        background-color: var(--Grey-2);
        padding: 12px 20px 14px 20px;
        color: var(--White);
    }
    .close {
        position: absolute;
        top: 12px;
        right: 20px;
        background: transparent;
        border: none;
        opacity: .5;
        transition: .4s;
        &:hover {
            opacity: 1;
        }
    }
    .content-children {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
       
        
    }
`;