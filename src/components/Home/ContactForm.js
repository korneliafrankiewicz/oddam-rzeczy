import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField} from "@material-ui/core";
import BackgroundContactImg from "../../assets/assets/Background-Contact-Form.jpg";
import Typography from '@material-ui/core/Typography';
import DecorationImg from "../../assets/assets/Decoration.svg";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      position: "absolute",
      top: "3000px",
      textAlign: "center",

      '&::before': {
        content: '""',
        backgroundImage: `url(${BackgroundContactImg})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        display: "block",
        opacity: "0.4",
      },
    },
    contactSection: {
      width: "100%",
      display: "flex",
      position: "absolute",
      top: "300px",
      justifyContent: "center",
        alignItems: "center",
    },
      card: {
        display: "flex",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
      },
      cardForm: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      },

      title: {
        display: "flex",
        justifyContent: "center"
    
    },
    decorationimg: {
      margin: "30px 0"
  },

  input: {
    marginRight: "40px",
  },
  message: {
    marginTop: "20px"
  },
  submitButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end"
  },
  submitButton: {
    display: "flex",
    alignSelf: "flex-end",
    border: "1px solid grey",
    marginTop: "10px",
    backgroundColor: "white",
    color: "#3C3C3C",
    textTransform: "none",
    padding: "10px 30px",
    borderRadius: "0px",
    letterSpacing: "1.3px",
    fontSize: "1em",
    "&:hover": {
        cursor: "pointer",
    }
},
succesMessage: {
  display: "flex",
  justifyContent: "center",
  color: "green",
  marginBottom: "10px"
},
errorMessage: {
  color: "red",
  marginTop: "20px"
}

  

  

  
    }));
const ContactForm = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [unValidName,setUnValidName]=useState(false);
    const [unValidEmail,setUnValidEmail]=useState(false);
    const [unValidMess,setUnValidMess]=useState(false);
    const [opCom,setOpCom]=useState(false);

    const handleChangeName = (e) => {
      setName(e.target.value)
    };
    const handleChangeEmail = (e) => {
      setEmail(e.target.value)
    };
    const handleChangeMessage = (e) => {
      setMessage(e.target.value)
    };

    
    // useEffect(() => {
    //   setName("");
    //   setEmail("");
    //   setMessage("")
    // }, opCom);


    const onSubmit = (event) => {
      
      event.preventDefault()
      setUnValidName(false);
      setUnValidEmail(false);
      setUnValidMess(false);

      let inquiry = {
        name : "",
        email : "",
        message: "",
      };


      function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase()) && email.length > 0;
  
    }

   
    function validateName(name) {
      console.log(!(name.indexOf(' ') >= 0))
      return (!(name.indexOf(' ') >= 0)) && name.length > 0;
  }

      function validateMessage(message) {
        return message.length >= 120;
      }
    
validateName(name) ? inquiry.name=name : setUnValidName(true);
validateEmail(email) ? inquiry.email=email  : setUnValidEmail(true);
validateMessage(message) ? inquiry.message=message : setUnValidMess(true);


      const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

      fetch(`${API}`,{
        method:"POST",
        body:JSON.stringify(inquiry),
        headers:{
            "Content-Type": "application/json"
        }
    })
        .then(response=>{
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Błąd sieci!");
            }
        })
        .then(data=>{
            console.log(data)
            if(data.status==="success"){
              setOpCom(true)

            }
        })
        .catch(error=>{
            console.log(error)
        })

        if(opCom) {
          setName("");
          setEmail("")
          setMessage("")
          console.log("cokolwiek")

        }
    }

  

  const handleChange = (event) => {
    setValue(event.target.value);

  };
    return ( 
        <div className={classes.root} id="contact_form">
          <div className={classes.contactSection}>
              
          <div className={classes.card}></div>
          <div className={classes.card}>
            <div className={classes.cardForm}>
                <Typography className={classes.title} variant="h4">
                <h4>Skontaktuj się z nami</h4>
                </Typography>

                <div className={classes.decorationimg}>
                <img src={DecorationImg} />
                </div>

              { opCom &&
                <div className={classes.succesMessage}>
                 <h1>Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy</h1>
               </div>
              }

    
               

              <form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmit}>
                <div>
                  <div className={classes.inputs}>
                  <TextField
                    id="standard-textarea"
                    color="secondary"
                    label="Wpisz swoje imię"
                    placeholder="Wpisz swoje imię"
                    multiline
                    className={classes.input}
                    value={name}
                    onChange={handleChangeName}
                  />
                  
                  <TextField
                    id="standard-textarea"
                    color="secondary"
                    label="Wpisz swój email"
                    placeholder="Placeholder"
                    multiline
                    value={email}
                    onChange={handleChangeEmail}
               
                  />
                  </div>
                  <div className={classes.message}>
                  <TextField
                    id="standard-multiline-static"
                    color="secondary"
                    label="Wpisz swoją wiadomość"
                    multiline
                    rows={5}
                    fullWidth
                    value={message}
                    onChange={handleChangeMessage}
                  />
                  </div>

                  <div className={classes.submitButtonWrapper}>
                  <Button className={classes.submitButton} type="submit" variant="contained">Wyślij</Button>
                  </div>     

                      {unValidName && <p className={classes.errorMessage}>Podane imię jest nieprawidłowe</p>}
                      {unValidEmail && <p className={classes.errorMessage}>Podany email jest nieprawidłowy</p>}
                      {unValidMess && <p className={classes.errorMessage}>Podana wiadomość jest za krótka</p>}
                </div>
          </form>


            </div>
          </div>
          </div>
          <Footer />
        </div>
     );
}
 
export default ContactForm;