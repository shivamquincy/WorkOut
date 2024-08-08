import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'nativewind';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function TabBar({state, descriptors, navigation}) {
    const icons ={
        home: (props)=> <AntDesign name='home' size={26} color={secondaryColor} {...props} />,
        profile: (props)=> <AntDesign name='user' size={26} color={secondaryColor} {...props} />,
        settings: (props)=> <Feather  name='settings' size={26} color={secondaryColor} {...props} />,
        workouts: (props)=> <FontAwesome5 name='running' size={26} color={secondaryColor} {...props} />
    }
    const primaryColor = "#2563eb" 
    const secondaryColor= "#222"
  return (
    <View style={styles.tabbar}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name, route.params);
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <TouchableOpacity
         key={route.name}
         style = {styles.tabbarItem}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          >{
            icons[route.name]({
                color: isFocused ? primaryColor: secondaryColor
            })

          }
       
          <Text style={{ color: isFocused ?  primaryColor : secondaryColor }}>
            {label}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
  )
}
const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom:25,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        marginHorizontal: 20,
        paddingVertical:15,
        borderRadius:25,
        borderCurve:'continuous',
        backgroundColor: "#f5f5f5",
        shadowColor: 'black',
        shadowOffset:{width:0, height: 10} ,
        shadowRadius: 10,
        shadowOpacity: 0.1
        

    },
    tabbarItem: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        


    }
})