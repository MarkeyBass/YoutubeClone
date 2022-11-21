import {
  AddTaskOutlined,
  ReplyOutlined,
  ThumbUpOutlined,
  ThumbDownOutlined,
} from "@mui/icons-material";
// import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Comments from "../components/Comments";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  gap: 24px;
  /* height: 100vh; */
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
  /* flex: 5; */
`;
const Recomendation = styled.div`
  flex: 2;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const VideoFrame = styled.video`
  /* max-height: 720px;
  width: 100%;
  object-fit: cover; */
`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const path = useLocation();
  const pathNameArr = path.pathname.split("/");
  const videoId = pathNameArr[pathNameArr.length - 1];
  console.log(videoId);

  const [video, setVideo] = useState({});
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`api/video/find/${videoId}`);
        const channelRes = await axios.get(`api/users/find/${videoRes.userId}`);
        setVideo(videoRes.data);
        setChannel(channelRes.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData()
  }, [path]);

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="520"
            src="https://www.youtube.com/embed/EeWyix8ysEc"
            title="YouTube video player"
            // frameborder="0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>8,325,566 views • jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined /> 123
            </Button>
            <Button>
              <ThumbDownOutlined />
              Dislike
            </Button>
            <Button>
              <ReplyOutlined />
              Share
            </Button>
            <Button>
              <AddTaskOutlined />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image
              src={
                "https://i.ytimg.com/vi/aGN0pXIaCaA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKqe7a8qGlLHRiUa8DiMQlb6aYHQ"
              }
            />
            <ChannelDetail>
              <ChannelName>MarkeyBass</ChannelName>
              <ChannelCounter>200K Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A veritatis quis omnis sed
                corrupti inventore, molestias facere, vel quidem vero expedita libero? Deleniti
                aliquid animi, quidem eveniet quisquam, impedit exercitationem reprehenderit ullam
                magni praesentium aperiam corrupti obcaecati quam? Ab aperiam omnis modi aspernatur
                aliquam perferendis!
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recomendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recomendation>
    </Container>
  );
};

export default Video;
