import './App.css';
import Pricing from './components/Pricing'
import Info from './components/Info'

function App() {
  return (
  <div style={{display: 'flex', fontSize: '14px', heigth: '100vh'}}>
    <Pricing />
    <Info />
  </div>
  );
}

export default App;
