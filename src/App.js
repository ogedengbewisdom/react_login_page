import React, { Fragment, useState } from 'react';
import Home from './components/Home/Home';
import Logins from './components/Logins/Logins';
import MainHeader from './components/MainHeader/MainHeader';
import { app } from "./Databease/firebaseConfig"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


function App() {
  const auth = getAuth()
  const [isLoging, setIsloging] = useState(false)

  const loginHandler = (email, password) => {
    
    signInWithEmailAndPassword(auth, email, password )
    .then((response) => {
      console.log(response.user)
      setIsloging(true)
    })
    .catch((error) => {
      alert(error.message)
      setIsloging(false)
    })
    
  }

  
  const logoutHandler = async () => {

    try {
      await signOut(auth)

      console.log(signOut(auth))
      setIsloging(false) 
    }

    catch (error) {
      alert(error.message)
      setIsloging(true)
    }

    // signOut(auth)
    // .then(() => {
    //   setIsloging(false)
    // })
    // .then((error) => {
    //   alert(error.message)
    //   setIsloging(true)
    // })
  }




  return (
    <Fragment>
      <MainHeader onAuthentication={isLoging} onLogout={logoutHandler} />
      {isLoging && <Home />}
      {!isLoging && <Logins onLogin={loginHandler}/>}
    </Fragment>
  );
}

export default App;
