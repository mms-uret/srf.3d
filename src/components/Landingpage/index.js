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
            return (
                <View style={styles.loadingWrapper}>
                    <Text style={styles.loading}>Bin am lade, hoi</Text>
                </View>
            );
        }
        const { currentCollectionIndex = 0, data: { collections = [], title = '' } } = this.state;
        const collection = collections[currentCollectionIndex];

        return (
            <View style={styles.landingPage}>
                <Text style={styles.title}>{title}</Text>

                <VrButton onClick={this._previousCollection} style={[styles.button, styles.prevButton]}>
                    <Text style={styles.buttonText}>Prev</Text>
                </VrButton>


                <VrButton onClick={this._nextCollection} style={[styles.button, styles.nextButton]}>
                <Text style={styles.buttonText}>Next</Text>
                </VrButton>

                <Collection setArticle={this.props.setArticle} key={collection.urn} {...collection} />
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
    landingPage: {
        width: '100%',
        height: '100%',
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
        position: 'absolute',
        top: 0,
    },
    prevButton: {
        left: 100,
    },
    nextButton: {
        right: 100,
    },
    buttonText: {
        color: '#22211d',
    }
});
