import React from 'react';
import styled from 'styled-components';
import Cartitem from './Cartitem';

function Cartitems({ cartItems }) {
    return (
        <Container>
            <Title>
                Shopping Cart :
            </Title>
            <ItemContain>
                {
                    cartItems.map((item) =>(
                            <Cartitem
                                id={item.id}
                                item={item.product}
                            />
                            ))
                        }
                    </ItemContain>
                </Container>
               
            )
        }
        
        export default Cartitems
        
        const Container = styled.div`
            margin:1px;
            padding:2px;
            flex:0.8;
            background-color:silver;
            border:2px solid grey;
        `
        
        
        const Title = styled.h1`
            padding:2px;
            background-color:darkgrey;
            border-bottom: 1px solid black;
        `
        
        const ItemContain = styled.div`
          
        `