import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons"; // Importez les icônes que vous souhaitez utiliser

// Importation des écrans
import LoginScreen from "../screens/LoginScreen";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";
import VerificationCodeScreen from "../screens/VerificationCodeScreen";
import NewpasswordScreen from "../screens/NewpasswordScreen";
import CongratulationScreen from "../screens/CongratulationScreen";
import DashboardScreen from "../screens/DashboardScreen";
import UsersManagementScreen from "../screens/UsersManagementScreen";
import CompaniesScreen from "../screens/CompaniesScreen";
import ValuesManagementScreen from "../screens/ValuesManagementScreen";
import FolderManagementScreen from "../screens/FolderManagementScreen";
import TokenManagementScreen from "../screens/TokenManagementScreen";
import FilteredBydocoucompScreen from "../screens/FilteredBydocoucompScreen";
import FilteredBycompScreen from "../screens/FilteredBycompScreen";
import CompanyDetailsScreen from "../screens/CompanyDetailsScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import EditPasswordScreen from "../screens/EditPasswordScreen";
import SettingsScreen from "../screens/SettingsScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";

// Importation du composant du drawer personnalisé
import CustomDrawerContent from "../components/CustomDrawerContent";

// Création des navigateurs
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Définir la pile principale
function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="Verificationcode" component={VerificationCodeScreen} />
      <Stack.Screen name="Newpassword" component={NewpasswordScreen} />
      <Stack.Screen name="Congratulation" component={CongratulationScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="UsersManagement" component={UsersManagementScreen} />
      <Stack.Screen name="Companies" component={CompaniesScreen} />
      <Stack.Screen name="ValuesManagement" component={ValuesManagementScreen} />
      <Stack.Screen name="FolderManagement" component={FolderManagementScreen} />
      <Stack.Screen name="TokenManagement" component={TokenManagementScreen} />
      <Stack.Screen name="FilteredBydocoucomp" component={FilteredBydocoucompScreen} />
      <Stack.Screen name="FilteredBycomp" component={FilteredBycompScreen} />
      <Stack.Screen name="CompanyDetails" component={CompanyDetailsScreen} />
      <Stack.Screen name="EditPassword" component={EditPasswordScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
    </Stack.Navigator>
  );
}

// Définir le Drawer principal avec le drawer personnalisé
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Utilisation du Drawer personnalisé
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: "#FAFAFA",
            width: 270,
          },
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={MainStack}
          options={{
            drawerIcon: ({ color, size }) => <Icon name="home-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="UsersManagement"
          component={UsersManagementScreen}
          options={{
            drawerIcon: ({ color, size }) => <Icon name="people-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Companies"
          component={CompaniesScreen}
          options={{
            drawerIcon: ({ color, size }) => <Icon name="business-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="FolderManagement"
          component={FolderManagementScreen}
          options={{
            drawerIcon: ({ color, size }) => <Icon name="folder-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="TokenManagement"
          component={TokenManagementScreen}
          options={{
            drawerIcon: ({ color, size }) => <Icon name="key-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="ValuesManagement"
          component={ValuesManagementScreen}
          options={{
            drawerIcon: ({ color, size }) => <Icon name="bar-chart-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            drawerIcon: ({ color, size }) => <Icon name="person-outline" size={size} color={color} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}