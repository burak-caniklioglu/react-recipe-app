import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import './login.css'
import { useNavigate } from "react-router-dom";
import {
  Container,
  Section,
  Image,
  Header,
  Form,
  Input,
  Button,
} from "../../components/Styled_Components";
import { useApp } from "../../contexts/provider";

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),  
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

function Login() {
  const navigate = useNavigate();
  const {loading, setLoading, setIsAuth} = useApp()
  const setServer = () => {  // serverdan gelen auth bilgilerini kullanıyoruz
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsAuth(true);
      navigate("/");
    }, 1000);
  }

  return (
    <Container theme={{ background: 'url(https://thumbs.dreamstime.com/b/balanced-diet-food-background-balanced-diet-food-background-organic-food-healthy-nutrition-superfoods-meat-fish-legumes-nuts-121936796.jpg)',}}>
      {loading && (
        <div className="loading">
          <span>Loading</span>
        </div>
      )}
      <Section>
        <Image src="https://recipe-app-solution.vercel.app/static/media/meal.9eba888b37c920112c046969b9256a41.svg" theme={{width:'12vw'}} />
        <Header>&#60;Burak&#62;Recipe</Header>
        <Formik
          initialValues={{
            userName: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={auth => {
            setServer(auth)
          }}
        >
          {({ errors, touched, values, handleChange, handleSubmit }) => (
              <Form>
              <Input border={errors.userName&& touched.userName && '1px solid red'} type="text" name = 'userName' placeholder="username" required onChange={handleChange} />
              {errors.userName && touched.userName ? (
             <div className='formError'>{errors.userName}</div>
           ) : null}
              <Input border={errors.password && touched.password && '1px solid red'} type="password" name = 'password' placeholder="password" required onChange={handleChange}/>
              {errors.password && touched.password ? (
             <div className='formError'>{errors.password}</div>
           ) : null}
              <Button type="submit" onClick={handleSubmit}>Login</Button>
            </Form>
            )}

        </Formik>

      </Section>
    </Container>
  );
}

export default Login;
