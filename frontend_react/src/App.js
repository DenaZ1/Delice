import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Cart, Footer, FooterBanner, HeroBanner,
  Layout, Product, Home } from './container';
import { Navbar } from './components';
import ProductDetails from './container/Product/[slug]';
import './App.scss';

export const App = () => {
  return (
    
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
      </Routes>
      </Layout>
    </Router>
  )};