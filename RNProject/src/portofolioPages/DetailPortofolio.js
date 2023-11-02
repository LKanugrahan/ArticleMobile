import {StyleSheet, View, FlatList, ImageBackground, Image} from 'react-native';
import React from 'react';
import {Text, Avatar, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';


const DetailPortofolio = ({navigation}) => {
  const data = useSelector(state => state.getDetailReducer.data);

  return (
    <View>
      <Icon
        name="chevron-left"
        size={40}
        color="black"
        style={{marginBottom: 'auto', marginTop: 10}}
        onPress={() => {
          if (data.length < 1) {
          }
          navigation.goBack();
        }}
      />
      <Image source={{uri: data[0].article_photo}} style={styles.image}/>

      <Text h2 style={{color: 'black', margin: 10}}>
        {data[0].article_name}
      </Text>

      <View
        height="50%"
        backgroundColor="rgba(255,255,255, 0.5)"
        style={{borderRadius: 25}}>
        <Text h4 style={{margin: 20}}>
          Description
        </Text>
        <Text style={{marginHorizontal: 20}}>
          {data[0].article_detail}
        </Text>
      </View>
    </View>

  );
};

export default DetailPortofolio;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    alignSelf:'center'
  },
});
