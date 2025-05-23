import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Input from '@/components/ui/Input'
import { Ionicons } from '@expo/vector-icons'
import LargeButton from '@/components/ui/LargeButton'
import { Colors } from '@/constants/Colors'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useForm, Controller } from "react-hook-form"

const transferir = () => {
    const router = useRouter();

    const origen = useLocalSearchParams();

    const {
        control,
        handleSubmit,
        formState: { errors }, watch,
    } = useForm();

    const cuenta = watch('cuenta');
    const monto = watch('monto');


    const onSubmit = (data: any) => {
        data.monto = data.monto.replace('C$', '');
        data.origen = origen.id;
        router.push({ pathname: '/transferencia/confirmar', params: { ...data } })
    }

    const formatoMonto = (monto: string) => {
        const value = monto.replace(/[^0-9]/g, '');
        const number = parseInt(value || '0', 10);
        return `C$${number.toLocaleString()}`;
    }

    return (
        <ScreenWrapper>
            <View className='justify-between flex-1'>
                <View>
                    <View className='justify-center items-center mt-16 mb-5'>
                        <Text className='text-3xl font-semibold'>¿A quién le enviaras dinero hoy?</Text>
                    </View>
                    <Controller
                        control={control}
                        name='cuenta'
                        rules={{
                            minLength: { value: 10, message: "El número de cuenta debe tener 10 dígitos" },
                            pattern: { value: /^[0-9]+$/, message: "Solo números permitidos" },
                            required: 'Ingresa una cuenta de destino',
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input titulo='Ingresa el número de cuenta' placeholder='N. de cuenta' keyboardType='numeric' maxLength={10} value={value} onChangeText={onChange} />
                        )}
                    />
                    {errors?.cuenta &&
                        <View className='px-5'>
                            <Text className='text-red-500 text-sm'>{errors.cuenta.message?.toString()}</Text>
                        </View>
                    }
                    <Controller
                        control={control}
                        name='monto'
                        rules={{
                            required: 'Ingresa un monto',
                            max: { value: Number(origen?.saldo), message: 'No cuentas con fondos suficientes' }
                        }}
                        render={({ field: { onChange, value } }) => {
                            const valor = value?.replace(/[^0-9]/g, '') || '';
                            const monto = valor ? `C$${parseInt(valor, 10).toLocaleString()}` : '';
                            return (
                                <Input titulo='Cuanto dinero le enviaras?' placeholder='C$500' keyboardType='numeric' maxLength={10} value={monto} onChangeText={(text) => {
                                    const numeric = text.replace(/[^0-9]/g, '');
                                    onChange(numeric);
                                }} />
                    )

                        }}
                    />
                    {errors?.monto &&
                        <View className='px-5'>
                            <Text className='text-red-500 text-sm'>{errors.monto.message?.toString()}</Text>
                        </View>
                    }
                </View>

                <LargeButton titulo='Enviar' color={!cuenta || !monto ? 'gray' : Colors.lafiseGreen} textColor={'white'} accion={handleSubmit(onSubmit)} disabled={!cuenta || !monto}/>
            </View>





        </ScreenWrapper>
    )
}

export default transferir

const styles = StyleSheet.create({})