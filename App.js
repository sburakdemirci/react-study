import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/header';
import AlbumListFunctionalComponent from './src/components/AlbumListFunctionalComponent';
import AlbumListClassComponent from './src/components/AlbumListClassComponent';


// ./ yazarak şuanki dosya konumundan başlarız.
// import ederken AlbumList.js yazmamıza gerek yok.Dosya adı yeterli. uzantıya gerek yok

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View>
            <Header headerText={'Albumsss'}/>
       
            <AlbumListClassComponent/>
          
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('learn', () => LotsOfGreetings);
