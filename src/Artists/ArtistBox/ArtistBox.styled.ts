import styled from "styled-components";

type Props = {
    hue: number
}

export default styled.div<Props>`
    min-height: 25vh;
    display: block;
    box-sizing: border-box;
    padding: ${({theme}) => theme.spacing(1)};
    backdrop-filter: hue-rotate(${({ hue }) => `${hue}deg`});
    display: flex;
    flex: 50%;
`