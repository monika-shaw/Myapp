import react from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Mycard = () => {
    return(
        <react.Fragment>
            {Sdata.map((val,index) => {
                return(
                    <Card
                        image={val.aimage}
                        link={val.alink}
                        name={val.aname}
                    />
                );
            })};
        </react.Fragment>
    );
}

export default Mycard;