import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-360';

export class Teaser extends React.PureComponent {
    state = {
        hover: false
    };

    _startHover = () => {
        this.setState({
            hover: true
        });
    };

    _endHover = () => {
        this.setState({
            hover: false
        });
    };

    render() {
        const { title = '', image } = this.props;

        let imageSource;

        if (image && image.variations && image.variations['320ws']) {
            imageSource = {uri: image.variations['320ws']};
        } else {
            imageSource = require('./placeholder.png');
        }

        return (
            <View style={this.state.hover ? styles.teaserHover : styles.teaser} onEnter={this._startHover} onExit={this._endHover}>
                <Image source={imageSource} style={styles.responsiveImage} />
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
    teaserHover: {
        backgroundColor: 'red',
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
