import React from 'react';
//Routing->ability to move b/w diff parts of web app when user clicks
//an element
// React Router is TP library used for routing in react apps
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';

function App() {
  return (
    <Router>
      {/* include Header component */}
      <Header />

      <main className='py-3'>
        <Container>
          {/* include Homescreen component loaded*/}
          <Route path='/' component={HomeScreen} exact />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>

      {/* include Footer component */}
      <Footer />
    </Router>
  );
}

export default App;
