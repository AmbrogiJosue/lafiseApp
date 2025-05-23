import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({
  color,
  icon,
  iconColor,
  descripcion,
  accion,
}: {
  color: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  descripcion: string;
  accion: () => void;
}) => {
  return (
    <View className='align-items-center justify-center gap-2'>
      <View className='rounded-3xl p-6' style={{ backgroundColor: color }}>
        <TouchableOpacity onPress={accion}>
          <Ionicons name={icon} size={24} color={iconColor} />
        </TouchableOpacity>
      </View>
      <Text className="text-center text-gray ">
        {descripcion}
      </Text>
    </View>
  );
};

export default IconButton