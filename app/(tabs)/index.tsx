import { Image } from 'expo-image';
import { ActivityIndicator, Dimensions, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';
import TransaccionDisplay from '@/components/TransaccionDisplay';
import useFetch from '../services/useFetch';
import { fetchAccounts, fetchTransactions, fetchUserData } from '../services/api';
import { Ionicons } from '@expo/vector-icons';
import { hp } from '@/helper/sizing';
import IconButton from '@/components/IconButton';
import { useRouter } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';

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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#018765', fontSize: hp(3) }}>Error al cargar los datos</Text>
          <IconButton
            icon="refresh"
            size={24}
            color="#018765"
            onPress={() => {
              refetchUsuario();
              refetchCuenta();
              refetchTransacciones();
            }}
          />
        </View>
      ) : (
        <>
          <ImageBackground source={require('../../assets/images/bg.jpg')} style={styles.backgroundImage} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', padding: 5 }}>
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
              <Image source={require('../../assets/images/LAFISE.png')} style={{ height: hp(5), width: hp(5) }} />
              <Text style={{ color: 'white', fontSize: hp(3) }}>Hola, {usuario?.full_name.split(' ')[0]}</Text>
            </View>
            <View style={{ borderRadius: 999, overflow: 'hidden' }}>
              <Image source={{ uri: usuario?.profile_photo }} style={{ height: 50, width: 50 }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2), paddingHorizontal: wp(2) }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: hp(3), padding: 10 }}> Mis productos</Text>
            <TouchableOpacity onPress={() => setHidden(!hidden)}>
              <Ionicons name={hidden ? 'eye-off' : 'eye'} size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ gap: 20, marginTop: hp(5), marginHorizontal: wp(2), padding: 30, backgroundColor: 'white', borderRadius: 28, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text>
                  Cuenta de ahorros
                </Text>
                <Text style={styles.subtext}>{usuario?.products[0].id}</Text>
              </View>
              <TouchableOpacity onPress={() => { router.push('../transferir') }}>
                <Ionicons name="send-outline" size={24} color='#018765' />
              </TouchableOpacity>
            </View>

            <View style={{ marginVertical: 15 }}>
              <Text style={styles.subtext}>
                Saldo disponible
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Text >
                  {cuenta?.currency}
                </Text>
                <Text style={{ fontSize: hp(3), fontWeight: 'bold' }}>
                  {cuenta?.balance}
                </Text>
              </View>

            </View>


          </View>
          <View style={{ gap: 20, marginTop: hp(3), marginHorizontal: wp(2), padding: 30, backgroundColor: 'white', borderRadius: 28, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
            <Text>
              Operaciones rápidas
            </Text>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
              <View style={{ borderRadius: 28, padding: 10, backgroundColor: "#E6F3F0" }}>
                <TouchableOpacity>
                  <Ionicons name={'cash'} size={24} color="#018765" />
                </TouchableOpacity>
              </View>
              <View style={{ borderRadius: 28, padding: 10, backgroundColor: "#EAE6F3" }}>
                <TouchableOpacity>
                  <Ionicons name={'cash-outline'} size={24} color="#52169E" />
                </TouchableOpacity>
              </View>
              <View style={{ borderRadius: 28, padding: 10, backgroundColor: "#FFF3E9" }}>
                <TouchableOpacity>
                  <Ionicons name={'bulb'} size={24} color="#E8781C" />
                </TouchableOpacity>
              </View>
              <View style={{ borderRadius: 28, padding: 10, backgroundColor: "#E6F7FD" }}>
                <TouchableOpacity>
                  <Ionicons name={'phone-portrait-outline'} size={24} color="#0079A8" />
                </TouchableOpacity>
              </View>

            </View>
          </View>
          <FlatList
            data={transacciones?.items}
            renderItem={({ item }) => (
              <TransaccionDisplay
                {...item}

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
  subtext: {
    fontSize: hp(1.5),
    color: '#888',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    zIndex: 0,
  },
});
