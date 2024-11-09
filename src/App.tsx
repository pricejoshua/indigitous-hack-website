import './App.css';
import MainPage from './pages/MainPage';
import Resources from './pages/Resources';
import Main from './components/Main';
function App() {

  const startDate = new Date('2024-11-08T17:00:00-0600');
  let body = null;
  if (+startDate < +new Date()) {
    body = <Resources />;

  } else {
    body = <MainPage />;
  }

  return (
    <div className='bg-[#0D0D0D] min-h-screen'>
    <Main />
    {body}
    </div>
  )
}

export default App;
