// import React from 'react'
// import styled from 'styled-components'
// import {db} from './firebase'
// import { useStateValue } from './StateProvider'
// function Product({id,title, price , rating , image, }) {
//     const [{}, dispatch] = useStateValue();

//     const AddToCart = () => {

//         dispatch(
//             {
//                 type: 'ADD_TO_BASKET',
//                 item:{
//                 id: id,
//                 image:image,
//                 title: title,
//                 rating: rating,
//                 price: price
//                 }
//             }
//         )
//     }


//     return (
//         <Container>
//             <Title>
//                 {title}
//             </Title>
//             <Price>
//                 ${price}
//             </Price>
//             <Rating>
//                 {
//                     Array(rating)
//                     .fill()
//                     .map(rating=><p>🌟</p>)
//                 }
//             </Rating>
//             <Img src={image}></Img>
//             <Action>
//                 <AddToCartButton 
//                     onClick={AddToCart}>
//                     Add to Cart
//                 </AddToCartButton>
//             </Action>

//         </Container>

//     )
// }

// export default Product

// const Container = styled.div`

//     background-color: white;
//     z-index: 100;
//     flex: 1;
//     padding: 20px;
//     margin: 10px;
//     max-height: 500px;
//     display: flex;
//     flex-direction: column;

// `

// const Title = styled.span``


// const Price = styled.span`
//     font-weight: 500;
//     margin-top: 3px;
// `


// const Rating = styled.div`
//     display: flex;
// `


// const Img = styled.img`
//     max-height:300px;
//     object-fit: scale-down;
// `

// const AddToCartButton = styled.button`
//     width: 100px;
//     background-color: #f08803;
//     border: 2px solid #f08804;
//     border-radius: 2px;
//     cursor: pointer;
// `

// const Action = styled.div`
//     margin-top: 12px;
//     display: grid;
//     place-items: center;



// ` 


import React from 'react';
import styled from 'styled-components';
import { db } from './firebase';

function Product({ title, price, rating, image, id }) {

    const addToCart = () => {
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
            .then((doc) => {
                console.log(doc.exists)
                if (doc.exists) {
                    cartItem.update({
                        quantity: doc.data().quantity + 1
                    })
                } else {
                    db.collection("cartItems").doc(id).set({
                        name: title,
                        image: image,
                        price: price,
                        quantity: 1
                    })
                }
            })
    }

    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>
                ${price}
            </Price>
            <Rating>
                {
                    Array(rating).fill().map(rating => <p>🌟</p>)
                }
            </Rating>
            <Image src={image} />
            <Action>
                <AddToCartButton
                    onClick={addToCart}
                >
                    Add To Cart
                    </AddToCartButton>
            </Action>
        </Container>

    )
}

export default Product

const Container = styled.div`
    background-color:white;
    z-index:100;
    height:400px;
    flex:1;
    max-height:400px;
    margin:10px;
    padding:5px;
    display:flex;
    flex-direction:column;
    border-radius:5px;
    justify-content:space-evenly;

`

const Title = styled.span`
    
`

const Price = styled.span`
    font-weight:600;
    margin:2px;
`

const Rating = styled.div`
    display:flex;
    p{
        color: gold;
    
    }
`

const Image = styled.img`
    margin:5px;
    max-height:200px;
    object-fit:contain;
`

const Action = styled.div`
    display:grid;
    place-items:center;
    justify-content:center;
    padding-bottom:2px;
`

const AddToCartButton = styled.button`
    background-color:orange;
    width:150px;
    height:30px;
    border:2px solid black;
    border-radius:2px;
    cursor:pointer;
`

