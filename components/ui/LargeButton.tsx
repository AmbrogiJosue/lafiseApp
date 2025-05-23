import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const LargeButton = ({ titulo, color, textColor, accion, disabled} : {titulo: string, color: string, textColor: string, accion: () => void, disabled: boolean}) => {
    return (
        <View className='w-full justify-center items-center p-6 border-t border-lightGray'>
            <TouchableOpacity onPress={disabled ? () => {} : accion} className='w-full rounded-[30] justify-center items-center p-5' style={{ backgroundColor: color }}>
                <Text className='text-xl font-bold' style={{color: textColor}}>{titulo}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LargeButton