import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation(); // Get navigation object using useNavigation()

  const handleSendCode = () => {
    navigation.navigate('ForgotPassword1');
  };
  return (
    <View style={styles.container}>
    <Image
        source={require("../assets/ellipse-1405.png")}
        style={styles.backgroundEllipse}
      />
      <Text style={styles.title}>Forgot password</Text>
      <Text style={styles.subtitle}>Enter your Email and send the code.</Text>
      
      <View style={styles.inputContainer}>
       <Text style={styles.inputLabel}>Email Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
        <Text style={styles.buttonText}>Send Code</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>@2024 SDGP 114</Text>
      
      {/* Footer Image */}
      {/* <Image
        style={styles.footerImage}
        source={require("../assets/your-footer-image.png")}
        resizeMode="cover"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // Alice blue color
  },
   backgroundEllipse: {
    position: "absolute",
    width: "100%",
    height: "40%",
    top:700,
    marginTop:5,  

  },
    inputLabel: {
    alignSelf: 'flex-start',
    color: '#A9A9A9', // Dark gray color
    fontSize: 16,
    marginBottom: 5,
    
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#A9A9A9', // Dark gray color
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#C6C6C6', // Light gray border
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#46A5FC', // Blue color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF', // White color
    fontWeight: '600',
  },
  footerText: {
    fontSize: 14,
    color: '#A9A9A9', // Dark gray color
    position: 'absolute',
    bottom: 10,
  },
  footerImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 182, // Set height according to your image aspect ratio
  },
});

export default ForgotPassword;
