import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  color: coral;
  cursor: pointer;
  text-decoration: underline;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: coral;
    color: white;
  }
`;

const FirstPost: NextPage = () => {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/" passHref>
          <StyledLink>Back to Home</StyledLink>
        </Link>
      </h2>
    </>
  );
};

export default FirstPost;
