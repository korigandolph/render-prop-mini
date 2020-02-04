import React from 'react';
import './App.css';

import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';

function App() {
  return (
    <div className="App">
        <LoginForm />
        <RegistrationForm />
    </div>
  );
}

export default App;
