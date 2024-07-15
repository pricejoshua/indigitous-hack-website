import './App.css';
import Main from './components/Main';
import About from './components/About';
import Signup from './components/Signup';

function App() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <Main />
      <About />
      <Signup />
    </div>
  );
}

export default App;
