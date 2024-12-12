import styled from 'styled-components'

export const Styled = {
    Wrapper : styled.div`
        width: 100%;
        height: 420px;
        border-radius: 40px;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        position: relative;
        @media (max-width: 425px) {
            height: auto;
        }
    `,
    Row: styled.div`
        display: flex;
        width: 100%;
        justify-content: space-between;
    `,
    Column: styled.div`
        display: flex;
        flex-direction: column;
    `,
    Block: styled.div`
        display: flex;
        width: 226px;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        left: 0;
        @media (max-width: 426px) {
            width: 240px;
        }
        @media (max-width: 426px) {
            width: 226px;
        }
    `
}