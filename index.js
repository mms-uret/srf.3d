import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-360';
import { Landingpage } from './src/components/Landingpage';
import { Article } from './src/components/Article';

export default class Hello360 extends React.Component {
    state = {
        articleToDisplay: null
    };

    setArticle = (articleId) =>  {
        console.log(articleId);
        this.setState({
            articleToDisplay: articleId
        })
    };

    render() {
        return (
            <View style={styles.panelContainer}>

                <View style={styles.panel}>
                    <Landingpage setArticle={this.setArticle}/>
                </View>

                { this.state.articleToDisplay && (
                    <View style={styles.panel}>
                        <Article urn={this.state.articleToDisplay}/>
                    </View>
                )}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    panelContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    panel: {
        width: 1000,
        height: 600,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});

AppRegistry.registerComponent('Hello360', () => Hello360);
