import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,TextInput,SafeAreaView,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignUp from './SignUp';


const Login = () => {
  const navigation = useNavigation(); 


  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const SignUp = () => {
    navigation.navigate('SignUp');
  };


  return (
    <SafeAreaView style={styles.container}>
      {/* Logo and Welcome Text */}
       <Image
        source={require("../assets/ellipse-1405.png")}
        style={styles.backgroundEllipse}
      />
      <Image
        source={require('../assets/logo copy.png')} // Make sure this path is correct
        style={styles.logo}
      />
      <Text style={styles.welcomeBackText}>Hi, Welcome Back! 👋</Text>
      <Text style={styles.subtitleText}>Hello again, you’ve been missed!</Text>
      
      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />


      
      {/* Remember Me and Forgot Password */}
      <View style={styles.optionsRow}>
        <TouchableOpacity style={styles.rememberMeContainer}>
          <Text style={styles.rememberMeText}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      
      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      
      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      
      {/* Footer */}
      <Text style={styles.footerText}>@2024 SDGP 114</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // Replace with your actual background color
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom:25,
  },
  welcomeBackText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
     
  },

 backgroundEllipse: {
    position: "absolute",
    width: "100%",
    height: "40%",
    top:700,
  },

  subtitleText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginVertical: 10,
  },
  optionsRow: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontSize: 16,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#007AFF', // Replace with your actual accent color
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#007AFF', // Replace with your actual button color
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 100,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 190,

  },
  signUpText: {
    fontSize: 16,
  },
  signUpButtonText: {
    fontSize: 16,
    color: '#007AFF', // Replace with your actual accent color
    fontWeight: 'bold',
  },
  footerText: {
    position: 'absolute',
    bottom: 10,
    fontSize: 12,
    color: '#666666',
  },
});

export default Login;
