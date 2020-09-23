import React from 'react';
import './App.css';
import FormData from "./components/formSendData";
import ListData from "./components/ViewList";
import store from "./store/store";
import {Provider} from "react-redux";
const App = () =>{
  return (
    <div className="App">
        <Provider store={store}>
            <FormData/>
            <ListData/>
        </Provider>


    </div>
  );
}
export default App
