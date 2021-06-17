import React from 'react';
import { withFirebase } from '../../utils/Firebase';
import Button from '@material-ui/core/Button';


const SignOutButton = ({ firebase }) => (
    <Button  onClick={firebase.doSignOut}>
        Wyloguj
    </Button>
);
export default withFirebase(SignOutButton);