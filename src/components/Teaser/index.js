import * as React from 'react';
import { Image, StyleSheet, Text, View, VrButton } from 'react-360';

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
        const { title, kicker, urn, image, clickHandler = () => {} } = this.props;

        let imageSource;

        if (image && image.variations && image.variations['320ws']) {
            imageSource = {uri: image.variations['320ws']};
        } else {
            imageSource = require('./placeholder.png');
        }

        return (
            <VrButton
                style={this.state.hover ? [styles.teaser, styles.teaserHover] : styles.teaser}
                onEnter={this._startHover}
                onExit={this._endHover}
                onClick={() => clickHandler(urn)}>

                <Image source={imageSource} style={styles.responsiveImage} />
                <View style={styles.teaserContent}>
                    <Text style={styles.kicker}>{kicker}</Text>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </VrButton>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#22211d'
    },
    kicker: {
        fontSize: 18,
        color: '#c91024',
    },
    teaser: {
        backgroundColor: '#fefefd',
        borderRadius: 10,
        flexBasis: '20%',
        flexGrow: 1,
        flexShrink: 0,
        margin: 10,
    },
    teaserContent: {
        padding: 10
    },
    teaserHover: {
        shadowColor: 'black',
        shadowRadius: 10
    },
    responsiveImage: {
        width: '100%',
        // Without height undefined it won't work
        height: undefined,
        aspectRatio: 16 / 9,
    }
});
