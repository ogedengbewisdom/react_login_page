import React, { Fragment, useState } from 'react';
import Home from './components/Home/Home';
import Logins from './components/Logins/Logins';
import MainHeader from './components/MainHeader/MainHeader';



function App() {

  const [isLoging, setIsloging] = useState(false)

  const logoutHandler = () => {
    setIsloging(false)
  }

  const loginHandler = () => {
    setIsloging(true)
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
