import { Styled } from "./styled";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { setInput, setResult, clear } from "../../store/calculatorSlice";

const roundToSix = (num) => parseFloat(num.toFixed(6));

export default function Keyboard() {
    const dispatch = useDispatch();
    const input = useSelector((state) => state.calculator.input);

    const handleAddInput = (value) => {
        dispatch(setInput(input + value));
    };

    const handleClear = () => {
        dispatch(clear());
    };

    const handleFunctionCalculate = (func) => {
        try {
            const currentValue = parseFloat(input);
            if (isNaN(currentValue)) return;

            let result;
            switch (func) {
                case "sin":
                    result = Math.sin((currentValue * Math.PI) / 180);
                    break;
                case "exp":
                    result = Math.exp(currentValue);
                    break;
                case "deg":
                    result = (currentValue * Math.PI) / 180;
                    break;
                case "log":
                    if (currentValue <= 0) throw new Error("Log error");
                    result = Math.log10(currentValue);
                    break;
                default:
                    return;
            }

            result = roundToSix(result);
            dispatch(setResult(result));
            dispatch(setInput(""));
        } catch {
            dispatch(setResult("Error"));
        }
    };

    const handleCalculate = () => {
        try {
            const sanitizedInput = input.replace(/[^-()\d/*+.]/g, "");
            const calculatedResult = new Function(`return ${sanitizedInput}`)();
            const roundedResult = roundToSix(calculatedResult);
            dispatch(setResult(roundedResult));
            dispatch(setInput(""));
        } catch {
            dispatch(setResult("Error"));
        }
    };

    const handleBackspace = () => {
        if (input.length > 0) {
            dispatch(setInput(input.slice(0, -1))); 
        }
    };

    return (
        <Styled.Wrapper>
            <Styled.Row>
                <Styled.Column>
                    <Button text={"e^x"} height={"small"} onClick={() => handleFunctionCalculate("exp")} />
                    <Button text={"Ac"} onClick={handleClear} />
                    <Button text={"7"} onClick={() => handleAddInput("7")} />
                    <Button text={"4"} onClick={() => handleAddInput("4")} />
                    <Button text={"1"} onClick={() => handleAddInput("1")} />
                </Styled.Column>
                <Styled.Column>
                    <Button text={"log"} height={"small"} onClick={() => handleFunctionCalculate("log")} />
                    <Button text={"⌫"} onClick={handleBackspace}/>
                    <Button text={"8"} onClick={() => handleAddInput("8")} />
                    <Button text={"5"} onClick={() => handleAddInput("5")} />
                    <Button text={"2"} onClick={() => handleAddInput("2")} />
                </Styled.Column>
                <Styled.Column>
                    <Button text={"sin"} height={"small"} onClick={() => handleFunctionCalculate("sin")} />
                    <Button text={"/"} colour={"blue"} onClick={() => handleAddInput("/")} />
                    <Button text={"9"} onClick={() => handleAddInput("9")} />
                    <Button text={"6"} onClick={() => handleAddInput("6")} />
                    <Button text={"3"} onClick={() => handleAddInput("3")} />
                </Styled.Column>
                <Styled.Column>
                    <Button text={"deg"} height={"small"} onClick={() => handleFunctionCalculate("deg")} />
                    <Button text={"*"} colour={"blue"} onClick={() => handleAddInput("*")} />
                    <Button text={"-"} colour={"blue"} onClick={() => handleAddInput("-")} />
                    <Button text={"+"} colour={"blue"} height={"big"} onClick={() => handleAddInput("+")} />
                    <Button
                        text={"="}
                        colour={"blue"}
                        background={"blue"}
                        height={"big"}
                        noneMargin={"none"}
                        onClick={handleCalculate}
                    />
                </Styled.Column>
            </Styled.Row>
            <Styled.Block>
                <Button
                    text={"0"}
                    width={"big"}
                    noneMargin={"none"}
                    onClick={() => handleAddInput("0")}
                />
                <Button
                    text={"."}
                    noneMargin={"none"}
                    onClick={() => handleAddInput(".")}
                />
            </Styled.Block>
        </Styled.Wrapper>
    );
}
