import * as React from 'react';
import {StyleSheet, Text, View} from 'react-360';
import { Collection } from '../Collection';
export class Landingpage extends React.Component {
    state = {
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
    
    render() {
        if (this.state.loading) {
            return (<Text>Bin am lade, hoi</Text>)
        }
        const { collections = [], title = 'Loading' } = this.state.data;

        return (
            <View style={styles.landingPage}>
                <Text style={styles.title}>{title}</Text>
                {collections.map((collection) => {
                    return (
                        <Collection key={collection.urn} {...collection} />
                    );
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    landingPage: {
        width: '100%'
    },
    title: {
        fontSize: 30,
        marginBottom: 20
    },
});
