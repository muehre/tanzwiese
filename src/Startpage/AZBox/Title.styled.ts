import styled from "styled-components";

type Props = {
}
const Wrapper = styled.h3<Props>`
    display: flex;
    padding: ${({theme}) => theme.spacing(1.5)};
    padding-left: ${({theme}) => theme.spacing(0.5)};;
    margin: 0;
    flex-grow: 1;
    text-align: center;
    align-content: center;
    justify-content: center;
    font-size: 2rem;
    margin-top: -324px;
    padding-top: ${({theme}) => `calc(${theme.spacing(1.5)} + 340px)`}
`

export default Wrapper