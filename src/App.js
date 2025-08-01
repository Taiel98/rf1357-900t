import './App.css';
import { Outlet } from 'react-router-dom';
import { FormProvider } from './Context/FormContext';

function App() {
  return (
    <FormProvider>
      <div className="App">
        <Outlet/>
      </div>
    </FormProvider>
  );
}

export default App;