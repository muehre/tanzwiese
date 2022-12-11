import styled from "styled-components";

type Props = {
    isactive: number,
}

export default styled.div<Props>`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(1)};
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 25%;
    background: ${({ isactive }) => isactive ? '#64478a' : 'transparent'};
    user-select: none;
    text-decoration: none;
`