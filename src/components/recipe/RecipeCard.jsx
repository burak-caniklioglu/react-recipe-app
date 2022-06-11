import React from "react";
import { Container, Section, Image } from "../Styled_Components";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";


function RecipeCard() {
  const navigate = useNavigate();
  const location = useLocation();
  const recipe = location.state.item;
  console.log(recipe.recipe);
  const {image, ingredients} = recipe.recipe;
  return (
  
  <Container theme={{direction:'column'}}>
    <RecipeSection>
      <Image src={image}></Image>
      <RecipeList>
        {ingredients.map((ingredient, index) => {
          return (<li key={index}>{ingredient.text}</li>);
        })}
      </RecipeList>
    </RecipeSection>
    <ButtonBack onClick={() => navigate("/")}>Back</ButtonBack>
  </Container>
  );
}

const RecipeSection = styled.div`
  background: rgb(225, 241, 221);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: space-around;
  width: 70%;
  border-radius: 3px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: justify;
    margin-top: 20px;
  }
`;

const RecipeList = styled.ul`
  list-style: none;
  line-height: 1.5;
  @media (max-width: 768px) {
    margin-right: 10%;
  }
  `;

  const ButtonBack = styled.button`
  background-color: rgb(225, 241, 221);
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 1.5rem;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
  display:block;


  `;

export default RecipeCard;
