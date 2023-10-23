import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 50px 0px;
  width: 420px;
`;
export const Title = styled.h1`
  font-size: 22px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 50px;
  gap: 10px;
  width: 100%;
`;
export const Input = styled.input`
  border: none;
  border-radius: 50px;
  font-size: 16px;
  padding: 10px 20px;
  width: 100%;
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
export const Error = styled.span`
  color: tomato;
  font-weight: 600;
`;

export const Switcher = styled.span`
  margin-top: 20px;
  a {
    color: #1d9bf0;
  }
`;
export default function AuthComponents() {}
