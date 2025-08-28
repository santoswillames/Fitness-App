import React from "react";
import "../global.css"

import { RootNavigator } from "./navigation/RootNavigator";
import { StatusBar } from "react-native";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";

const App = () => {
  return (
    <>
    <GluestackUIProvider>
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />
      <RootNavigator />
    </GluestackUIProvider>
    </>
  );
};

export default App;
