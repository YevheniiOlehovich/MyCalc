import { Styled } from "./styled";
import { useSelector } from "react-redux";

export default function Display() {
    const { input = "", result = "0", nightmode } = useSelector((state) => ({
        ...state.calculator,
        nightmode: state.theme.nightmode,
    }));

    console.log(input)
    console.log(result)
    
    return (
        <Styled.Wrapper nightmode={nightmode}>
            <Styled.Header>{result}</Styled.Header>
            <Styled.Footer nightmode={nightmode}>{input}</Styled.Footer>
        </Styled.Wrapper>
    );
}
