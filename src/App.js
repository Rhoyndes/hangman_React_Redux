import React from 'react';
import './App.scss';
import { HangMan } from './features/hangman/HangMan';
import { getPassword } from './features/hangman/HangManSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPassword())
    // eslint-disable-next-line 
  }, [])
  
  return (
    <>
      <HangMan />
    </>
  );
}

export default App;
