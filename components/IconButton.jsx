import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const IconButton = (color, icon) => {
  return (
    <View style={{borderRadius: 28, padding: 10, backgroundColor: color}}>
      <TouchableOpacity>
        <Ionicons name={icon} size={24} color={color} />
      </TouchableOpacity>
    </View>
  )
}

export default IconButton

const styles = StyleSheet.create({})