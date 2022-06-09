import React from "react";
import {
  Container,
  Section,
  Image,
  Header,
  Form,
  Input,
  Button,
} from "../../components/Styled_Components";

function Login() {
  return (
    <Container theme={{ background: 'url(https://thumbs.dreamstime.com/b/balanced-diet-food-background-balanced-diet-food-background-organic-food-healthy-nutrition-superfoods-meat-fish-legumes-nuts-121936796.jpg)',}}>
      <Section>
        <Image src="https://recipe-app-solution.vercel.app/static/media/meal.9eba888b37c920112c046969b9256a41.svg" theme={{width:'12vw'}} />
        <Header>&#60;Burak&#62;Recipe</Header>
        <Form>
          <Input type="text" placeholder="username" required />
          <Input type="password" placeholder="password" required />
          <Button type="submit">Login</Button>
        </Form>
      </Section>
    </Container>
  );
}

export default Login;
