import styled from 'styled-components'

export const Styled = {
    Wrapper : styled.section`
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        height: 100%;
        width: 100%;
        top: 0;
        background-color: #DAF0FF;
        z-index: 1;

    `,
    Ellipse : styled.div`
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 900px;
        height: 900px;
        background-color: #109DFF;
        border-radius: 50%;
        @media (max-width: 768px) {
            border-radius: 0%;
            background-color: rgba(16, 157, 255, 0.5);
        }
    `,
    DecorEllipseWhite : styled.div`
        position: absolute;
        top: 200px;
        right: 50px;
        width: 23px;
        height: 23px;
        border-radius: 50%;
        background-color: white;
        @media (max-width: 768px) {
            z-index: 10;
        }
        @media (max-width: 768px) {
            z-index: 0;
        }
    `,
    DecorEllipseBlue : styled.div`
        position: absolute;
        bottom: 130px;
        left: 50px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #38B9FF;
    `
}