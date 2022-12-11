import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    background: ${({theme}) => theme.palette.paper.main}99;
    color: ${({theme}) => theme.palette.paper.contrastText};
    box-sizing: border-box;
    padding: ${({theme}) => theme.spacing(1)};
    margin: ${({theme}) => theme.spacing(1)};
    border-radius: ${({theme}) => theme.borderRadius};
    backdrop-filter: blur(1px);
`

export default Wrapper