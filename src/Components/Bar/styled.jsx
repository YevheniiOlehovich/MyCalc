import styled from "styled-components";

export const Styled = {
    Wrapper : styled.div`
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        @media (max-width: 425px) {
            height: 20px;
        }
    `,
    ToggleBox : styled.div`
        width: 100px;
        height: 40px;
        @media (max-width: 425px) {
            height: 30px;
            width: 75px;
        }
    `
}