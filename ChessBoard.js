import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChessBoard(){
    return (
        <View style={styles.container}>
            <View sstyle={styles.wripper}>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
            </View>
            <View sstyle={styles.wripper}>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
            </View>
            <View sstyle={styles.wripper}>
               <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
            </View>
            <View sstyle={styles.wripper}>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
            
            </View>
            <View sstyle={styles.wripper}>
                 <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
            </View>
            <View sstyle={styles.wripper}>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
            </View>
            <View sstyle={styles.wripper}>
             <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
            </View>
            <View sstyle={styles.wripper}>
                  <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
                <View style={styles.b2}></View>
                <View style={styles.b1}></View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row', 
        justifyContent: 'center',
        marginTop:    40,
        alignContent: 'content',
        alignItems:'center'
    },
    wripper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
        height: 10,
        weight: 40,
        borderWidth: 3,
        borderColor: 'black'
    },
    b2: {
        borderWidth: 1, 
        backgroundColor: 'white', 
        borderColor: 'black', 
        width: 40, 
        height: 40
    },
    b1: {
        borderWidth: 1, 
        backgroundColor: 'black', 
        borderColor: 'black', 
        width: 40, 
        height: 40
    }
})