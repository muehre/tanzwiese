import styled from "styled-components";

type Props = {
    hue: number
}

export default styled.div<Props>`
    display: block;
    box-sizing: border-box;
    padding: 16px;
    margin-bottom: ${({theme}) => theme.spacing(2)};
    backdrop-filter:  blur(2px) brightness(1) contrast(0.8) saturate(4) grayscale(0.7);
    border-radius: 30vw;
    position: relative;
    overflow: hidden;
`