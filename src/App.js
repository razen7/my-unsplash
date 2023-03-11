import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Add from './components/popups/Add';

function App() {
  const [action, setAction] = useState(null);
  return (
    <div className="mx-12 my-3">
      <Header setAction={setAction} />
      <Add action={action} setAction={setAction} />
    </div>
  );
}

export default App;
