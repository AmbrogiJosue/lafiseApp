import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const TransaccionDisplay = ({item, hidden}:{item: any, hidden:boolean}) => {

  console.log(item);
  

  return (
    <View className='flex-row justify-between items-center my-2 px-4' >
      <View className='flex-row items-center gap-3'>
        <View style={{ borderRadius: 999, backgroundColor: '#E6F3F0', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <Ionicons name='arrow-down' size={24} color={"#018765"} />
        </View>
        <View className='gap-2'>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{hidden ? '***' : item?.description}</Text>
          <Text style={{ fontSize: 14, color: '#888' }}>{hidden ? '***' : 'Banco'}</Text>
        </View>
      </View>
      <Text className='text-base font-semibold text-lafiseGreen'>
        {hidden ? '***' : `${item?.amount.currency}${item?.amount.value.toLocaleString('es-NI', { minimumFractionDigits: 2 })}`}
        
      </Text>
    </View>
  )
}

export default TransaccionDisplay

const styles = StyleSheet.create({})