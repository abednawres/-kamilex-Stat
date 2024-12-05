import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from "./screens/LoginScreen";
import ForgetPasswordScreen from "./screens/ForgetPasswordScreen";
import VerificationCodeScreen from "./screens/VerificationCodeScreen";
import NewpasswordScreen from "./screens/NewpasswordScreen";
import CongratulationScreen from "./screens/CongratulationScreen";
import DashboardScreen from "./screens/DashboardScreen";
import UsersManagementScreen from "./screens/UsersManagementScreen";
import CompaniesScreen from "./screens/CompaniesScreen";
import ValuesManagementScreen from "./screens/ValuesManagementScreen";
import FolderManagementScreen from "./screens/FolderManagementScreen";
import TokenManagementScreen from "./screens/TokenManagementScreen";
import FilteredBydocoucompScreen from "./screens/FilteredBydocoucompScreen";
import FilteredBycompScreen from "./screens/FilteredBycompScreen";
import CompanyDetailsScreen from "./screens/CompanyDetailsScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen
        name="Verificationcode"
        component={VerificationCodeScreen}
      />
      <Stack.Screen name="Newpassword" component={NewpasswordScreen} />
      <Stack.Screen name="Congratulation" component={CongratulationScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="UsersManagement" component={UsersManagementScreen} />
      <Stack.Screen name="Companies" component={CompaniesScreen} />
      <Stack.Screen
        name="ValuesManagement"
        component={ValuesManagementScreen}
      />
      <Stack.Screen
        name="FolderManagement"
        component={FolderManagementScreen}
      />
      <Stack.Screen name="TokenManagement" component={TokenManagementScreen} />
      <Stack.Screen
        name="FilteredBydocoucomp"
        component={FilteredBydocoucompScreen}
      />
      <Stack.Screen name="FilteredBycomp" component={FilteredBycompScreen} />
      <Stack.Screen name="CompanyDetails" component={CompanyDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: "#FAFAFA",
            width: 240,
          },
        }}
      >
        <Drawer.Screen name="Home" component={MainStack} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen
          name="UsersManagement"
          component={UsersManagementScreen}
        />
        <Drawer.Screen name="Companies" component={CompaniesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
