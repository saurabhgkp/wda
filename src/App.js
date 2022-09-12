import "./App.css";

import 'react-toastify/dist/ReactToastify.css';
import MainRouter from "./MainRouter/MainRouter";
import { HelmetProvider } from 'react-helmet-async'
function App() {
  return (
    <><HelmetProvider>
      <MainRouter />
      </HelmetProvider>
    </>
  );
}

export default App;
