import styled from "styled-components";

type Props = {
}
const Wrapper = styled.div<Props>`
    display: flex;
    padding: ${({theme}) => theme.spacing(1)};
    padding-bottom: 0;
    padding-top: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default Wrapper