import styled from "styled-components";

type Props = {
    hue: number
}

export default styled.div<Props>`
    display: inline-block;
    box-sizing: border-box;
    padding: ${({theme}) => theme.spacing(1)};
    margin-top: ${({theme}) => theme.spacing(1)};
    backdrop-filter: hue-rotate(${({ hue }) => `${hue}deg`}) blur(2px) brightness(1.4) contrast(0.8) saturate(4) grayscale(0.7);
    border-radius: 30vw;
    position: relative;
    overflow: hidden;
`