import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer";
import { colors } from "../styles/colors";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TabNavigation } from "./tab.navigation";
import { ScreenCamera, ScreenImagens, ScreenQrCode } from "../screens";
type DrawerParamList = {
    Tab: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.secondary},
            headerTintColor: colors.white,
            drawerStyle: {
                backgroundColor: colors.secondary,
            },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen name='Tab' component={TabNavigation}
                options={{
                    drawerLabel: 'Perfil',
                    headerTitle: 'Perfil',
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='Camera' component={ScreenCamera}
                options={{
                    drawerIcon: () => (
                        <Ionicons name="camera" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='Imagem' component={ScreenImagens}
                options={{
                    drawerIcon: () => (
                        <FontAwesome name="picture-o" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='QrCode' component={ScreenQrCode}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="qrcode-scan" size={24} color={colors.white} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}