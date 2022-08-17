import React from 'react'
import { CartProvider } from 'react-use-cart'
import Categories from '../components/Categories'
import Footer from '../components/footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import {
  Route,
  Link,
  Routes,
  useParams,
  BrowserRouter,
} from "react-router-dom";

export default function HomeScreen(props) {
  return (
    <div>
      <CartProvider>
        <Navigation/>
        <Header/>
        <Categories categories = {props.categories} foods = {props.foods} />
        <Footer/>
        </CartProvider>
    </div>
  )
}
