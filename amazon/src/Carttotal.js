import React from 'react'
import styled from 'styled-components' 
import NumberFormat from 'react-number-format'

function CartTotal({getCount,
getTotalPrice}) {
    return (
        <Container>
            <Title>
                 Shopping List : 
                ({getCount()} items)
                <NumberFormat value={ getTotalPrice() } displayType={'text'} thousandSeparator={true} prefix={'$'}/>
            </Title>
            <CheckoutButton>
                Proceed To Pay
            </CheckoutButton>
        </Container>
        
    )
}

export default CartTotal


const Container =styled.div`
    height: 500px;
    flex:0.2;
    padding: 2px;
    background-color: 	#C0C0C0;
`

const Title = styled.h3`
    padding:2px;
    background-color:darkgrey;
    border-bottom: 1px solid black;
    
`
const CheckoutButton = styled.button`
    padding:2px;
    width:100%;
    background-color:orange;
    border-radius:3px;
    cursor:pointer;
    :hover{
        background-color:darkorange;
    }
`