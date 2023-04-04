import styled from "styled-components";

type Props = {
    fullwidth: boolean
}
const Wrapper = styled.div<Props>`
    display: flex;
    background: ${({theme}) => theme.palette.paper.main}99;
    color: ${({theme}) => theme.palette.paper.contrastText};
    box-sizing: border-box;
    padding: ${({theme}) => theme.spacing(1)};
    margin: ${({theme}) => theme.spacing(1)};
    border-radius: ${({theme}) => theme.borderRadius};
    backdrop-filter: blur(1px);
    white-space: pre-wrap;
    width: ${({fullwidth, theme}) => fullwidth ? `calc(100% - ${theme.spacing(2)})`: 'auto'};
`

export default Wrapper