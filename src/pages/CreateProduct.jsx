import React from 'react'
import Navigation from '../components/Navbar'
import Header from '../components/Header'
import ProductInput from '../components/ProductInput'
import ListProduct from '../components/ListProduct'

const CreateProduct = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      <ProductInput/>
      <ListProduct/>
    </div>
  )
}

export default CreateProduct