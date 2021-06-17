import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import {compose} from "recompose";
import { withFirebase } from './utils/Firebase';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "700px",
    },
  
    loginWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
   loginMenu: {
     display: "flex",
     flexDirection: "column",

   },
   loginForm: {
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    alignItems: "center",
  },
  inputs: {
    backgroundColor: "#F0F1F1",
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    width: "320px",
  },
    input: {
      margin: "15px 0"
    },
    title: {
      display: "flex",
      justifyContent: "center"
  
  },
  decorationimg: {
      margin: "30px 0"
  },
  buttons: {
    marginTop: "30px",
    display: "flex",
    width: "450px",
    justifyContent: "space-between"
  },
  button: {
    adding: "15px",
        border: "1px solid transparent",
        "&:hover": {
            cursor: "pointer",
            border: "1px solid #3C3C3C"
        }
  },
  errorMessage: {
    color: "red",
    marginTop: "20px"
  },
  
  
    }));

const RegisterFormBase = (props) => {
    const classes = useStyles();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    const [unValidPassword,setUnValidPassword]=useState(false);
    const [unValidConfirmPassword,setUnValidConfirmPassword]=useState(false);
    const [unValidEmail,setUnValidEmail]=useState(false);
    const[error, setError] = useState("")

    const handleChangePassword = (e) => {
      setPassword(e.target.value)
    };
    const handleChangeEmail = (e) => {
      setEmail(e.target.value)
    };

    const handleChangeConfirmPassword = (e) => {
      setConfirmPassword(e.target.value)
    };

    const onSubmit = (event) => {
      event.preventDefault()
      setUnValidPassword(false);
      setUnValidEmail(false);
      setUnValidConfirmPassword(false);

      function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase()) && email.length > 0;
  
    }

    function validatePassword(password) {
      return password.length >= 6;
    
    }

  function validateConfirmPassword(password1, password2) {
    console.log(password2)
    console.log(password1 === password2)
  return password1 === password2
}

  if(validatePassword(password)){
  } else {
    setUnValidPassword(true)
    console.log("haslo nie ok")
  } 

  if(validateConfirmPassword(password, confirmPassword)){
    console.log("hasla sa takie same")
  } else {
    setUnValidConfirmPassword(true)
  }


  if(validateEmail(email)){

  } else {
    setUnValidEmail(true)
  }


  if(validateEmail(email) && validatePassword(password) && validateConfirmPassword(password, confirmPassword)){
    props.firebase
  .doCreateUserWithEmailAndPassword(email, password)
  .then(authUser => {
      props.history.push("/")
  })
  .catch(error => {
      setError({error})
  })
}
  
}

    

    return ( 
        <div className={classes.root}>
          <div className={classes.loginWrapper}>

              <form className={classes.loginForm} noValidate autoComplete="off"  onSubmit={onSubmit}>
              <div className={classes.inputs} >
              <TextField 
              className={classes.input}
              id="standard-basic" 
              label="Email" 
              color="secondary"
              value={email}
              onChange={handleChangeEmail} 
              />
              <TextField
              className={classes.input}
                id="standard-password-input"
                label="Hasło"
                // type="password"
                autoComplete="current-password"
                color="secondary"
                value={password}
                onChange={handleChangePassword}
              />
                <TextField
              className={classes.input}
                id="standard-password-input"
                label="Powtórz hasło"
                // type="password"
                autoComplete="current-password"
                color="secondary"
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
              />
              </div>

                <div className={classes.buttons}>
                    <Button className={classes.button} type="submit">Załóż konto</Button>
                    <Button className={classes.button}>Zaloguj</Button>
                </div>

                {error && <p>{error.message}</p>}
             </form>
        
                      {unValidPassword && <p className={classes.errorMessage}>Podane hasło jest nieprawidłowe</p>}
                      {unValidConfirmPassword && <p className={classes.errorMessage}>Podane hasła nie są takie same</p>}
                      {unValidEmail && <p className={classes.errorMessage}>Podany email jest nieprawidłowy</p>}
                
           </div> 
        </div>
     );
}

const RegisterForm = compose(withRouter, withFirebase)(RegisterFormBase);
export default RegisterForm;