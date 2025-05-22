import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { Ionicons } from '@expo/vector-icons'


const transferir = () => {
    return (
        <ScreenWrapper>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>Transferir dinero</Text>
            </View>

        </ScreenWrapper>
    )
}

export default transferir

const styles = StyleSheet.create({})