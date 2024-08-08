import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigation } from "./login.navigation";
import { MenuStack } from './MenuStack.navigation';
import { MenuTabs } from "./MenuBottomTab.navigation";
import { MenuDrawer } from "./MenuDrawer.navigation"; 

export function Navigation(){
    return (
        <NavigationContainer>
            <LoginNavigation />
        </NavigationContainer>
    );
}