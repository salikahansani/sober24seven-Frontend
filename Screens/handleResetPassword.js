import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ResetPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    // Insert your password reset logic here
    alert('Password reset successfully!');
  };

  return (
    <View style={styles.container}>
       <View style={styles.logoContainer}>
        {/* Ensure the following image paths are correct */}
        <Image
          source={require("../assets/ellipse-1405.png")} // Replace with your actual path
          style={styles.backgroundEllipse}
        />
        <Image
          source={require('../assets/logo copy.png')} // Replace with your actual path
          style={styles.logo}
        />
      </View>
    
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>Please type something you'll remember.</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset password</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>©2024 SDGP 114</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    // Style for your logo container
    
    
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    position: 'absolute',
    bottom: 10,
    fontSize: 12,
  },
  backgroundEllipse: {
    position: "absolute",
    width: "50%",
    height: "0%",
    top:550,
  },
  
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom:25,
  },

  
});

export default ResetPasswordScreen;
