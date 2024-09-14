import { RouterProvider } from 'react-router-dom';
import { LoginContextProvider } from './contexts/loginContext';
import router from './routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <RouterProvider router={router} />
      </LoginContextProvider>
    </div>
  );
}

export default App;
