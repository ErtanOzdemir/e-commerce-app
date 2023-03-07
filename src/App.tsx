import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './Pages/Login';
import MainPage from './Pages/Main';
import SignUp from './Pages/Signup';
import { PrivateRoute } from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<LoginPage />} path="/login"></Route>
          <Route element={<MainPage />} path="/"></Route>
          <Route element={<PrivateRoute />}></Route>
          <Route element={<SignUp />} path="/signup"></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
