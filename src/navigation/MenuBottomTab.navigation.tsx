import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ScreenLogin, ScreenRegister } from '../screens';
import { Entypo, Feather } from '@expo/vector-icons';

type MenuTabParam = {
    Login: undefined
    Register: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Login">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Login" component={ScreenLogin}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="slideshare" size={24} colors="black" />
                    )
                }}
            />
            <Tab.Screen name="Register" component={ScreenRegister}
                options={{
                    tabBarIcon: () => (
                        <Feather name="sliders" size={24} colors="black" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}