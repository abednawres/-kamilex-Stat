import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from "./screens/LoginScreen"; 
import ForgetPasswordScreen from "./screens/ForgetPasswordScreen"; 
import VerificationCodeScreen from './screens/VerificationCodeScreen';
import NewpasswordScreen from "./screens/NewpasswordScreen";
import CongratulationScreen from "./screens/CongratulationScreen";
import DashboardScreen from "./screens/DashboardScreen";
import UsersManagementScreen from './screens/UsersManagementScreen';
import CompaniesScreen from './screens/CompaniesScreen';
import ValuesManagementScreen from './screens/ValuesManagementScreen';
import FolderManagementScreen from './screens/FolderManagementScreen';
import TokenManagementScreen from './screens/TokenManagementScreen';
import FilteredBydocoucompScreen from './screens/FilteredBydocoucompScreen';
import FilteredBycompScreen from './screens/FilteredBycompScreen';
import CompanyDetailsScreen from './screens/CompanyDetailsScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import EditPasswordScreen from './screens/EditPasswordScreen';
import SettingsScreen from './screens/SettingsScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';




const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
        <Stack.Screen name="Verificationcode" component={VerificationCodeScreen}/>
        <Stack.Screen name="Newpassword" component={NewpasswordScreen}/>
        <Stack.Screen name="Congratulation" component={CongratulationScreen}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
        <Stack.Screen name="UsersManagement" component={UsersManagementScreen}/>
        <Stack.Screen name="Companies" component={CompaniesScreen}/>
        <Stack.Screen name="ValuesManagement" component={ValuesManagementScreen}/>
        <Stack.Screen name="FolderManagement" component={FolderManagementScreen}/>
        <Stack.Screen name="TokenManagement" component={TokenManagementScreen}/>
        <Stack.Screen name="FilteredBydocoucomp" component={FilteredBydocoucompScreen}/>
        <Stack.Screen name="FilteredBycomp" component={FilteredBycompScreen}/>
        <Stack.Screen name="CompanyDetails" component={ CompanyDetailsScreen} />
        <Stack.Screen name="EditProfile" component={ EditProfileScreen} />
        <Stack.Screen name=" EditPassword" component={EditPasswordScreen } />
        <Stack.Screen name=" Settings" component={SettingsScreen} />
        <Stack.Screen name=" PrivacyPolicy" component={PrivacyPolicyScreen} />


        


      </Stack.Navigator>
    </NavigationContainer>
  );
}