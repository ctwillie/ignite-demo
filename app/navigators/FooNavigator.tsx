import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FooScreen } from "app/screens"

export type FooNavigatorParamList = {
  Demo: undefined
}

const Stack = createNativeStackNavigator<FooNavigatorParamList>()
export const FooNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Demo" component={FooScreen} />
    </Stack.Navigator>
  )
}
