import React from 'react';
import styled from 'styled-components';
import { auth, provider } from './firebase';

function Login({setUser}) {
    const signIn = () =>{
            auth.signInWithPopup(provider).then((result) =>{
               let user = result.user;
               let newUser = {
                   name:user.displayName,
                   email:user.email,
                   photo:user.photoURL
               }
               localStorage.setItem('user',JSON.stringify(newUser)) 
               setUser(newUser)
            }).catch((error)=>{
                alert(error.message);
            })
        }
     return (
            <Container>
                <Content>
                    <AmazonLogo src='https://tse4.mm.bing.net/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&pid=Api&P=0&w=277&h=157'/>
                    <h2>Sign Into Amazon</h2>
                    <LoginButton
                        onClick={signIn}
                    >
                        Sign in using Google 
                    </LoginButton>
                </Content>
            </Container>
        )
    }

    export default Login

    const Container = styled.div`
        width:100%;
        height:100vh;
        background-color:silver;
        display:grid;
        place-items:center;
    `

    const Content = styled.div`
    padding:100px;
    background-color:black;
    border-radius: 5px;
    box-shadow:0 15px 15px black;
    text-align:center;
    h2{
        color:white;
    }
`
const AmazonLogo = styled.img`
    height:100px;
`


const LoginButton = styled.button`
    margin-top:20px;
    background-color:orange;
    border:0px;
    border-radius:25px;
    cursor:pointer;
    :hover{
        background-color:darkorange;
    }
    :focus{
        outline:none;
    }
`