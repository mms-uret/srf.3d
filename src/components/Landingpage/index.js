import * as React from 'react';
import { StyleSheet, Text, View, VrButton, Image } from 'react-360';
import { Collection } from '../Collection';
export class Landingpage extends React.Component {
    state = {
        currentCollectionIndex: 0,
        loading: true,
        data: null
    };
    
    componentDidMount() {
        fetch('http://localhost:8000/landingpage')
        .then(response => response.json())
        .then(response => {
            this.setState({
                loading: false,
                data: response
            });
        })
        .catch(function() {
            console.log('Could not get API information');
        });
    }

    _previousCollection = () => {
        const nextIndex =  Math.max(this.state.currentCollectionIndex - 1, 0);

        this.setState({
            currentCollectionIndex: nextIndex
        });
    };

    _nextCollection = () => {
        const nextIndex =  Math.min(this.state.currentCollectionIndex + 1, this.state.data.collections.length - 1);

        this.setState({
            currentCollectionIndex: nextIndex
        });
    };

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loadingWrapper}>
                    <Text style={styles.loading}>Bin am lade, hoi</Text>
                </View>
            );
        }
        const { currentCollectionIndex = 0, data: { collections = [], title = '' } } = this.state;
        const collection = collections[currentCollectionIndex];

        return (
            <View style={styles.landingPageWrapper}>
                <VrButton onClick={this._previousCollection} style={styles.button}>
                    <Text style={styles.buttonText}>&lt;</Text>
                </VrButton>

                <View style={styles.landingPage}>
                    <Text style={styles.title}>{title}</Text>
                    <Collection setArticle={this.props.setArticle} key={collection.urn} {...collection} />
                </View>

                <VrButton onClick={this._nextCollection} style={styles.button}>
                    <Text style={styles.buttonText}>&gt;</Text>
                </VrButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loadingWrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loading: {
        fontSize: 40
    },
    landingPageWrapper: {
        flexDirection: 'row',
        alignItems: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    landingPage: {
        height: '100%',
        flex: 1,
        backgroundColor: '#F5F5F4'
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
        color: '#22211d',
        width: '100%',
    },
    button: {
        backgroundColor: 'white',
        margin: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8
    },
    buttonText: {
        color: '#22211d',
        fontSize: 30,
    }
});
