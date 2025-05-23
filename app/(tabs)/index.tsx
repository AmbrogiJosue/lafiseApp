import { Image } from 'expo-image';
import { ActivityIndicator, Dimensions, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';
import TransaccionDisplay from '@/components/TransaccionDisplay';
import useFetch from '../services/useFetch';
import { fetchAccounts, fetchTransactions, fetchUserData } from '../services/api';
import { Ionicons } from '@expo/vector-icons';
import { hp } from '@/helper/sizing';
import IconButton from '@/components/ui/IconButton';
import { useRouter } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import { Colors } from '@/constants/Colors';


export default function HomeScreen() {
  const router = useRouter();
  const [hidden, setHidden] = useState(false);
  const {
    data: usuario,
    loading: cargandoUsuario,
    error: errorUsuario,
    refetch: refetchUsuario,
  } = useFetch(() => fetchUserData())

  const {
    data: cuenta,
    loading: cargandoCuenta,
    error: errorCuenta,
    refetch: refetchCuenta,
  } = useFetch(() => fetchAccounts(usuario?.products[0].id))

  const {
    data: transacciones,
    loading: cargandoTransacciones,
    error: errorTransacciones,
    refetch: refetchTransacciones,
  } = useFetch(() => fetchTransactions(usuario?.products[0].id))

  const { width: deviceWidth, height: deviceHeight } = Dimensions.get('screen')

  const hp = (percentage: number) => {
    return (percentage * deviceHeight) / 100;
  }

  const wp = (percentage: number) => {
    return (percentage * deviceWidth) / 100;
  }

  return (
    <ScreenWrapper>
      {cargandoUsuario || cargandoCuenta || cargandoTransacciones ? (<ActivityIndicator size="large" color="#018765" />) : errorUsuario || errorCuenta || errorTransacciones ? (
        <View className='flex-1 justify-center items-center'>
          <Text className='text-lafiseGreen text-lg'>Error al cargar los datos</Text>
          <TouchableOpacity onPress={() => {
            refetchUsuario();
            refetchCuenta();
            refetchTransacciones();
          }} >
            <Ionicons name="refresh" size={24} color="#018765" />
          </TouchableOpacity>

        </View>
      ) : (
        <>
          <ImageBackground source={require('../../assets/images/bg.jpg')} style={styles.backgroundImage} />
          <View className='flex-row justify-between items-start p-5'>
            <View className='flex-row gap-4 items-center'>
              <Image source={require('../../assets/images/LAFISE.png')} style={{ height: hp(4), width: hp(4) }} />
              <Text className='text-white text-2xl'>Hola, {usuario?.full_name.split(' ')[0]}</Text>
            </View>
            <View className='rounded-full overflow-hidden' >
              <Image source={{ uri: usuario?.profile_photo }} style={{ height: hp(4), width: hp(4) }} />
            </View>
          </View>
          <View className='flex-row items-center mt-1 px-1'>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: hp(3), padding: 10 }}> Mis productos</Text>
            <TouchableOpacity onPress={() => setHidden(!hidden)}>
              <Ionicons name={hidden ? 'eye-off' : 'eye'} size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View className='gap-4 mt-2 mx-2 p-8 bg-white rounded-3xl shadow-black elevation-md' style={{ shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84 }}>
            <View className='flex-row justify-between items-center'>
              <View>
                <Text className='text-xl'>
                  Cuenta de ahorro
                </Text>
                <Text className='text-gray text-base'>{hidden ? '**********' : usuario?.products[0].id}</Text>
              </View>
              <TouchableOpacity onPress={() => { router.push({ pathname: '/transferencia/transferir', params: { id: usuario?.products[0].id, saldo: cuenta?.balance} }) }}>
                <Ionicons name="send-outline" size={24} color='#018765' />
              </TouchableOpacity>
            </View>

            <View className='mt-3'>
              <Text className='text-gray text-base'>
                Saldo disponible
              </Text>
              <View className='flex-row items-center gap-2'>
                <Text >
                  {hidden ? '***' : cuenta?.currency}
                </Text>
                <Text className='text-3xl font-bold'>
                  {hidden ? '******' :cuenta?.balance.toLocaleString('es-NI', { minimumFractionDigits: 2 })}
                </Text>
              </View>
            </View>
          </View>

          <View className='gap-4 my-4 mx-2 p-8 bg-white rounded-3xl shadow-black elevation-md' style={{ shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84 }}>
            <Text className='text-2xl font-semibold'>
              Operaciones rápidas
            </Text>


            <View className='flex-row justify-between items-center'>

              <IconButton color={Colors.lafiseGreenAccent} icon='cash' iconColor={Colors.lafiseGreen} descripcion={'Transferir \n dinero'} accion={() => { router.push({ pathname: '/transferencia/transferir', params: { id: usuario?.products[0].id, saldo: cuenta?.balance } }) }} />

              <IconButton color={Colors.yellowAccent} icon='bulb-outline' iconColor={Colors.yellow} descripcion={'Pagar \n servicio'} accion={() => { }} />

              <IconButton color={Colors.blueAccent} icon='phone-portrait-outline' iconColor={Colors.blue} descripcion={'Recargar \n Celular'} accion={() => { }} />

              <IconButton color={Colors.purpleAccent} icon='cash-outline' iconColor={Colors.purple} descripcion={'Retiro \n sin tarjeta'} accion={() => { }} />

            </View>
          </View>

          <FlatList
            data={transacciones?.items}
            renderItem={({ item }) => (
              <TransaccionDisplay
                item={item}
                hidden={hidden}
              />
            )}
            keyExtractor={(item) => item.transaction_number.toString()}
            scrollEnabled={true} />
        </>
      )}


    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '65%',
    zIndex: 0,
  },
});
