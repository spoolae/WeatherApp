import React from "react";
import HomeScreen from "./assets/screens/HomeScreen.jsx";
import "reset-css";
import "./App.scss";

import { Provider } from "react-redux";
import store from "./assets/redux/configureStore.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
