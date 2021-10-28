import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setValid(value.length <= 20);
  })
  return (
    <div className="App">
      <form onSubmit={e => {
        e.preventDefault();
        const isValid = touched && valid;
        if (isValid) {
          setName(value);
          setValue('');
        }
      }}>
        <input type="text" value={value} onChange={e => {
          setTouched(true);
          setValue(e.target.value);
        }}/>
      </form>
      <p>My name is {value}</p>
      <p>name : {name}</p>
      <p className={`small${!valid ? 'Red' : ''}Text`}>You are allowed a max of 20 characters</p>
    </div>
  );
}

export default App;
