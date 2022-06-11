import React from "react";
import { Container, Section, Image } from "../Styled_Components";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";


function RecipeCard() {
  const navigate = useNavigate();
  const location = useLocation();
  const recipe = location.state.item;
  console.log(recipe);
  const {image} = recipe.recipe;
  return (
  
  <Container>
    <RecipeSection>
      <Image src={image}></Image>
      
    </RecipeSection>
  </Container>
  );
}

const RecipeSection = styled.div`
  background-color: white;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: space-around;
  width: 70%;
`;

export default RecipeCard;
