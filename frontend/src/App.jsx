import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./pages/Index";
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* This is Default Route for Home Page */}
        <Route path='/' element={<Index />} />

        {/* This router for user login */}
        <Route path='/login' element={<Login />} />

      </Routes>
    </Router>
    //   <div className="bg-white">
    //   <Navbar />
    //   <Index />
    // </div>
  )
}

export default App;
