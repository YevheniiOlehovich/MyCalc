import { Styled } from "./styled"
import Button from "../Button"
import { useDispatch } from "react-redux";
import { addToInput, clearInput, calculateResult } from "../../Store/calculatorSlice";

export default function Keyboard(){

    const dispatch = useDispatch();

    return(
        <Styled.Wrapper>
            <Styled.Row>
                <Styled.Column>
                    <Button text={'e'} height={'small'} onClick={() => dispatch(addToInput("e"))}/>
                    <Button text={'Ac'} onClick={() => dispatch(clearInput())}/>
                    <Button text={'7'} onClick={() => dispatch(addToInput("7"))}/>
                    <Button text={'4'} onClick={() => dispatch(addToInput("4"))}/>
                    <Button text={'1'} onClick={() => dispatch(addToInput("1"))}/>
                </Styled.Column>
                <Styled.Column>
                    <Button text={'m'} height={'small'}/>
                    <Button text={'x'} onClick={() => dispatch(addToInput("*"))}/>
                    <Button text={'8'} onClick={() => dispatch(addToInput("8"))}/>
                    <Button text={'5'} onClick={() => dispatch(addToInput("5"))}/>
                    <Button text={'2'} onClick={() => dispatch(addToInput("2"))}/>
                </Styled.Column>
                
                <Styled.Column>
                    <Button text={'sin'} height={'small'}/>
                    <Button text={'/'} colour={'blue'} onClick={() => dispatch(addToInput("/"))}/>
                    <Button text={'9'} onClick={() => dispatch(addToInput("9"))}/>
                    <Button text={'6'} onClick={() => dispatch(addToInput("6"))}/>
                    <Button text={'3'} onClick={() => dispatch(addToInput("3"))}/>
                </Styled.Column>
                <Styled.Column>
                    <Button text={'deg'} height={'small'} />
                    <Button text={'*'} colour={'blue'} onClick={() => dispatch(addToInput("*"))}/>
                    <Button text={'-'} colour={'blue'} onClick={() => dispatch(addToInput("-"))}/>
                    <Button text={'+'} colour={'blue'} height={'big'} onClick={() => dispatch(addToInput("+"))}/>
                    <Button text={'='} colour={'blue'} background={'blue'} height={'big'} noneMargin={'none'} onClick={() => dispatch(calculateResult())}/>
                </Styled.Column>
            </Styled.Row>
            <Styled.Block>
                <Button text={'0'} width={'big'} noneMargin={'none'} onClick={() => dispatch(addToInput("0"))}/>
                <Button text={'.'} noneMargin={'none'} onClick={() => dispatch(addToInput("."))}/>
            </Styled.Block>
        </Styled.Wrapper>
    )
}