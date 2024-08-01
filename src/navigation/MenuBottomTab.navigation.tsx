import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ScreenLogin, ScreenRegister } from '../screens';
import { Entypo, Feather } from '@expo/vector-icons';

type MenuTabParam = {
    Login: undefined
    Register: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Login">