import React from "react";
import "../global.css"

import { RootNavigator } from "./navigation/RootNavigator";
import { StatusBar } from "react-native";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#262135' }}>
      <GluestackUIProvider>
        <StatusBar barStyle="default" backgroundColor="transparent" translucent />
        <RootNavigator />
      </GluestackUIProvider>
    </SafeAreaView>
  );
};

export default App;
