import styled from 'styled-components';


export const Container = styled.div`
background-image: url(https://picsum.photos/1600/900);
background-repeat: no-repeat;
width: 100%;
height: 100vh;
background-size: cover;
background-position: center center;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
`

export const Section = styled.div`
width: 600px;
min-width: 600px;
height: 600px;
background-color: rgba(0, 173, 181, 0.5);
border-radius: 50%;
border: 2px solid rgb(225, 241, 221);
padding: 5px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
flex-direction: column;
`

export const Image = styled.img`
    width: 150px;
    margin: 1rem;
`

export const Header = styled.h1`
color: white;
font-family: Girassol, sans-serif;
font-size: 3rem;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
`

export const Input = styled.input`
    height: 50px;
    font-size: 2rem;
    width: 250px;
    border-radius: 5px;
    font-family: Girassol, sans-serif;
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    color: white;
    margin: 1rem;
    text-indent: 20px;
`

export const Button = styled.button`
font-size: 2rem;
    font-family: Girassol, sans-serif;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    cursor: pointer;
    margin: 1rem;
`