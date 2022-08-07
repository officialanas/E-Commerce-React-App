import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #28bebe;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>Welcome to our store MINI-Store !</Container>;
};

export default Announcement;
