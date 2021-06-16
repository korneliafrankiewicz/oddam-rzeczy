import React from "react";
import RegisterForm from "../../RegisterForm";
const FirebaseContext=React.createContext(null);

export const withFirebase = Component => (props) =>(
    <FirebaseContext.Consumer>
        {firebase=><Component {...props} firebase={firebase} /> }
    </FirebaseContext.Consumer>
)

export default FirebaseContext;