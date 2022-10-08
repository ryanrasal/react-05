import React from 'react';

const Contact = (props) => {
  console.log('props:');

  return (
    <div className="friend-item">
      <h3>{props.name}</h3>
      <h4> 📧 {props.email}</h4>
      <h4> 📞 {props.phone}</h4>
      <button>Delete</button>
    </div>
  );
};

export default Contact;