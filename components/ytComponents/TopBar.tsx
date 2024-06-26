import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const TopBar = () => {
  return (
    <View
      style={{
        height: 60,
        flexDirection:'row',
        alignItems:'center',
  gap:30,
  justifyContent:'space-between',
  paddingHorizontal:10
      }}
    >
      <View style={{
        flexDirection:'row',
        gap: 6,
        alignItems:'center'
      }}>
        
        <Entypo name="youtube" size={40} color="red" />
        <Text style={{

            fontSize:26,
            fontWeight:'bold'
        }}> Youtube</Text>
      </View>

      <View style={{

        flexDirection:'row',
        gap:10
      }}>
      <MaterialIcons name="cast" size={24} color="black" />
      <Feather name="bell" size={24} color="black" />
      <Feather name="search" size={24} color="black" />
      </View>
    </View>
  );
};

export default TopBar;
