import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./pages/Index";
import Login from './pages/Login';
import Registration from './components/Registration';
import Courses from './pages/Courses';

function App() {
  return (
    <Router>
      <Routes>
        {/* This is Default Route for Home Page */}
        <Route path='/' element={<Index />} />

        {/* This router for user login */}
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/courses' element={<Courses />} />

      </Routes>
    </Router>
  )
}

export default App;
