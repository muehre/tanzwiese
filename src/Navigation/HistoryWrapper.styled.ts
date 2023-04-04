import styled from "styled-components";

export default styled.div`
    display: block;
    position: fixed;
    top: ${({ theme }) => theme.spacing(1)};
    left: ${({ theme }) => theme.spacing(1)};
    z-index: 200;
    color: white;
`