import styled from 'styled-components'

export const Styled = {
    Wrapper : styled.div`
        width: 100%;
        height: 270px;
        border-radius: 40px;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
    `,
    Header: styled.div`
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: #818181;
    `,
    Footer: styled.div`
        height: 170px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: ${({ nightmode }) => (nightmode ? "#424242" : "#fff")};

    `
}