import { useState } from "react"
import { useDispatch, useSelector} from 'react-redux'
import { toggleNightmode } from "../../Store/themeSlice"
import { Styled } from "./styled"
import SunIco from '../../assets/sun.png'
import MoonIco from '../../assets/moon.png'
import StarsIco from '../../assets/stars.png'
import CloudsIco from '../../assets/clouds.png'

export default function Daytoggle(){
    const nightmode = useSelector((state) => state.theme.nightmode);
    const dispatch = useDispatch();

    const toggleMode = () => {
        dispatch(toggleNightmode());
    };

    return(
        <Styled.Wrapper nightmode={nightmode}>
            <Styled.ToggleContainer onClick={toggleMode} nightmode={nightmode}>
                <Styled.ToggleIco src={nightmode  ? SunIco : MoonIco} />
            </Styled.ToggleContainer>
            <Styled.ToggleDecor nightmode={nightmode}>
                <Styled.ToggleIco src={ nightmode ? CloudsIco : StarsIco} />
            </Styled.ToggleDecor>
        </Styled.Wrapper>
    )
}