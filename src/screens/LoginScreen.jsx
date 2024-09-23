import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Animated, {FadeInUp, FadeInDown} from 'react-native-reanimated';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-white h-full w-full">
      <StatusBar barStyle="light-content" />
      <Image
        className="absolute h-full w-full "
        source={require('../../assets/image/background.png')}
      />

      {/**Lights = lambalar */}
      <View className=" absolute flex-row justify-around w-full">
        <Animated.Image
          entering={FadeInUp.duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require('../../assets/image/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require('../../assets/image/light.png')}
        />
      </View>

      {/** title and form = başlık ve form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/** title=başlık */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl">
            Login
          </Animated.Text>
        </View>

        {/**form */}
        <View className="flex items-center mx-3 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-1 rounded-2xl w-full">
            <TextInput placeholder="E-mail" placeholderTextColor={'gray'} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(200).springify()}
            className="bg-black/5 p-1 rounded-2xl w-full">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
            className="w-full">
            <TouchableOpacity className="w-full p-1 mb-2 bg-sky-400 rounded-2xl">
              <Text className="text-2xl font-bold text-center text-white">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            className="flex-row justify-center">
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={()=> navigation.push("SignUp")}>
              <Text className="text-sky-600">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
