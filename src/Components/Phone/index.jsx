import { Styled} from './styled'
import Keyboard from '../Keyboard'
import Display from '../Display'
import Bar from '../Bar'

export default function Phone(){

    return(
        <>
        <Styled.Wrapper>
            <Bar />
            {/* <Display />
            <Keyboard /> */}
        </Styled.Wrapper>
        <Styled.Shadow />
        </>
        
    )
}