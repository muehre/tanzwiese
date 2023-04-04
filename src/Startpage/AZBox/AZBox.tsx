import { Avatar } from "@mui/material";
import React, { PropsWithChildren } from "react";
import Wrapper from "./Wrapper.styled";
import ContentWrapper from "./ContentWrapper.styled";
import Title from "./Title.styled";
import Image from "./Image.styled";
import TitleWrapper from "./TitleWrapper.styled";

interface Props extends PropsWithChildren {
    image?: string,
    title: string,
    anchor: string,
    action?: JSX.Element
}

const AZBox: React.FC<Props> = ({ image, title, children, anchor, action }) => {

    return (
        <Wrapper>
            <TitleWrapper>
                {image && (
                    <Image src={image} alt={title} />
                )}
                <Title id={anchor}>{title}</Title>
            </TitleWrapper>
            <ContentWrapper>
                <div style={{ display: "flex", flexDirection: "column"}}>{children}</div>
                {action && (
                    <div style={{ paddingTop: "20px"}}>
                        {action}
                    </div>
                )}
            </ContentWrapper>
        </Wrapper>
    )
}

export default AZBox
