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

        const { headline, paragraphs = [] } = this.state.data;

        return (
            <View style={styles.article}>
                <Text style={styles.title}>{headline}</Text>
                {paragraphs.map((paragraph) => {
                    return (
                        <Text style={styles.paragraph}>{paragraph}</Text>
                    );
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    article: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F4',
        padding: 30
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        color: '#22211d',
    },
    paragraph: {
        fontSize: 18,
        color: '#22211d',
    }
});
