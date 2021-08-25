// import react, { useState } from 'react';

// const Mycard = () => {

//     let count=1;
//     const [counts,setcount]=useState(count)
//     const Myfun = () => {
//         console.log('clicked'+count++);
//         setcount(counts+2)
//     }
//     return(
//         <react.Fragment>
//             <h1>{counts}</h1>
//             <button onClick={Myfun}>Click</button>
//         </react.Fragment>
//     );
// }
// export default Mycard;


// import react, { useState } from 'react';

// const Myhook = () => {

//     let t= new Date().toLocaleTimeString();

//     const [time,ctime]=useState(t);

//     const Fun = () => {
//         console.log('clicked');
//         let ct=new Date().toLocaleTimeString();
//         ctime(ct);
//     }
//     return(
//         <react.Fragment>
//             <h1>Time is {time}</h1>
//             <button onClick={Fun}>Click</button>
//         </react.Fragment>
//     );
// }

// export default Myhook;

// import react, { useState } from 'react';

// const Myhook = () => {

//     let t= new Date().toLocaleTimeString();

//     const [time,ctime]=useState(t);

//     const Fun = () => {
//         console.log('clicked');
//         let ct=new Date().toLocaleTimeString();
//         ctime(ct);
//     }

//     setInterval(Fun,1000)
//     return(
//         <react.Fragment>
//             <h1>Time is {time}</h1>
//             <button onClick={Fun}>Click</button>
//         </react.Fragment>
//     );
// }





// export default Myhook;


// import react, { useState } from 'react';

// const Myhook = () => {

//     let name="Hello";
//     let col={
//         fontFamily:'cursive',
//     }

//     const [nm,mynm]=useState(name);

//     const [ccol,mycol]=useState(col);
//     const Myfun = () => {
//         console.log('click');
//         let name1="Hii";

//         let colo={
//             fontFamily:'fantasy',
//         }
//         mycol(colo)
//         mynm(name1)
//     }
//     return(
//         <react.Fragment>
//             <h1 style={ccol}>{nm}</h1>
//             <button onClick={Myfun}> Click</button>
           
//         </react.Fragment>
//     );
// }

// export default Myhook;


// import react, { useState } from 'react';

// const Myhook = () => {

//     const [names,mynames]=useState();

//     const [nm,snm]=useState();


//     const Myfun = (event) => {
//         console.log(event.target.value);
//         mynames(event.target.value)
//     }


//     const fun = (event) => {
//         event.preventDefault();
//         snm(names)
//     }
//     return(
//         <react.Fragment>
//         <form onSubmit={fun}>
//          <div>
//              <h1>Hello {nm}</h1>
//              <input type="text" placeholder="Enter your name" value={names} onChange={Myfun}/>
//              <button type='submit'>Click</button>
//          </div>
//          </form>
//         </react.Fragment>
//     );
// }

// export default Myhook;


// import react, { useState } from 'react';

// const Myhook = () => {

//     const [Fullname,setFullname]=useState({
//    fname:"",
//    lname:"",
//    email:"",

//     } );

//     const fun = (event) => {
//         console.log(event.target.value);

//         const {value,name}=event.target

//         setFullname((preValue) => {
//             if(name==='fName')
//             {
//                 return{
//                     fname:value,
//                     lname:preValue.lname,
//                     email:preValue.email
//                 };
//             }
//             else if(name==='lName')
//             {
//                 return{
//                     fname:preValue.fname,
//                     lname:value,
//                     email:preValue.email,
//                 };
//             }

//             else if(name==='Email')
//             {
//                 return{
//                     fname:preValue.fname,
//                     lname:preValue.lname,
//                     email:value,
//                 };
//             }
//         });
//     };

  



//     const change = (event) => {
//         event.preventDefault();
//         alert('form submitted')
//     }
//     return(
//         <react.Fragment>
//         <form onSubmit={change}>
//           <h1>Hrllo {Fullname.fname} {Fullname.lname} {Fullname.email}</h1>
//           <input type='text' placeholder="Enter your 1st name" name='fName' value={Fullname.fname} onChange={fun}/>
//           <input type='text' placeholder="Enter your 2nd name" name='lName' value={Fullname.lname} onChange={fun}/>
//           <input type='email' placeholder="Enter your email" name='Email' value={Fullname.email} onChange={fun}/>
//           <button type='submit'>Click</button>
//           </form>
//         </react.Fragment>
//     );
// }

// export default Myhook;

import react, { useState,useEffect } from 'react';

const Myhook = () => {

    const[count,mycount]=useState(1);

   useEffect(() => {
    alert('clicked')
      
   }, [count])

    const Fun = () => {
        mycount(count+1);
    }
    return(
        <react.Fragment>
            <h1>Welcome</h1>
            <h1>{count}</h1>
            <button onClick={Fun}>click</button>
        </react.Fragment>
    );
}
export default Myhook;