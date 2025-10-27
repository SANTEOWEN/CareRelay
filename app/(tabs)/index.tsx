import { CircleSmall } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 flex-col">
      <View className="flex-1 flex-col justify-start items-center p-5 gap-5">
        <View className="flex-col justify-center items-center p-4 border rounded-3xl w-full h-auto gap-3">
          <Text className="text-3xl font-medium">08:41 AM</Text>
          <View className="flex-row items-center justify-center gap-2">
            <CircleSmall size={15} color={"green"} />
            <Text className="font-bo">Shift Active</Text>
          </View>
          <View>
            <Text className="text-gray-500">Shift Duraction: 00h 00m</Text>
          </View>
        </View>

        <View className="flex-row justify-center items-center p-4 h-auto gap-4">
          <TouchableOpacity className="bg-green-500 w-auto rounded-xl h-auto p-4 items-center">
            <Text>TEST</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-green-500 w-auto rounded-xl h-auto p-4 items-center">
            <Text>TEST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
