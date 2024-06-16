import React from "react";
import { HiringNav, TopicNav } from "./base/Nav";
import { Container } from "./base/Container";
import { Banner } from "./base/Banner";
import { FeedsLayout, Feeds, RightSide, Content } from "./base/Layout";
import { HiringCard } from "./base/Card";
import Link from "next/link";

type Props = {
    profile: string;
};

export const HiringPage: React.FC<Props> = ({profile}) => {
    return (
        <div className="m-32">
            <Container>
                <HiringNav></HiringNav>
                <Banner bannerText="Hiring"></Banner>
                <Content>
                    <FeedsLayout>
                        <Feeds>
                            <HiringCard profile={profile}></HiringCard>
                        </Feeds>
                    </FeedsLayout>
                    <RightSide children="210 Professionals"></RightSide>
                </Content>
            </Container>
        </div>
    )
}