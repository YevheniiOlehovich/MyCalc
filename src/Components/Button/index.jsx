import { Styled } from "./styled"
import { useSelector} from 'react-redux'

export default function Button({text, colour, height, width, noneMargin, onClick }){
    const nightmode = useSelector((state) => state.theme.nightmode);
    
    return(
        <Styled.Wrapper 
            colour={colour}
            height={height}
            width={width} 
            noneMargin={noneMargin}
            nightmode={nightmode}
            onClick={onClick}
            >
                {text}
        </Styled.Wrapper>
    )
}