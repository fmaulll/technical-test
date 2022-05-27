import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const selectedTimelineStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    backgroundColor: "#3568d4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };
  const normalTimelineStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    backgroundColor: "#EBEAEF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  useEffect(() => {
    const timelineString = localStorage.getItem("timeline");
    setTimeline(JSON.parse(timelineString));
  }, []);

  return (
    <TimelineWrapper>
      <Header>
        <Logo src="/assets/logo.png" />
      </Header>
      <TimelineContainer>
        {timeline.map((items, index) => (
          <TimelineItem key={index}>
            <LeftContainer>
              <IconContainer
                style={items.color ? selectedTimelineStyle : normalTimelineStyle}
              >
                <Icon src={items.src} />
              </IconContainer>
              {items.line ? <LineImage src="/assets/timeline/line.png" /> : ""}
            </LeftContainer>
            <DescriptionContainer>
              <TimelineTitle>{items.title}</TimelineTitle>
              <TimelineDescription>{items.desc}</TimelineDescription>
            </DescriptionContainer>
          </TimelineItem>
        ))}
      </TimelineContainer>
      <HalfCircleLeft src="/assets/half-circle-left.png" />
      <HalfCircleRight src="/assets/half-circle-right.png" />
    </TimelineWrapper>
  );
};

export default Timeline;

const TimelineWrapper = styled.div`
  position: relative;
  background-color: #f4f7ff;
  height: max-content;
  flex: 1.5;
  @media (max-width: 768px){
    display: none;
  }
`;

const TimelineContainer = styled.div`
  padding-left: 75px;
  margin-top: 30px;
  margin-bottom: 50px;
`;
const Header = styled.div`
  /* padding-left: 75px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 20px 75px;
`;

const Logo = styled.img`
  height: 64px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IconContainer = styled.div``;

const Icon = styled.img`
  z-index: 1;
`;

const LineImage = styled.img`
  margin: 15px 0;
`;

const TimelineItem = styled.div`
  width: 100%;
  display: flex;
`;

const DescriptionContainer = styled.div`
  margin-left: 20px;
`;

const TimelineTitle = styled.div`
  font-family: "Krona One", sans-serif;
  font-size: 18px;
`;

const TimelineDescription = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 14px;
  color: #9090a7;
  margin-top: 10px;
  width: 270px;
`;

const HalfCircleRight = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;
const HalfCircleLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;
