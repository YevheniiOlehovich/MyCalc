import { Styled } from './styled';
import Phone from '../Phone';
export default function Wrapper() {
    return (
        <Styled.Wrapper>
            <Styled.Ellipse>
                <Phone />
            </Styled.Ellipse>
            <Styled.DecorEllipseWhite />
            <Styled.DecorEllipseBlue />
        </Styled.Wrapper>
    );
}
