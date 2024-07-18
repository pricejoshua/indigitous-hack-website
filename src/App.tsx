import './App.css';
import Main from './components/Main';
import About from './components/About';
import Signup from './components/Signup';
import Sponsors from './components/Sponsors';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <Main />
      <About />
      <Countdown />
      <Signup />
      <Sponsors />
    </div>
  );
}

export default App;
