import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <Routes>
        {/* This is Default Route for Home Page */}
        <Route path='/' element={<Index />} />

      </Routes>
    </Router>
    //   <div className="bg-white">
    //   <Navbar />
    //   <Index />
    // </div>
  )
}

export default App;
