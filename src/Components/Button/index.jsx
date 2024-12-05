import { Styled } from "./styled"
import { useSelector} from 'react-redux'

export default function Button({text, colour, height, width, noneMargin}){
    const nightmode = useSelector((state) => state.theme.nightmode);
    
    return(
        <Styled.Wrapper 
            colour={colour}
            height={height}
            width={width} 
            noneMargin={noneMargin}
            nightmode={nightmode}
            >
                {text}
        </Styled.Wrapper>
    )
}