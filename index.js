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
    if (this.state.articleToDisplay) {
        return (
            <View style={styles.panel}>
                <Article urn={this.state.articleToDisplay}/>
            </View>
        )
    } else {
        return (
            <View style={styles.panel}>
                <Landingpage setArticle={this.setArticle}/>
            </View>
        );

    }
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
