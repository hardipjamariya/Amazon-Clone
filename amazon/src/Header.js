import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
    Link
} from "react-router-dom";
// import { useStateValue } from './StateProvider';

function Header({cartItems,user, signOut}) {
    // const [{basket}, dispatch] = useStateValue();

    // console.log(basket);
    const getCount = () => {
        let count=0;
        cartItems.forEach((item)=>{
            count += item.product.quantity;
        })
        return count;
    }
    return (
        <Container>

            <HeaderLogo>
                <Link to="/">
                    <img src="https://rdwgroup.com/wp-content/uploads/2013/08/Amazon-800x450-1.jpg"></img>
                </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLine1>Hello</OptionLine1>
                    <OptionLine2>Select Your Address</OptionLine2>
                </HeaderOption>

            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="input">
                </HeaderSearchInput>

                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavIteams>

            <HeaderOption
                    onClick={signOut}
                >
                    <OptionLine1>
                        Hello,{user.name}
                    </OptionLine1>
                    <OptionLine2>
                        <Link to='./Login'>
                            LogOut
                        </Link>
                    </OptionLine2>
                </HeaderOption>

                <HeaderOption>

                    <OptionLineOne>
                        Reaturns
                    </OptionLineOne>

                    <OptionLineTwo>
                        & Delivery
                    </OptionLineTwo>

                </HeaderOption>


                <HeaderOptionCart>
                    <Link to="./cart">
                        <ShoppingBasketIcon />
                        {/* <CartCount>{basket.length}</CartCount> */}
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                </HeaderOptionCart>


            </HeaderNavIteams>


        </Container>

    )
}

export default Header

const Container = styled.div`
    height : 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    position: sticky;
    top: 0;
    z-index: 200;
    
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
    }    
`

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;

`

const OptionLine1 = styled.div``


const OptionLine2= styled.div`
    a{
        text-decoration: None;
        color: white;
    }
`


const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margine-left: 4px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #f90;
    }
`


const HeaderSearchInput = styled.input`
    flex-grow: 1;
    :focus {
        border: none;
    }
    border: 0;
`


const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

`

const HeaderNavIteams = styled.div`
    display: flex;
`


const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px; 
`

const OptionLineOne = styled.div``

const OptionLineTwo = styled.div`
    font-weight: 700;
    a {
        color: white;
        text-decoration: None;
    } 
`


const HeaderOptionCart = styled.div`
    display: flex;
    a {
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: None;

    }
    
    
`


const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;
`