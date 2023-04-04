import styled from "styled-components";


export default styled.div`
    display: flex;
    position: relative;
    z-index: 5;
    font-size: 1rem;
    text-shadow: 0 1px 6px rgb(0 0 0 / 20%), 0 6px 6px rgb(0 0 0 / 5%);
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    text-align: center;
    width: 100%;
    align-content: center;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1rem;
    background: rgba(70,30,70, 0.6);
    backdrop-filter: blur(8px);
    padding: 0 10px 0 10px;
    box-sizing: border-box;
    max-width: 100%;
`