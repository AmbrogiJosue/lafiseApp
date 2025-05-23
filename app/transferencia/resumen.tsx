import { View, Text } from 'react-native'
import React from 'react'
import LargeButton from '@/components/ui/LargeButton'
import { Colors } from '@/constants/Colors'
import ScreenWrapper from '@/components/ScreenWrapper'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router';

const resumen = () => {
    const router = useRouter();
    return (
        <ScreenWrapper bg='black'>
            <View className='justify-between flex-1'>
                <View className='w-full justify-center items-center gap-8 py-8'>
                    <View className='justify-center items-center p-4 rounded-full'>
                        <View className='justify-center items-center p-6 rounded-full bg-success'>
                            <Ionicons size={42} name='checkmark' color='white' />
                        </View>
                    </View>

                    <View className='gap-2'>
                        <Text className='text-5xl font-semibold text-center'>Envió con exito</Text>
                        <Text className='text-md text-gray text-center'>{new Date().toDateString()}, {new Date().toLocaleTimeString()}</Text>
                    </View>

                    <View className='w-full border-t border-lightGray'>
                        <Text className='text-lg text-center font-semibold py-5'>Resumen de tu envió</Text>
                    </View>

                    <View className='gap-2 pb-3 justify-center items-center'>
                        <Text className='text-lg text-gray font-semibold'>Total enviado</Text>
                        <Text className='text-xl '>C$ 1,000.00</Text>
                    </View>

                    <View className='gap-2 pb-3 justify-center items-center'>
                        <Text className='text-lg text-gray font-semibold'>Al número de cuenta</Text>
                        <Text className='text-xl '>1,000.00</Text>
                    </View>

                    <View className='gap-2 pb-3 justify-center items-center'>
                        <Text className='text-lg text-gray font-semibold'>Cuenta utilizada para el envió</Text>
                        <Text className='text-xl '>1,000.00</Text>
                    </View>

                </View>
                <LargeButton titulo='Volver al inicio' color={Colors.lafiseGreen} textColor={'white'} accion={() => router.replace('/(tabs)')} />
            </View>


        </ScreenWrapper>
    )
}

export default resumen