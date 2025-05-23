import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import LargeButton from '@/components/ui/LargeButton'
import { useRouter } from 'expo-router';


const confirmar = () => {
    const router = useRouter();

    return (
        <ScreenWrapper>
            <View className='justify-between flex-1'>
                <View className='w-full justify-around items-center pt-24'>
                    <View className='justify-center items-center p-10 rounded-full bg-blueAccent'>
                        <Ionicons size={42} name='phone-portrait-outline' color={Colors.blue} />
                    </View>
                    <View className='py-10'>
                        <Text className='text-lg text-center'>Total a enviar</Text>
                        <Text className='text-5xl font-semibold text-center'>C$ 1000</Text>
                    </View>

                    <View className='w-full p-5 '>
                        <View className='pb-5 border-b border-lightGray'>
                            <Text className='text-lg font-semibold'>Al número de cuenta</Text>
                            <Text className='text-lg text-gray'>123456789</Text>
                        </View>
                    </View>

                    <View className='w-full p-5 '>
                        <View className='pb-5 border-b border-lightGray'>
                            <Text className='text-lg font-semibold'>Cuenta para usar en el envió</Text>
                            <Text className='text-lg text-gray'>123456789</Text>
                        </View>
                    </View>
                </View>
                <LargeButton titulo='Confirmar el envió' color={Colors.lafiseGreen} textColor={'white'} accion={() => router.push('/transferencia/resumen')} />
            </View>


        </ScreenWrapper>
    )
}

export default confirmar