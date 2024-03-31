import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import QuestionScreen1 from './QuestionScreen1'; // Import your question screens

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Questionnaire = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Header content goes here, like back arrow, title, and dots */}
      </View>
      <View style={styles.content}>
        <Text style={styles.question}>Question 01</Text>
        <Image source={{ uri: 'assets/liquor-1200px-2023-10-181000x600-1@3x.png' }} style={styles.image} />
        {/* Render your buttons here */}
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>answer 01</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>answer 02</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>answer 03</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>answer 04</Text></TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}><Text style={styles.footerButtonText}>Back</Text></TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}><Text style={styles.footerButtonText}>Next</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set the background color for the container
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff', // Replace with your header's background color
    // ...other styles for header
  },
  content: {
    padding: 16,
    backgroundColor: '#yourContentBackgroundColor', // Replace with your content's background color
    // ...other styles for content
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#yourQuestionTextColor', // Replace with your question text color
    // ...other styles for question text
  },
  image: {
    width: '00%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 100,
    borderRadius: 10, // If you want rounded corners
    // ...other styles for image
  },
  button: {
    padding: 16,
    backgroundColor: '#yourButtonBackgroundColor', // Replace with your button background color
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 25, // If you want rounded buttons
    borderWidth: 1, // If you want borders
    borderColor: '#yourButtonBorderColor', // Replace with your button border color
    // ...other styles for buttons
  },
  buttonText: {
    color: '#yourButtonTextColor', // Replace with your button text color
    fontWeight: '500', // Adjust as needed
    // ...other styles for button text
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#yourFooterBackgroundColor', // Replace with your footer's background color
    // ...other styles for footer
  },
  footerButton: {
    backgroundColor: 'blue', // Replace with your footer button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // If you want rounded buttons
    // ...other styles for footer buttons
  },
  footerButtonText: {
    color: '#FFFFFF', // Replace with your footer button text color
    fontWeight: '600', // Adjust as needed
    // ...other styles for footer button text
  },
});

export default Questionnaire;
