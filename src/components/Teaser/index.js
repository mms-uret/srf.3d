import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-360';

export class Teaser extends React.PureComponent {
    render() {
        const { title = '' } = this.props;

        // with URLS: <Image source={{uri: 'https://...'}} ... />

        return (
            <View style={styles.teaser}>
                <Image source={require('./placeholder.png')} style={styles.responsiveImage} />
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
        flexBasis: '20%',
        flexGrow: 1,
        flexShrink: 0,
        margin: 10
    },
    responsiveImage: {
        width: '100%',
        // Without height undefined it won't work
        height: undefined,
        aspectRatio: 16 / 9,
    }
});
