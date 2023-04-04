import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: ${({ theme }) => theme.palette.paper.main};
    position: fixed;
    left: 0;
    bottom: -100px;
    right: 0;
    z-index: 400;
    padding-bottom: 100px;
`