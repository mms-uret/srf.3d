import * as React from 'react';
import { StyleSheet, Text, View } from 'react-360';
export class Article extends React.Component {
    state = {
        loading: true,
        data: null
    };

    componentDidMount() {
        fetch('http://localhost:8000/article/' + this.props.urn)
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

        return (
            <View style={styles.article}>
                <Text style={styles.title}>{this.state.data.headline}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    article: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 30,
        marginBottom: 20
    }
});
