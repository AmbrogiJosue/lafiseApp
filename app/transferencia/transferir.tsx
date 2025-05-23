import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Input from '@/components/ui/Input'
import { Ionicons } from '@expo/vector-icons'
import LargeButton from '@/components/ui/LargeButton'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router';
import { useForm, Controller } from "react-hook-form"

const transferir = () => {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()
    return (
        <ScreenWrapper>
            <View className='justify-between flex-1'>
                <View>
                    <View className='justify-center items-center mt-16 mb-5'>
                        <Text className='text-3xl font-semibold'>¿A quién le enviaras dinero hoy?</Text>
                    </View>
                    <Input titulo='Ingresa el número de cuenta' placeholder='N. de cuenta' keyboardType='numeric'/>
                    <Input titulo='Cuanto dinero le enviaras?' placeholder='C$ 500' keyboardType='numeric' />
                </View>


                <LargeButton titulo='Enviar' color={Colors.lafiseGreen} textColor={'white'} accion={() => router.push('/transferencia/confirmar')} />
            </View>





        </ScreenWrapper>
    )
}

export default transferir

const styles = StyleSheet.create({})