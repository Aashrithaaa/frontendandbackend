import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Login = () => {
  const [contact, setContact] = useState({  
    username: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => ({
      ...preValue,
      [name]: value
    }));
  };

  const handleClick = async () => {

    await fetch('http://localhost:3007/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: contact.username
      })
    })
      .then((response) => response.json())
      .then((data) => JSON.parse(data))
      .catch(err => {
        console.log('Error:', err);
      });
  };

  return (
    <div className="header-div">
      <Input
        name= 'username'
        type= 'text'
        placeholder= 'username'
        onChange={handleChange}
        value={contact.username}
      />

      <br></br>

      <Button type="submit" text="Subscribe" onClick={handleClick} />
    </div>
  );
};

export default Login;
