import AuthProvider from './components/context/UserContext';
import Routes from './routes';
import Global from './style/global';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Global/>
      <Routes/>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
/>
    </div>
     
  );
}

export default App;
