import { createContext, useState } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

export const ProductContext = createContext();

function App() {
  const [count, setCount ]= useState(0);
  
  return (
    <ProductContext.Provider value={count} setCount={setCount}>
      <div className="App">
      <h1>Hooks [ useContext ]</h1>
      <MainContainer />
    </div>
    </ProductContext.Provider>
  );
}

export default App;
