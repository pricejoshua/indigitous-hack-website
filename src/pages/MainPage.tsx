import Main from '../components/Main';
import About from '../components/About';
import Signup from '../components/Signup';
import Sponsors from '../components/Sponsors';
import Countdown from '../components/Countdown';

function MainPage() {
  return (
    <div className="">
      <About />
      <Countdown />
      <Signup />
      <Sponsors />
    </div>
  );
}

export default MainPage;