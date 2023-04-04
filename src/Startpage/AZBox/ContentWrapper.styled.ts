import styled from "styled-components";

type Props = {
}
const Wrapper = styled.div<Props>`
    display: flex;
    padding: ${({theme}) => theme.spacing(1)};
    padding-top: 0;
    text-align: justify;
    white-space: pre-wrap;
    letter-spacing: 1px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & div {
        margin-bottom: ${({theme}) => theme.spacing(1)};
    }
`

export default Wrapper