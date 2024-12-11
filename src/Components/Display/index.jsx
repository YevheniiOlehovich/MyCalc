import { Styled } from "./styled";
import { useSelector } from "react-redux";

export default function Display() {
    const { input = "", result = "0", nightmode } = useSelector((state) => ({
        ...state.calculator,
        nightmode: state.theme.nightmode,
    }));

    return (
        <Styled.Wrapper nightmode={nightmode}>
            <Styled.Header>{input}</Styled.Header>
            {result && <Styled.Footer nightmode={nightmode}>= {result}</Styled.Footer>}
        </Styled.Wrapper>
    );
}