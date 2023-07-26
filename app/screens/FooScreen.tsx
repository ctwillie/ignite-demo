import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, Switch } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { AntDesign } from "@expo/vector-icons"
// import { Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface FooScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Foo">> {}

export const FooScreen: FC<FooScreenProps> = observer(function FooScreen() {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View className="flext-1 items-center justify-center h-screen bg-white">
      {/* Alert */}
      <View className="rounded-md bg-yellow-50 p-4 my-20 mx-4">
        <View className="flex">
          <View className="ml-3">
            <Text className="text-sm font-medium text-yellow-800">
              <AntDesign name="exclamationcircle" size={20} color="orange" />
              {"  "}
              Attention needed
            </Text>
            <View className="mt-2 text-sm text-yellow">
              <Text className="text-yellow-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum
                similique veniam quo totam eius aperiam dolorum.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Badge */}
      <View className="shadow-xl w-40 items-center rounded-md bg-purple-500 px-2 py-1 text-xs font-medium text-white border-solid border-purple">
        <Text>Badge</Text>
      </View>

      <View className="shadow-xl w-40 items-center rounded-md bg-purple-500 px-2 py-1 text-xs font-mediumborder-solid border-purple">
        <Text className="text-white">Badge</Text>
      </View>

      {/* Toggle */}
      <View className="my-8">
        <Switch
          style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          trackColor={{ false: "#e5e7eb", true: "#4f46e5" }}
          thumbColor={"#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  )
})
