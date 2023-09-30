import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import CreateProduct from './CreateProduct';
import ProductInput from '../components/productInput';
import {store,persistor } from '../store/store'
import { PersistGate } from "redux-persist/integration/react";

it ("Renders Crate", ()=> {
  const {getByLabelText} = render(
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
        <CreateProduct/>
      </PersistGate>
    </Provider>
  )
    
  const productNameLabel = getByLabelText("Product Name")
  const productCategoryLabel = getByLabelText("Product Category")

  expect (productNameLabel).toBeDefined()
  expect (productCategoryLabel).toBeDefined()
})

it ("Renders Crate", ()=> {
  const {getByLabelText} = render(
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
        <CreateProduct/>
      </PersistGate>
    </Provider>
  )
    
  const productNameInput = getByLabelText("Product Name")

  fireEvent.change(productNameInput, { target: { value: "myProduct" } });

  expect(productNameInput.value).toBe("myProduct");
})  