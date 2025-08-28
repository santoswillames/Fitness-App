import React from "react";
import "./global.css"

import { RootNavigator } from "./src/navigation/RootNavigator";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />
      <RootNavigator />
    </>
  );
};

export default App;
