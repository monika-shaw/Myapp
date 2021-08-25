import react from 'react';



const Card = (props) => {
    return(
        <react.Fragment>
         
                <div className="card-body">
                    <div className="card-img">
                    <img src={props.image}/>
                    </div>
                    <h3>{props.name}</h3>
                    <a href={props.link}>
                        <button>Click me 😄</button>
                    </a>
                </div>
                
           
        </react.Fragment>
    );
}

export default Card;