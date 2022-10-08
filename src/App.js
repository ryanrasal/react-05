import React from 'react';
import Contact from './components/Contact';

export const App = (
  // write your HTML code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>
    <div>
      <Contact name="Sophie" email="Sophiel@email.com" phone="123123"/>
      <Contact name="Jean" email="Jean@email.com" phone="348593"/>
      <Contact name="Ryan" email="Ryan@email.com" phone="0980809435"/>
      <Contact name="Marc" email="Marc@email.com" phone="123904523"/>
      <Contact name="Peter" email="Peter@email.com" phone="09584746"/>
    </div>
  </div>
);

export default App;