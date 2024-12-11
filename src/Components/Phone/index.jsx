import { Styled} from './styled'
import Keyboard from '../Keyboard'
import Display from '../Display'
import Bar from '../Bar'
import { useSelector} from 'react-redux'

export default function Phone(){
    const nightmode = useSelector((state) => state.theme.nightmode);

    return(
        <>
        <Styled.Wrapper nightmode={nightmode}>
            <Bar />
            <Display />
            <Keyboard />
        </Styled.Wrapper>
        <Styled.Shadow />
        </>
        
    )
}