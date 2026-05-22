import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import DetailsScreen from "../screens/DetailsScreen"
import ContactScreen from "../screens/ContactScreen"
import GalleryScreen from "../screens/GalleryScreen"
import { NavigationContainer } from "@react-navigation/native"
import { RootStackParamList } from "./types/navigation"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator<RootStackParamList>()  
const Tab = createBottomTabNavigator<RootStackParamList>()  


const AppNavigator = () => {
  return (
    <>
   
{/* <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Contact" component={ContactScreen}/>
    <Stack.Screen name="Details" component={DetailsScreen}/>
      <Stack.Screen name="Gallery" component={GalleryScreen}/>
</Stack.Navigator> */}

<Tab.Navigator>
  <Tab.Screen name="Home" component={HomeScreen}/>
<Tab.Screen name="Contact" component={ContactScreen}/>
<Tab.Screen name="Details" component={DetailsScreen}/>
<Tab.Screen name="Gallery" component={GalleryScreen}/>
</Tab.Navigator>


 </>
  )
}

export default AppNavigator

