import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'

const CartItem = ({ id, item }) => {
    let option = []

    for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
        option.push(<option value={i}> Qty: {i}</option>)
    }

    const changeQuantity = (newQuantity) => {
        db.collection('cartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }
    const deleteItem = (e) => {
        e.preventDefault()
        db.collection('cartItems').doc(id).delete();
    }
    return (
        <Container>
            <ImageContainer>
                <img src={item.image} />
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                        <select
                            value={item.quantity}
                            onChange={(e) => changeQuantity(e.target.value)}
                        >
                            {option}
                        </select>
                    </CartItemQuantityContainer>
                    <CartItemDeleteContainer>
                        <ItemDelete
                            onClick={deleteItem}
                        >
                            <b>
                                Delete
                        </b>
                        </ItemDelete>
                    </CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                ${item.price}
            </CartItemPrice>
        </Container>
    )
}

export default CartItem


const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
`


const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;


    }

`





const CartItemInfo = styled.div`
flex-grow: 1;`


const CartItemInfoTop = styled.div`
    color: #007185;
    h2{
        font-size: 18px;
    }

`


const CartItemInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
`


const CartItemQuantityContainer = styled.div``


const CartItemDeleteContainer = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer; 

`


const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;

`

const ItemDelete = styled.div`
    background-color:orange;
    border:1px solid black;
    padding:7px;
    :hover{
        background-color:darkorange;
        }
`