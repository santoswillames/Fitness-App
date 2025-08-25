import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useOnboardingNavigation } from "../../hooks/useTypedNavigation";

export function OnboardingStep1Screen() {
  const navigation = useOnboardingNavigation();

  const handleFinish = async () => {
    navigation.navigate("OnboardingStep2");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OnBoarding STEP 1</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OnboardingStep1Screen;
