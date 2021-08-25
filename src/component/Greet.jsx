import react from 'react';

const Greet = () => {

    const t= new Date().getHours();
    var greet='';
    const col={
    }
    if(t>5 && t<11)
    {
        greet='Good Morning';
        col.color='red';
    }

    else if(t>11 && t<15)
    {
        greet='Good Afternoon';
        col.color='green';
    }

    else if(t>15 && t<20)
    {
        greet='Good Evening';
        col.color='blue';
    }

    else{
        greet='Good Night';
        col.color='yellow';
    }

    return(
        <react.Fragment>
            <h1>Hello, <span style={col}>{greet}</span></h1>
        </react.Fragment>
    );
}
export default Greet;