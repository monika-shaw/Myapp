import react from 'react';

const Time = () => {
    var tm= new Date();
    var t=tm.toLocaleTimeString();
    var d= tm.toLocaleDateString();

    return(
     <react.Fragment>
            <h1>{`time is ${t}`}</h1>
           <h1>{`Date is ${d}`}</h1>
     </react.Fragment>
    );
}

export default Time;