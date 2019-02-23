// import libraries for making a component 
import React from 'react';
import { Text, View } from 'react-native';
//make a component 
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
return(
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>   
    </View>
);
//props ile properties geçirilir. burada mesela headerin içindeki yazı için parametre
// aynı zamanda const header bizim bir fonksiyonumuz
// props.headertext herhangi birşey olabilir. props.burak da diyebilirsin. parametre adıdır sadece.

};
const styles =  {
    //const diyerek bir jsx oluşturuyorsun. buradaki style için ve style tanımlamaları için camelCase kullan.

    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2
    },
textStyle: {

    fontSize: 20
}
};
//make the component available to other parts of the app
export default Header;

//justify content dikey olarak konumlandırmak için kullanılır genelde. 
//alignItems ile horizantal olarak yani yatayda konumlandırırız.