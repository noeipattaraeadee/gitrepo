import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';

class App extends Component {
  constructor(props)
  {super(props);
    var config = {
      apiKey: "AIzaSyBRfFJbFjBWGaisAj4QGYrbyylbnVwGY4o",
      authDomain: "react-project-df772.firebaseapp.com",
      databaseURL: "https://react-project-df772.firebaseio.com",
      projectId: "react-project-df772",
      storageBucket: "react-project-df772.appspot.com",
      messagingSenderId: "434318772050"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="container">


        <Header title="Test Database Firebase" />


        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
           <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
