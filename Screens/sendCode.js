import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const 
     ForgotPassword1 = () => {
  const [code, setCode] = useState(new Array(4).fill('')); // Array to hold the OTP digits
  const navigation = useNavigation();



  // Function to handle OTP input
  const handleOTPInput = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto focus to next input if there's a next input and the current one is filled
    if (text && index < 3) {
      inputs[index + 1].focus();
    }
  };

  // References for the text inputs to focus the next one
  const inputs = [];

  const handleForgotPassword = () => {
  navigation.navigate('ResetPasswordScreen'); // Navigate to ResetPasswordScreen
};

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo-copy-1.png")} style={styles.logo} />
      <Text style={styles.instructionText}>We’ve sent a code to 07xxxxxxx</Text>
      
      <View style={styles.otpContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(text) => handleOTPInput(text, index)}
            ref={(ref) => inputs[index] = ref}
            value={code[index]}
          />
        ))}
      </View>
      
      <TouchableOpacity style={styles.verifyButton} onPress={handleForgotPassword}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
      
      <Text style={styles.resendCodeText}>
        Send Code Again 00:20
      </Text>

      {/* Here should be your numeric keypad component */}
      {/* ... */}

      <Text style={styles.footerText}>@2024 SDGP 114</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F9FAFB',
  },
  logo: {
    marginTop: 60,
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  instructionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  otpBox: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    width: 40,
    textAlign: 'center',
    fontSize: 22,
    paddingVertical: 10,
  },
  verifyButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 30,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  resendCodeText: {
    fontSize: 16,
    color: '#3498db',
    marginBottom: 30,
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    color: '#333',
    fontSize: 12,
  },
  // Additional styles for the numeric keypad if needed
});

export default ForgotPassword1;
