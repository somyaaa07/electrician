import React from 'react';
import ProductPage from '../Products';
import { productData } from './data';

export default function App() {
  return <ProductPage data={productData} />;
}