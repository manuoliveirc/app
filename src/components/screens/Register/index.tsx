import { ImageBackground, Text, TextInput, Image, View } from "react-native"
import { styles } from './styles'
import React from "react"


export function Page2() {
    const bg = require('../../assets/background.png')

    
    return (
        <ImageBackground style={styles.container} source={bg} >
            <Text style={styles.text}>Cadastrar uma nova tarefa</Text>
            
            
        </ImageBackground>
    )
}