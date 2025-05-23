import { View, Text, TextInputProps } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Octicons from '@expo/vector-icons/Octicons';

interface InputProps extends TextInputProps {
    titulo?: string
    placeholder?: string
}

const Input: React.FC<InputProps> = ({ titulo, placeholder, value, ...props }) => {
    return (
        <View className='w-full p-5'>
            <Text className='text-lg font-semibold'>{titulo}</Text>
            <View className='border border-lightGray rounded-3xl justify-between flex-row items-center'>
                <TextInput
                    className=' p-5 text-2xl font-semibold'
                    placeholder={placeholder}
                    value={value}
                    {...props} />
                {value && value.toString().length > 0 && (
                    <Octicons name='pencil' size={24} className='px-5' />
                )}
            </View>
        </View>
    )
}

export default Input