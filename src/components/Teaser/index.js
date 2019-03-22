import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton} from 'react-360';

export class Teaser extends React.PureComponent {
    render() {
        const { title = '' } = this.props;

        return (
            <View style={styles.teaser}>
                <Image />
                <Text style={styles.title}>{title}</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    teaser: {
        backgroundColor: 'powderblue',
        borderColor: 'black',
        flexBasis: '25%',
        flexGrow: 1,
        flexShrink: 1,
        margin: 10
    }
});
