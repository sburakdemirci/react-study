import React, {Component} from 'react';
//buradaki fark hem react'ı hem de component'i import etmemiz
import {View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumListClassComponent extends Component {

    state = { albums: [] }; //bunu bir kez için yaptık. ilk yükleme için kullanılıyor. boş data dönmesin diye.
    //lifecycle methodlardan biri componentWillMount.this method will be automaticly be executed
   // willmount metodu ile birazdan bu component ekrana basılacak anlamına geliyor.
    componentWillMount(){

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
   // .then(response => console.log(response));
        //burada olay ilk başta render edilince içinde data olmayan componentler için boş bir state tanımlamak
        // daha sonra set state ile data gelince componentin içini otomatik olarak update etmek.
    }

    renderAlbums(){
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album}/>
        //key must be unique, 
        
        // album={album}/> değişkenin ismi önemli değil resimler={album} 'de olabilirdi.
        
        );
        // key kullanarak gelen listenin hangi elemanını kullanacağımızı belirliyoruz. ders 38 grider
// map is an array helper function      
    }

    render(){
        console.log(this.state);
    return (
    <View>
        {this.renderAlbums()}
    </View>

    );
    }
}
export default AlbumListClassComponent;

//burada functional component kullanıldı yani static değerleri göstermek için
// classlar bitişinde fonksiyonlar gibi ; istemez. } ile kapatabilirsin.