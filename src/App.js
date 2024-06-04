import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/notfound';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element= {<Home />} />
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
