import react, { Fragment } from 'react';
const Heading= () => {
  return(
    <Fragment>
      <div style={{background: '#67B26F' , /* fallback for old browsers */
background:' -webkit-linear-gradient(to right, #4ca2cd, #67B26F)', /* Chrome 10-25, Safari 5.1-6 */
background:' linear-gradient(to right, #4ca2cd, #67B26F)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}}>
    
   <h1 style={{fontFamily: 'Style Script',textAlign:'center'}}>almost before</h1>
   </div>
    </Fragment>
  );
}

export default Heading;

