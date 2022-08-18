import styled from "styled-components";

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 20px 20px 0px 20px;

    .input-box {
        gap: 12px;
    }
    .register-tec {
        padding: 0px 22.3336px;
        width: 324px;
        height: 48px;
        background: var(--Red);
        border: 1.2182px solid var(--Red);
        border-radius: 4.06066px;
        transition: 0.3s;
        font-family: 'Inter';
        font-weight: 500;
        font-size: 16px;
        color: var(--White);      
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        

        .button-save {
            width: 60%;
            padding: 0px 22.3336px;
            height: 48px;
            background: var(--Red-3);
            border: 1.2182px solid var(--Red-3);
            border-radius: 4px;

            font-family: 'Inter';
            font-weight: 500;
            font-size: 16px;
            color: var(--White);
        }
        .button-delete {
            width: 35%;
            padding: 0px 22.3336px;
            height: 48px;
            background: var(--Grey-1);
            border: 1.2182px solid var(--Grey-1);
            border-radius: 4px;

            font-family: 'Inter';
            font-weight: 500;
            font-size: 16px;
            color: var(--White);
        }
    }

`;