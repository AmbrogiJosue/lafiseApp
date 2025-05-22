import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TransaccionDisplay = (item) => {
    
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10, padding: 10}}>
        <View style={{borderRadius: 999, backgroundColor: '#E6F3F0', justifyContent: 'center', alignItems: 'center', padding: 10}}>
            <Ionicons name='arrow-down' size={24} color={"#018765"}/>
        </View>
        <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.description}</Text>
            <Text style={{fontSize: 14, color: '#888'}}>Banco</Text>
        </View>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#018765'}}>
            {item.amount.currency}{item.amount.value}
        </Text>
    </View>
  )
}

export default TransaccionDisplay

const styles = StyleSheet.create({})