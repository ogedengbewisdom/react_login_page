import React, { Fragment } from 'react';
import Home from './components/Home/Home';
import Logins from './components/Logins/Logins';
import MainHeader from './components/MainHeader/MainHeader';


function App() {
  return (
    <Fragment>
      <MainHeader />
      {/* <Home /> */}
      <Logins />
    </Fragment>
  );
}

export default App;
