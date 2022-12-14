import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link,
  Routes,
  useParams,
  BrowserRouter,
} from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from 'react-use-cart';
import Page from './components/Addtocart';
import Cart from './components/Cart';
import OrderScreen from './screens/OrderScreen';
import Example from './components/Example';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import DeliveryScreen from './screens/DeliveryScreen';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [foods, setFood] = useState([]);

  const fetchFoodCats = () => {
   axios.get(`https://qrorder.aaasoftwaresolution.com/api/category`)
    .then(res => {
   const category = res.data.data;
       setCategories(category);
      // console.log('axios console cat',categories);
    })
  }
  const fetchFoods = () => {
    axios.get(`https://qrorder.aaasoftwaresolution.com/api/all_items`)
     .then(res => {
    const category = res.data.data;
       setFood(category);
      //  console.log('axios console food',foods);
     })
   }
    useEffect(() => {
      fetchFoodCats();
      fetchFoods();
    }, []);

    useEffect(() => {
      // console.log(categories);
      // console.log(foods);
    }, [categories,foods]);
  return (
    <>
   
     <Routes>
          <Route path="*" element={<HomeScreen categories = {categories} foods = {foods} />} />
          {/* <Route path="/orders" element={<OrderScreen  />} /> */}
          <Route path="/delivery" element={<DeliveryScreen/>}/>
        </Routes>

      
    
    </>
  );

}
