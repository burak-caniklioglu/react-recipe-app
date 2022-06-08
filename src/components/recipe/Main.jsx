import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactLogo from "../../assets/home.svg";
import axios from "axios";
import {Link} from 'react-router-dom'


function Main() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const ApplicationID = "8b467080";
  const ApplicationKey = "dc61cfb7591756544d209d88f1cc9b20";

  const AllURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${ApplicationID}&app_key=${ApplicationKey}`;

  // const SpesificURL = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${ApplicationID}&app_key=${ApplicationKey}`;

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    setIsActive(true);
    const res = await axios.get(AllURL);
    setRecipes(res.data.hits);

    setLoading(false);
  };

  return (
    <div>
      {loading && (
        <div className="loading">
          <span>Loading</span>
        </div>
      )}
      <InputArea>
        <Header>Food App</Header>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={query}
          />
          <Button>Search</Button>
          <Select>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </Select>
        </Form>

        {isActive ? (
          <RecipeContainer>
            {recipes.map((recipe, index) => {
              console.log(recipe.recipe);
              const { label, image, url, mealType, ingredients } =
                recipe.recipe;
              return (
                <RecipeArea key={index}>
                  <RecipeHeader>{label}</RecipeHeader>
                  <RecipeImage src={image} alt={label}></RecipeImage>
                  <DetailsButton to={`details`}>View More</DetailsButton>
                </RecipeArea>
              );
            })}
          </RecipeContainer>
        ) : (
          <ImageContainer>
            <Image src={ReactLogo} alt=""></Image>
          </ImageContainer>
        )}
      </InputArea>
    </div>
  );
}
const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: rgb(0, 173, 181);
`;
const Header = styled.h2`
  margin-top: 1rem;
  font-size: 3rem;
`;
const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 3px;
  margin: 20px;
`;

const Input = styled.input`
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
  font-size: 2rem;
`;

const Button = styled.button`
  background-color: rgb(225, 241, 221);
  padding: 5px;
  outline: none;
  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
`;

const Select = styled.select`
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
`;
const RecipeContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
  height: fit-content;
`;

const ImageContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 50px;
`;

const Image = styled.img`
  width: 80%;
  max-width: 750px;
`;

const RecipeArea = styled.div`
  height: 300px;
  background: rgb(225, 241, 221);
  padding: 5px;
  border-radius: 3px;
  width: 300px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  box-shadow: black 8px 8px 5px;
`;

const RecipeHeader = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;
const RecipeImage = styled.img`
  height: 150px;
  border-radius: 10px;
`;

const DetailsButton = styled(Link)`
  background-color: rgb(0, 173, 181);
  color: white;
  padding: 5px;
  outline: none;
  height: 2rem;
  border: none;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
`;

export default Main;
