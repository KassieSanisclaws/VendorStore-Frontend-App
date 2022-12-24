import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Footer } from './components/footer/footer';
import { PublicPage } from './main-layout/publicPage';


function App() {
  return (
   <BrowserRouter>
      <div className="grid-container">
        <header>header content here:</header>

          <main>
            <Routes>
                <Route path="/" index element={<PublicPage />}/>
            </Routes>
         </main>

        <footer><Footer /></footer>
     </div>
   </BrowserRouter>
  );
}

export default App
