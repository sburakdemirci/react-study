import React from 'react';
import {View , Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
//react native ' her zaman import etmemize gerek yok.

const AlbumDetail = (props) => {

    return(

<Card>
    <CardSection>
<Text>{props.album.title}</Text>
</CardSection>

</Card>

    );


};

export default AlbumDetail;