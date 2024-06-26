import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Time from './components/Time';


function App({title, targetTime}) {
  return (
   <>
   <Heading/>
   <div className='challanges'>
   <Time title={"Easy"} targetTime={1} />
   <Time title={"NotEasy"} targetTime={ 5} />

   <Time title={"Hard"} targetTime={10 } />

   <Time title={"superhard"} targetTime={15 } />

   </div>
   
   </>
  );
}

export default App;
