import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { ScreenLogin, ScreenRegister } from '../screens';

type MenuStackParam = {
    Login: undefined 
    Register: undefined
}
type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Login">
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack(){
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true
        }}>
            <Stack.Screen name="Login" component={ScreenLogin} />
            <Stack.Screen name="Register" component={ScreenRegister} />
        </Stack.Navigator>
    );
}