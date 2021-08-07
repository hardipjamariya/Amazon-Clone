// import React from 'react'
// import styled from 'styled-components'
// import { useStateValue } from './StateProvider';
// import CheckOutProduct from './CheckOutProduct'

// function Cart({}) {
//     const [{ basket}] = useStateValue();
    

//     return (
//         <Container>
         
//             {basket?.length === 0 ? (
//                 <div>
//                     <h2>Your shopping basket is empty</h2>
//                 </div>
//             ) : (
//                 <div>
//                     <h2>Your shopping basket</h2>
//                     {basket.map(item => (      <CheckOutProduct
//                     id={item.id}
//                     image = {item.image}
//                     price={item.price}
//                     rating={item.rating}
//                     title={item.title}
//                     />
//                     ) )
//                     }
              
//                 </div>
//             )}

//         </Container>
//     )
// }

// export default Cart

// const Container =styled.div`
//     display: flex;
//     padding: 14px 18px 0 18px;
// `



import React from 'react';
import styled from 'styled-components';
import Cartitems from './Cartitems';
import Carttotal from './Carttotal';

function Cart({ cartItems}) {

    const getTotalPrice = () => {
        let total=0;
        cartItems.forEach((item) =>{
            total+=(item.product.price*item.product.quantity)
        })
        return total;
    }

    const getCount = () => {
        let count=0;
        cartItems.forEach((item)=>{
            count += item.product.quantity;
        })
        return count;
    }
    return (
        <Container>
            <Cartitems cartItems={cartItems} />
            <Carttotal getCount={getCount} getTotalPrice={getTotalPrice}/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display:flex;
    background-color:black;
`