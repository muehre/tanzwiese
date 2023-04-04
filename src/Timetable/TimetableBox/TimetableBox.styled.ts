import styled from "styled-components";

type Props = {
    hue?: number
    contrast?: number
    brightness?: number
    grayscale?: number
    saturate?: number
}

export default styled.div<Props>`
    min-height: 20vh;
    display: block;
    box-sizing: border-box;
    padding: ${({theme}) => theme.spacing(1)};
    backdrop-filter:
        blur(1px)
        hue-rotate(${({ hue }) => `${hue || 0}deg`}) 
        contrast(${({ contrast }) => `${contrast || 1}`})
        brightness(${({ brightness }) => `${brightness || 1}`})
        grayscale(${({ grayscale }) => `${grayscale || 0}`})
        saturate(${({ saturate }) => `${saturate || 1}`});
    display: block;
`