import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './globals.css';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const router = useRouter();

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="transferencia/transferir" options={{ 
            headerTransparent:true, title:'Transferir Dinero', headerTitleStyle:{fontSize:20},
            headerLeft: () => <Ionicons name="chevron-back" size={24} color="black" onPress={() => router.back()}/>,
           }} />
          <Stack.Screen name="transferencia/confirmar" options={{ 
            headerTransparent:true, title:'Confirma tu envió', headerTitleStyle:{fontSize:20},
            headerLeft: () => <Ionicons name="chevron-back" size={24} color="black" onPress={() => router.back()}/>,
           }} /> 
          <Stack.Screen name="transferencia/resumen" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </>
  );
}
