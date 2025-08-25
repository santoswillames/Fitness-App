import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useOnboardingNavigation } from "../../hooks/useTypedNavigation";

export function OnboardingStartScreen() {
  const navigation = useOnboardingNavigation();

  const handleFinish = async () => {
    navigation.navigate("OnboardingStep1");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start your Fitness Journey</Text>
      <Text>
        Start your fitness journey with our app's guidance and support.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>start</Text>
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
