import styled from "styled-components";

type Props = {
}
const Wrapper = styled.img<Props>`
    display: flex;
    margin: -${({theme}) => theme.spacing(1)};
    margin-bottom: 0;
    width: 100vw;
    opacity: 0.7;
    filter: contrast(1.1);
    backdrop-filter: blur(2px);
`

export default Wrapper