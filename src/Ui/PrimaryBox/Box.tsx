import React from "react";
import Wrapper from "./Wrapper.styled";
import { BoxProps } from "@mui/system";


interface Props extends BoxProps {
    fullwidth?: boolean
    onClick?: () => void
}
const PrimaryBox: React.FC<Props> = ({ children, onClick = () => {}, fullwidth = false, color, ref,  ...rest }) => (
    <Wrapper {...rest} onClick={onClick} fullwidth>{children}</Wrapper>
)

export default PrimaryBox
