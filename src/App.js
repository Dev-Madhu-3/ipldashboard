import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team-matches/:id" element={<TeamMatches />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
)

export default App
