import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-components";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || email === "" || password === "") return;
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <Title>Log In To X</Title>
      <Form onSubmit={onSubmit}>
        <Input name="email" value={email} placeholder="Email" type="email" onChange={onChange} required />
        <Input name="password" value={password} placeholder="Password" type="password" onChange={onChange} required />
        <Input type="submit" value={isLoading ? "Loading" : "Log In"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        Don't have an account? {""}
        <Link to="/create-account">Create One &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}
