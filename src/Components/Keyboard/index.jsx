import { Styled } from "./styled"
import Button from "../Button"
import { useDispatch, useSelector } from "react-redux";
import { setInput, setResult, clear } from "../../store/calculatorSlice";

export default function Keyboard(){

    const dispatch = useDispatch();

    const input = useSelector((state) => state.calculator.input);
    const result = useSelector((state) => state.calculator.result);
    
    const handleAddInput = (value) => {
        dispatch(setInput(input + value)); 
    };

    const handleClear = () => {
        dispatch(clear()); 
    };

    const handleCalculate = () => {
        try {
            const sanitizedInput = input.replace(/[^-()\d/*+.]/g, ""); 
            const calculatedResult = new Function(`return ${sanitizedInput}`)();
            dispatch(setResult(calculatedResult)); 
        } catch {
            dispatch(setResult("Error"));
        }
    };

    return(
        <Styled.Wrapper>
            <Styled.Row>
                <Styled.Column>
                    <Button text={'e'} height={'small'} />
                    <Button text={'Ac'} onClick={handleClear}/>
                    <Button text={'7'} onClick={() => handleAddInput("7")}/>
                    <Button text={'4'} onClick={() => handleAddInput("4")}/>
                    <Button text={'1'} onClick={() => handleAddInput("1")}/>
                </Styled.Column>
                <Styled.Column>
                    <Button text={'m'} height={'small'}/>
                    <Button text={'x'} />
                    <Button text={'8'} onClick={() => handleAddInput("8")}/>
                    <Button text={'5'} onClick={() => handleAddInput("5")}/>
                    <Button text={'2'} onClick={() => handleAddInput("2")}/>
                </Styled.Column>
                
                <Styled.Column>
                    <Button text={'sin'} height={'small'}/>
                    <Button text={'/'} colour={'blue'} onClick={() => handleAddInput("/")}/>
                    <Button text={'9'} onClick={() => handleAddInput("9")}/>
                    <Button text={'6'} onClick={() => handleAddInput("6")}/>
                    <Button text={'3'} onClick={() => handleAddInput("3")}/>
                </Styled.Column>
                <Styled.Column>
                    <Button text={'deg'} height={'small'} />
                    <Button text={'*'} colour={'blue'} onClick={() => handleAddInput("*")}/>
                    <Button text={'-'} colour={'blue'} onClick={() => handleAddInput("-")}/>
                    <Button text={'+'} colour={'blue'} height={'big'} onClick={() => handleAddInput("+")}/>
                    <Button text={'='} colour={'blue'} background={'blue'} height={'big'} noneMargin={'none'} onClick={handleCalculate}/>
                </Styled.Column>
            </Styled.Row>
            <Styled.Block>
                <Button text={'0'} width={'big'} noneMargin={'none'} onClick={() => handleAddInput("0")}/>
                <Button text={'.'} noneMargin={'none'} onClick={() => handleAddInput(".")}/>
            </Styled.Block>
        </Styled.Wrapper>
    )
}