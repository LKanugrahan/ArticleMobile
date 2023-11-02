import {View} from 'react-native';
import React from 'react';
import {Text, Avatar, Button} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {getAll} from '../redux/actions/dataAction';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View height="100%">
      <View
        height="30%"
        backgroundColor="rgba(0, 0, 0, 1)"
        justifyContent="center"
        alignItems="center"
        style={{display: 'flex', flexDirection: 'row'}}>
        <Avatar
          size={100}
          rounded
          source={{
            uri: 'https://res.cloudinary.com/dafjb9vn7/image/upload/v1698891557/Langgeng_awdsxz.jpg',
          }}
        />
        <View style={{marginLeft: 15}}>
          <Text h4 style={{color: 'white', marginBottom: 10}}>
            Langgeng Kanugrahan
          </Text>
          <Button
            size="lg"
            title="PORTOFOLIO"
            containerStyle={{
              width: '95%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            buttonStyle={{
              backgroundColor: 'white',
              borderRadius: 10,
            }}
            titleStyle={{
              color: 'black',
              marginHorizontal: 20,
            }}
            onPress={async () => {
              await dispatch(getAll());
              navigation.navigate('Portofolio');
            }}
          />
        </View>
      </View>
      <View
        width="95%"
        backgroundColor="rgba(0,0,0,0.5)"
        alignSelf="center"
        style={{marginVertical: 50, borderRadius: 25, padding: 10}}>
        <Text style={{textAlign: 'justify', color: 'white'}}>
          Highly motivated and results-driven Physics Education graduate,
          Langgeng Kanugrahan, possesses a strong passion for logical thinking
          and analytical problem-solving. With a demonstrated track record of
          active engagement in campus organizations, Langgeng has acquired
          valuable leadership experience over two years, including one year in
          multiple positions and as a project lead.
        </Text>
        <Text style={{textAlign: 'justify', color: 'white'}}>
          Currently, Langgeng is thriving as a full-stack web & mobile developer
          at the prestigious Pijarcamp bootcamp. Through this transformative
          journey, he has honed his expertise in a diverse range of
          technologies, including Next.js, React.js, React Native, HTML5, CSS,
          Bootstrap 5, Redux and PostgreSQL. His dedication to mastering these
          skills fuels his enthusiasm to tackle exciting web and mobile
          development projects.
        </Text>
        <Text style={{textAlign: 'justify', color: 'white'}}>
          With a relentless drive for excellence and a commitment to continuous
          learning, Langgeng is well-equipped to excel in the dynamic and
          fast-paced world of web and mobile development. As a professional who
          thrives on solving complex problems and delivering innovative
          solutions, Langgeng is eager to make a significant impact in the
          technology industry.
        </Text>
      </View>
    </View>
  );
};

export default Profile;
