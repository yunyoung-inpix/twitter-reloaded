import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 50px;
  border: 0;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  gap: 5px;
  justify-content: center;
  margin-top: 50px;
  padding: 10px 20px;
  width: 100%;
`;
const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
      // 코드 챌린지..
      // sendPasswordResetEmail
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/public/github-logo.svg" />
      Continue with Github
    </Button>
  );
}
