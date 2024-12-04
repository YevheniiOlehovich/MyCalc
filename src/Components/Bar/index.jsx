import { Styled } from './styled'
import Daytoggle from '../Daytoggle'

export default function Bar(){
    return(
        <Styled.Wrapper>
            <Styled.ToggleBox>
                <Daytoggle />
            </Styled.ToggleBox>
            {/* <Styled.ToggleBox></Styled.ToggleBox> */}
        </Styled.Wrapper>
    )
}