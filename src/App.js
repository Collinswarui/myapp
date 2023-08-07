import React from 'react';

import { Footer, Blog, Possibilty, Features, Whatapp1, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <h1>h1</h1>
      </div>
       <Brand />
       <Whatapp1 />
       <Features />
       <Possibilty />
       <CTA />
       <Blog />
       <Footer />
    </div>
  )
}

export default App;
