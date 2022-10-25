// import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  // useEffect(() => {
  //   const fetchComment = async () => {
  //     const res = await axios.get(`/users/find/${comment.userId}`);
  //     setChannel(res.data)
  //   };
  //   fetchComment();
  // }, [comment.userId]);

  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/ytc/AMLnZu9ZKZmQhnOANqv82rLt5REieeJFCxJPIltAEb6dFg=s88-c-k-c0x00ffffff-no-rj" />

      {/* {/* <Avatar src={channel.img} /> */}
      <Details>
        <Name>
          Moshe Gzuztra
          {/* {channel.name} */}
          <Date>1 day ago</Date>
        </Name>
        {/* <Text>{comment.desc}</Text> */}
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, distinctio?</Text>
      </Details> 
    </Container>
  );
};

export default Comment;