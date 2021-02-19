import React, { Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import SignIn from './components/signIn/signIn.component';
import Dashboard from './components/dashboard/dashboard.component';

function App() {
  const currentUser = true;
  return (
    <div className="app">
    <Header />
    <Switch>
        <Suspense fallback={<Spinner />}>
        <Route
              exact
              path='/'
              render={() =>
                currentUser ? <Dashboard/> : <SignIn />
              }
            />
          {/* <Route exact path='/main' component={HomePage} /> */}
        </Suspense>
    </Switch>
  </div>
  );
}

export default App;
