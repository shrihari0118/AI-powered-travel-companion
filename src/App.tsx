import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Translator from './pages/Translator';
import BudgetPlanner from './pages/BudgetPlanner';
import TravelGuide from './pages/TravelGuide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="translate" element={<Translator />} />
          <Route path="budget" element={<BudgetPlanner />} />
          <Route path="guide" element={<TravelGuide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
