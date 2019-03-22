import * as React from 'react';
import { StyleSheet, Text, View, VrButton } from 'react-360';
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
            return (<Text>Bin am lade, hoi</Text>)
        }
        const { currentCollectionIndex = 0, data: { collections = [], title = '' } } = this.state;
        const collection = collections[currentCollectionIndex];

        return (
            <View style={styles.landingPage}>
                <Text style={styles.title}>{title}</Text>

                <VrButton onClick={this._previousCollection} style={styles.prevButton}>
                    <Text>Prev</Text>
                </VrButton>

                
                <VrButton onClick={this._nextCollection} style={styles.nextButton}>
                    <Text>Next</Text>
                </VrButton>

                <Collection key={collection.urn} {...collection} /> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    landingPage: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 30,
        marginBottom: 20
    },
    prevButton: {
        position: 'absolute',
        top: 0,
        left: 100,
    },
    nextButton: {
        position: 'absolute',
        top: 0,
        right: 100,
    }
});
