import React from "react";
import { Text, StyleSheet } from 'react-native';

export default function Tempo(props){

    return(
        <>
                <Text style={styles.texto}>Min:   {props.clima}</Text>
                <Text style={styles.texto}>Max:   </Text>
                <Text style={styles.texto}>Descrição:   </Text>
        </>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        marginTop:10
    },
})