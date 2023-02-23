import React from "react";
import "reset-css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import "./App.scss";
import store from "./redux/configureStore.js";
import { HomeScreen } from "./screens/HomeScreen.jsx";

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
