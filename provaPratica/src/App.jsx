import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Clubs from './components/Clubs/Clubs';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Clubs />
      </main>
    </div>
  );
}

export default App;
