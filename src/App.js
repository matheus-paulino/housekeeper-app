import React from 'react';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import HomeScreen from './components/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomeScreen />
    </>
  );
}

export default App;