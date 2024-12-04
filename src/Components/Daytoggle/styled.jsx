import styled from "styled-components";

export const Styled = {
    Wrapper : styled.div`
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        position: relative;
        border-radius: 20px;
        background: ${({ nightmode }) => (nightmode ? "linear-gradient(180deg, #1BCEEC, #94E9F0)" : "linear-gradient(180deg, #2E2E8B, #15154E)" )};
        padding: 4px 6px;
        transition: background 0.5s ease-in-out;
    `,

    ToggleContainer : styled.div`
        width: 36px;
        height: 36px;
        cursor: pointer;
        position: absolute;
        top: 2px;
        left: ${({ nightmode }) => (nightmode ? "4px" : "calc(100% - 40px)")};
        transition: left 0.5s ease-in-out;
        z-index: 5;
    `,
    ToggleDecor : styled.div`
        width: 50px;
        height: 32px;
        position: absolute;
        top: 2px;
        right: ${({ nightmode }) => (nightmode ? "8px" : "calc(100% - 50px)")};
        transition: right 0.5s ease-in-out;
    `,

    ToggleIco : styled.img`
        width: 100%;
        height: 100%;
    `,
}