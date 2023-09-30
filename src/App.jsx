import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from './store/store'
import CreateProduct from './pages/CreateProduct';


function App() {
  
 

  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CreateProduct/>
      </PersistGate>
    </Provider>
    
    </>
  )
}

export default App
