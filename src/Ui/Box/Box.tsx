import React, { PropsWithChildren} from "react";
import Wrapper from "./Wrapper.styled";


const Box: React.FC<PropsWithChildren> = ({ children }) => (
    <Wrapper>{children}</Wrapper>
)

export default Box
