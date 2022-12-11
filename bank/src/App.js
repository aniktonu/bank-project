
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Signup from './Components/Registration/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';






function App() {
  return (
    <>

      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/sign-up" element={<Signup></Signup>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
