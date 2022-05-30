import { TextInput } from "@/components/TextInput/TextInput";
import { Button } from "@/components/Button";
import { login } from "../../api";
import { UserContext } from "@/providers/user";
import { useContext } from "react";
import { storage } from "@/utils";
import { useNavigate } from "react-router-dom";

export function LoginForm(): JSX.Element {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function onSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    try {
      const data = await login({ email, password });
      setUser(data.user.name);
      storage.setToken(data.accessToken);

      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Log in</h1>
      <p>Welcome back! Enter your credentials to get in</p>
      <TextInput name="email" type="email" label="Email" />
      <TextInput name="password" type="password" label="Password" />
      <Button type="submit">Sign in</Button>
    </form>
  );
}
