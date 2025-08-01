import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { FormProvider } from './Context/FormContext';

function App() {
  return (
    <FormProvider>
      <div className="App">
        <Navbar/>
        <Outlet/>
      </div>
    </FormProvider>
  );
}

export default App;