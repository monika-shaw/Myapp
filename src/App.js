import react, { Fragment } from 'react';
import './App.css'
import Heading from './component/Heading';
import Time from './component/Time';
import Greet from './component/Greet';
import {Cal1,Cal2,Cal3} from './component/Calculator';
import Mycard from './component/Mycard';
import Myhook from './component/Myhook';
const App = () => {
  return(
    <Fragment>
       <Heading/>
       <Time/>
       <Greet/>
        <div>
          <h1>{`sum is ${Cal1(10,20)} and sub is ${Cal2(30,5)},mul is ${Cal3(10,2)}`}</h1>
       </div>
        <Mycard/>
       <Myhook/>
    </Fragment>
  );
}

export default App;

