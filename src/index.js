import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Contact = () => {
  console.log('props:');

  return (
    <div className="friend-item">
      <h3>Emmanuel</h3>
      <h4>myemmanuel@email.com</h4>
      <h4>123123</h4>
      <button>Delete</button>
    </div>
  );
};

export const App = (
  // write your HTML code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
