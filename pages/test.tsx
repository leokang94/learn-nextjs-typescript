import type { NextPage } from "next";
import styled from "styled-components";

const StyledTest = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Test: NextPage = () => {
  return <StyledTest>Test</StyledTest>;
};

export default Test;
