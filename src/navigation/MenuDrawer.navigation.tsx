import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenLogin, ScreenRegister } from '../screens';

type MenuDrawerParam = {
    Login: undefined
    Register: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Login">
export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation
}

export function MenuDrawer(){
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={ScreenLogin} />
            <Drawer.Screen name="Register" component={ScreenRegister} />
        </Drawer.Navigator>
    );
}