import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { db } from './firebase'

function Home() {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot) => {
            let tempProducts = []

            tempProducts = snapshot.docs.map((doc) =>(
                {
                    id: doc.id,
                    product: doc.data()
                }
            ));

            setProducts(tempProducts);

        })
    }

    useEffect(()=>{
        console.log("Call products");
        getProducts()        
    },[])


    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
               {
                   products.map((data)=>(
                       <Product
                            id={data.id}
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                       />
                   ))
               }
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
   
    
`

const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    height: 80vh;
    background-position: center;
    background-size: cover;
    mask-image:linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0));
    z-index:1;
  
`



const Content = styled.div`
    background-color:black;
    margin:-300px 20px 0px 20px;
    display:flex;
    flex-wrap:wrap;
    border-radius:3px;
    padding:10px;
`