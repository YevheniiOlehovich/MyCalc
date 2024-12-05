import { Styled } from "./styled"
import Button from "../Button"

export default function Keyboard(){

    return(
        <Styled.Wrapper>
            <Styled.Row>
                <Styled.Column>
                    <Button text={'e'} height={'small'}/>
                    <Button text={'Ac'} />
                    <Button text={'7'} />
                    <Button text={'4'} />
                    <Button text={'1'} />
                </Styled.Column>
                <Styled.Column>
                    <Button text={'m'} height={'small'}/>
                    <Button text={'x'}/>
                    <Button text={'8'}/>
                    <Button text={'5'}/>
                    <Button text={'2'}/>
                </Styled.Column>
                <Styled.Column>
                    <Button text={'sin'} height={'small'} />
                    <Button text={'/'} colour={'blue'}/>
                    <Button text={'9'}/>
                    <Button text={'6'}/>
                    <Button text={'3'}/>
                </Styled.Column>
                <Styled.Column>
                    <Button text={'deg'} height={'small'} />
                    <Button text={'*'} colour={'blue'}/>
                    <Button text={'-'} colour={'blue'}/>
                    <Button text={'+'} colour={'blue'} height={'big'}/>
                    <Button text={'='} colour={'blue'} background={'blue'} height={'big'} noneMargin={'none'}/>
                </Styled.Column>
            </Styled.Row>
            <Styled.Block>
                <Button text={'0'} width={'big'} noneMargin={'none'}/>
                <Button text={'.'} noneMargin={'none'}/>
            </Styled.Block>
        </Styled.Wrapper>
    )
}