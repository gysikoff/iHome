import './App.css';
import Header from './comps/Header';
import RoomsPage from './pages/RoomsPage'
import RoomPage from './pages/RoomPage'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <div className='App'>
          <Routes>
            <Route path="/" element={<RoomsPage/>} exact />
            <Route path="/rooms/:id" element={<RoomPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
