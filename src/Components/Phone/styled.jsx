import styled from 'styled-components'

export const Styled = {
    Wrapper : styled.div`
        position: absolute;
        width: 375px;
        height: 812px;
        z-index: 10;
        top: 72px;
        right: 52px;
        border-radius: 40px;
        background: ${({ nightmode }) => (nightmode ?  "#F7F8FB" : "linear-gradient(180deg, #17181A, #17181A)")};
        padding: 40px 32px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        @media (max-width: 768px) {
            top: 40px;
            right: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        @media (max-width: 768px) {
            height: 690px;
        }
    `,
    Shadow : styled.div`
        position: absolute;
        width: 375px;
        height: 812px;
        z-index: 9;
        top: 92px;
        right: 0;
        background-color: rgba(0, 68, 115, 0.28);
        border-radius: 40px;
        filter: blur(8px);
        @media (max-width: 768px) {
            top: 60px;
            right: 0;
            left: 50%;
            transform: translateX(-40%);
        }
    `
}