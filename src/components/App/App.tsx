import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import './App.scss';
import Table from '../Table/Table';

function App() {
  return (
    <Router>
      <div className="container">
        <Search />
        <Routes>
          <Route path="/:page" element={<Table />} />
          <Route path="/" element={<Table />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
