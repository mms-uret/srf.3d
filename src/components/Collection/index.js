import * as React from 'react';
import { StyleSheet, Text, View, VrButton } from 'react-360';
import { Teaser } from '../Teaser';

export class Collection extends React.PureComponent {
    render() {
        const { teasers = [], title = '' } = this.props;
        
        return (
            <View style={styles.collection}>
                <Text style={styles.title}>{title}</Text>

                <View style={styles.teaserList}>
                    {teasers.map((teaser) => {
                        return (
                            <Teaser key={teaser.urn} clickHandler={this.props.setArticle} {...teaser}/>
                        );
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    collection: {
        flexDirection: 'column',
        width: '100%'
    },
    title: {
        fontSize: 30,
        marginBottom: 20
    },
    teaserList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
    },
});
