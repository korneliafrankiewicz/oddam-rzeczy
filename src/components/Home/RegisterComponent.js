import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DecorationImg from "../../assets/assets/Decoration.svg";
import TextField from '@material-ui/core/TextField';
import Navigation from "./Navigation";

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

const RegisterComponent = () => {
    const classes = useStyles();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    const [unValidPassword,setUnValidPassword]=useState(false);
    const [unValidConfirmPassword,setUnValidConfirmPassword]=useState(false);
    const [unValidEmail,setUnValidEmail]=useState(false);

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

  function validateConfirmPassword(password) {
   if(password.value === confirmPassword.value){
     console.log("są te same")
   } else {
    setUnValidConfirmPassword(true)
   }
}

  if(validatePassword(password)){
    console.log("haslo jest ok")
  } else {
    setUnValidPassword(true)
    console.log("haslo nie ok")
  } 

  if(validateConfirmPassword(password)){
    console.log("hasla sa takie same")
  }


  if(validateEmail(email)){

  } else {
    setUnValidEmail(true)
  }
}

    

    return ( 
        <div className={classes.root}>
             <div className={classes.loginMenu}>
             <Navigation />
            </div>
          <div className={classes.loginWrapper}>
         
        
                <Typography className={classes.title} variant="h4">
                <h4>Załóż konto</h4>
                </Typography>

                <div className={classes.decorationimg}>
                <img src={DecorationImg} />
                </div>

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
                type="password"
                autoComplete="current-password"
                color="secondary"
                value={password}
                onChange={handleChangePassword}
              />
                <TextField
              className={classes.input}
                id="standard-password-input"
                label="Powtórz hasło"
                type="password"
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
             </form>
        
                      {unValidPassword && <p className={classes.errorMessage}>Podane hasło jest nieprawidłowe</p>}
                      {unValidConfirmPassword && <p className={classes.errorMessage}>Podane hasła nie są takie same</p>}
                      {unValidEmail && <p className={classes.errorMessage}>Podany email jest nieprawidłowy</p>}
                
           </div> 
        </div>
     );
}
 
export default RegisterComponent;