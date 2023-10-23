import styled from "styled-components";

export default function LoadingScreen() {
  const Wrapper = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
  `;
  const Text = styled.span`
    font-size: 24px;
  `;

  return (
    <>
      <Wrapper>
        <Text>로딩중..</Text>
      </Wrapper>
    </>
  );
}
