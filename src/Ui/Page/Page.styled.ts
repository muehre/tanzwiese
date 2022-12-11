import styled from "styled-components";

export default styled.div`
    z-index: 220;
    width: 100vw;
    min-height: 100vh;
    grid-row-start: 1;
    grid-column-start: 1;
    padding-top: 35vh;
    box-sizing: border-box;

    @media (min-width: 768px) {
        min-height: 75vh;
        top: 20vh;
        left: 1rem;
        right: 1rem;
        bottom: 1rem;
        width: auto;
      }
`