import { View, Text, Platform } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
const ios = Platform.OS == 'ios';
export default function CustomKeyboardView({children}) {
  return (
   <KeyboardAvoidingView
   behaviour={ios ? 'padding' : 'height'}
    style = {{ flex:1}}
   >
    <ScrollView
    style={{flex:1}}
    bounces ={false}
    showVerticalScroll
    >
   {
    children
   }

    </ScrollView>
   </KeyboardAvoidingView>
  )
}