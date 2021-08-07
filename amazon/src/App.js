import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Cart from './Cart'
import Login from './Login'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from 'react'
import { db, auth } from './firebase';
import styled from 'styled-components'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const [cartItems, setCartitems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((Snapshot) => {
      const tempItems = Snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartitems(tempItems);
    })
  }
  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null)
    })
  }
  useEffect(() => {
    getCartItems();
  }, [])
  console.log("User", user);
  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header
              signOut={signOut}
              user={user}
              cartItems={cartItems}
            />
            <Switch>
              <Route path="/Cart">
                <Cart cartItems={cartItems} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              
            </Switch>
          </Container>

        )
      }
    </Router>
  );
}

export default App;

const Container = styled.div`

`


