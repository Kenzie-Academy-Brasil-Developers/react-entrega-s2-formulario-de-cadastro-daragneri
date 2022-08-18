import styled from "styled-components";

export const Li = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 13px 22.2px;
    background-color: var(--Grey-4);
    color: white;
    border-radius: 4px;

    .li-box {
        display: flex;
        flex-direction: row;
        gap: 10px;
        @media screen and (min-width: 768px) {
            gap: 25.3px;         
        }

        button {
            background-color: transparent;
            border: none;
        }
    }
`;