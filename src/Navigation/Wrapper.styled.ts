import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: ${({ theme }) => theme.palette.paper.main};
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 400;
`