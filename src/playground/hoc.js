import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (  
    <div>
        <h1> Info </h1>
        <p>
            This is the info: {props.info}
        </p>
    </div>  
);

const InnoruInfo = (props) => (  
    <div>
        <h1> InnoruInfo </h1>
        <p>
            This is the info: {props.details}
        </p>
    </div>  
);


const adminWithWarning = (WrappedComp) => {   

    return ( props ) => (
        <div>
        {props.isAdmin == "true" && <p> This is Admin Info </p> }
        { <WrappedComp info={props.info} details={props.details}/> }
        <WrappedComp {...props}/>
    </div>
    );
};

const AdminInfo = adminWithWarning(Info);

const requireAuthentication = (WrappedComp) => {

    return(props) => (
       <div>
            {props.isAuthSuccess === true ? <WrappedComp {...props}/> : <p> Please login to continue!!! </p> }
       </div>     
    );
};
const AuthInfo = requireAuthentication(Info);

const AdminInfo2 = adminWithWarning(InnoruInfo);

//  ReactDOM.render(<AdminInfo  info="Information Passed" isAdmin="true"/>, document.getElementById('app') );
ReactDOM.render(<AdminInfo2  
        info="Information Passed" 
        details="Details here"
        isAuthSuccess={true}/>, document.getElementById('app') );
