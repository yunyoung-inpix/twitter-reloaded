import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;
const Text = styled.span`
  font-size: 24px;
`;

export default function LoadingScreen() {
  return (
    <>
      <Wrapper>
        <Text>로딩중..</Text>
      </Wrapper>
    </>
  );
}
