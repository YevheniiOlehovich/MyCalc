import styled from 'styled-components'

export const Styled = {
    Wrapper : styled.div`
        width: ${({ width }) => {
            if (width === 'big') return '144px';
            return '62px'; 
        }};;
        height: ${({ height }) => {
            if (height === 'small') return '40px';
            if (height === 'big') return '96px';
            return '62px'; 
        }};
        border-radius: 16px;

        color: ${({ colour, nightmode }) => {
            if (nightmode) {
                return colour === "blue" ? "#339DFF" : "#A5A5A5";
            }
            return colour === "blue" ? "#109DFF" : "#A5A5A5";
        }};

        background-color: ${({ colour, nightmode }) => {
            if (nightmode) {
                return colour === "blue" ? "#ADE2FF" : "#fff";
            }
            return colour === "blue" ? "#004080" : "#616161";

        }};

        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Poppins;
        font-weight: 700;
        font-size: 20px;
        cursor: pointer;
        &:hover{
            color: ${({ colour, nightmode }) => {
                if (nightmode) {
                    // Стилі, якщо nightmode === true
                    return colour === "blue" ? "#FFF" : "#38B9FF";
                }
                // Стилі, якщо nightmode === false
                return colour === "blue" ? "#B2DAFF" : "#29A8FF";
            }};

            background-color: ${({ colour, nightmode }) => {
                if (nightmode) {
                    // Стилі, якщо nightmode === true
                    return colour === "blue" ? "#19ACFF" : "#fff";
                }
                // Стилі, якщо nightmode === false
                return colour === "blue" ? "#1991FF" : "#303136";
                
            }};

            border: 1px solid gold;
            box-sizing: border-box;
            
        }
        margin-bottom: ${({ noneMargin }) => {
            if (noneMargin === 'none') return '0';
            return '16px';
        }};
        &:active{
            transform: translateY(2px);
        }
    `
}

