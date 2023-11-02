import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Text} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import { getDetail } from '../redux/actions/dataAction';

const dataItem=()=>{
  const data = useSelector(state => state.getAllReducer.data);
  const result = data.slice(3,7)
  return result
}

const Item = ({item,navigation}) => { 
  const dispatch = useDispatch()
  return(
    <TouchableOpacity onPress={async()=>{await dispatch(getDetail(item.id)); navigation.navigate('DetailPortofolio')}}>
        <View style={styles.item} justifyContent="space-between">
    <Image source={{uri: item.article_photo}} style={styles.image} />
    <View marginHorizontal={10} height="75%">
      <Text style={styles.title}>{item.article_name}</Text>
      <View width="85%">
      <Text>{item.article_detail.split(".")[0]}</Text>
      </View>

    </View>
    <View
      height={100}
      width={100}
      alignItems="center"
      flexDirection="row"></View>
  </View>
    </TouchableOpacity>
)};

const Portofolio = ({navigation}) => {
  return (
    <View height="100%">
      <View flexDirection="row" alignItems="center">
        <Icon
          name="chevron-left"
          size={30}
          color="rgba(0, 0, 0, 1)"
          onPress={() => navigation.goBack()}
        />
        <Text h3 style={[styles.colYellow, styles.marginText]}>
          Portofolio
        </Text>
      </View>
      <FlatList
        data={dataItem()}
        renderItem={({item})=><Item item={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Portofolio;

const styles = StyleSheet.create({
  colYellow: {
    color: 'rgba(0, 0, 0, 1)',
  },
  colGray: {
    color: 'rgba(196, 196, 196, 1)',
  },
  marginText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 5,
  },
  marginTextR: {
    marginLeft: 'auto',
  },
  marginTextB: {
    marginTop: 'auto',
    marginBottom: 15,
    marginLeft: 20,
  },
  containerGold: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(239, 200, 26, 1)',
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  containerGray: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 3,
    borderColor: 'rgba(0, 0, 0, 1)',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
  },
});
