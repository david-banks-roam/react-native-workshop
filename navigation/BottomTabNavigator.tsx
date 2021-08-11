/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import { ProfileProvider } from '../contexts/ProfileContext';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/Form';
import TabTwoScreen from '../screens/Profile';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <ProfileProvider>
            <BottomTab.Navigator
                initialRouteName="Form"
                tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
            >
                <BottomTab.Screen
                    name="Form"
                    component={TabOneNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon
                                name="paper-plane-outline"
                                color={color}
                            />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="Profile"
                    component={TabTwoNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="person-outline" color={color} />
                        ),
                    }}
                />
            </BottomTab.Navigator>
        </ProfileProvider>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
}) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{ headerTitle: 'Form' }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{ headerTitle: 'Profile' }}
            />
        </TabTwoStack.Navigator>
    );
}
