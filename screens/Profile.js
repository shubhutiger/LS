import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar, Modal, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Profile extends Component {

  state = {
    text: '',
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <Card style={styles.curve}>
            <View style={{ marginStart: 15, marginTop: 10 }}>
              <TouchableOpacity onPress={()=> {this.props.navigation.goBack()}}>
                <Icon name="arrow-circle-left" size={40} color="#fff"/>
              </TouchableOpacity>
            </View>
          <View style={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', marginTop: '0%' }}> 

                <Text style={styles.profileStyle}> Profile </Text>

                <View style={{ marginStart: '30%' }}>
                  <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                  >

                    <TouchableOpacity
                     onPress={() => {
                      this.setModalVisible(!modalVisible);
                      }}
                      style={{ borderColor: '#000', borderWidth: 2,width: wp('10%'),marginStart: '5%', marginTop: '5%'  }}>
                      <Text style={{ color: '#000' }} > close </Text> 
                    </TouchableOpacity>

                  </Modal>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(true);
                    }}
                    style={{ borderColor: '#fff', borderWidth: 2 }}>
                    <Text style={{ color: '#fff' }} > Edit </Text> 
                  </TouchableOpacity>
                </View> 
                          
            </View>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
              }}
              style={styles.imageStyle}
            />
          </View>
          <Text style={styles.paragraph}>
            {'shubham ambade'}
          </Text>
          <Text style={styles.paragraph}>
            {'shubham@gmail.com'}
          </Text>

          <View style={styles.infoStyle}>

              <Text>
                { 'male | 24 | silvassa | DNH |' }
              </Text>

          </View>

          <View style={{ flexDirection: 'row' }}>
            <View 
              style={styles.trophyStyle}>
                <Icon 
                  style={{ marginTop: '18%' }}
                  name="trophy" size={110} color="#E5BE0E"
                />
                <Icon 
                  style={{ marginVertical: '-70%' }}
                  name="star" size={40} color="#fff"
                />

               <View style={{ alignItems:'center', marginTop: '120%' }} >
                <Text style={{ fontSize: 20 }}>
                    { '12' }
                  </Text>

                  <Text style={{ fontWeight: 'bold' }}>
                    {'Challenges Won'}
                  </Text>
               </View>

            </View>

            <View 
              style={styles.trophyStyle2}>
                <Icon 
                  style={{ marginTop: '28%' }}
                  name="trophy" size={80} color="#E5BE0E"
                />
                <Icon 
                  style={{ marginVertical: '-55%' }}
                  name="star" size={20} color="#fff"
                />

                  <View style={{ alignItems:'center', marginTop: '105%' }} >
                      <Text style={{ fontSize: 20 }}>
                          { '2' }
                        </Text>

                        <Text style={{ fontWeight: 'bold' }}>
                          {'Challenges Lost'}
                        </Text>
                  </View>
            </View>

          </View>
            
        </Card>

               <View style={{ marginTop: 75, width: '25%',marginStart: '72%', }}>
                <TouchableOpacity style={{ borderColor: '#010066', borderWidth: 2, borderRadius: 10 }}>
                  <Text style={{ color: '#010066'}} > Public Profile </Text> 
                </TouchableOpacity>
                </View> 

                <View 
                style={{ marginStart: '1%',
                  width: wp('98%'), 
                  height: hp('0.5%'), 
                  backgroundColor: '#5B7CB0',
                  marginTop: '6%', borderRadius: 20,
                  // shadowOffset: { width: 19, height: 20 },
                  // shadowOpacity: 5.0,
                  // shadowRadius: 2,
                  // borderColor: 'red',
                  // shadowColor: '#000',
                  }} />

                <Card style={{ backgroundColor: '#ecf0f1', height: hp('50%') }}>
                    <View>
                        <View style={{ flexDirection:'row', marginTop: '3%' }}>
                          <Icon 
                            style={{ marginStart: '5%' }}
                            name="envelope" size={25} color="#E5BE0E"
                          />
                            <Text style={{ marginStart: '30%', fontSize: 16 }} >
                              { 'myprofile@gmail.com ' }
                            </Text>
                        </View>

                        <View style={{ flexDirection:'row', marginTop: '5%' }}>
                          <Icon 
                            style={{ marginStart: '5%' }}
                            name="id-badge" size={25} color="#E5BE0E"
                          >
                            <Text style={{ fontSize: 16, color: '#000' }}> TLd License </Text>
                          </Icon>
                            <Text style={{ marginStart: '10%', fontSize: 16 }} >
                              { '1234567890 ' }
                            </Text>
                        </View>
                        <View style={{ flexDirection:'row', marginTop: '5%' }}>
                          <Icon 
                            style={{ marginStart: '5%' }}
                            name="birthday-cake" size={25} color="#E5BE0E"
                          >
                            <Text style={{ fontSize: 16, color: '#000' }}> DOB </Text>
                          </Icon>
                            <Text style={{ marginStart: '20%', fontSize: 16 }} >
                              { '06-04-1996 ' }
                            </Text>
                        </View>
                        <View style={{ flexDirection:'row', marginTop: '5%' }}>
                        <Icon 
                            style={{ marginStart: '5%' }}
                            name="id-badge" size={25} color="#E5BE0E"
                          >
                            <Text style={{ fontSize: 16, color: '#000' }}> DMV License </Text>
                          </Icon>
                            <Text style={{ marginStart: '10%', fontSize: 16 }} >
                              { ' 9876543210 ' }
                            </Text>
                        </View>

                        <View style={{ flexDirection:'row', marginTop: '5%' }}>
                        <Icon 
                            style={{ marginStart: '5%' }}
                            name="facebook" size={25} color="#E5BE0E"
                          >
                            <Text style={{ fontSize: 16, color: '#000' }}> Social security </Text>
                          </Icon>
                            <Text style={{ marginStart: '10%', fontSize: 16 }} >
                              { '5627657387 ' }
                            </Text>
                        </View>

                        <View style={{ flexDirection:'row', marginTop: '5%', width: wp('90%') }}>
                        <Icon 
                            style={{ marginStart: '5%' }}
                            name="map-marker" size={25} color="#E5BE0E"
                          >
                            <Text style={{ fontSize: 16, color: '#000' }}> Address </Text>
                          </Icon>
                            <Text style={{ marginStart: '20%', fontSize: 16, flex: 1 }} >
                              { 'amli fawara, silvassa, D&NH, juiji ' }
                            </Text>
                        </View>

                    </View>

                </Card>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // paddingTop: 30,
    backgroundColor: '#ecf0f1',
    // padding: 8,
  },
  profileStyle:{
    color: '#fff', 
    marginStart: '40%', 
    fontWeight: 'bold',
    fontSize: 16
  },
  imageStyle:{
    marginBottom: 10,
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  infoStyle:{
    backgroundColor: '#fff', 
    width: wp('53%'), 
    height: hp('5%'),
    right:'25%',
    left: '25%',
    marginTop: '1%',
    borderRadius: 30,
    justifyContent:'center',
    alignItems: 'center',
    shadowOffset: { width: 19, height: 20 },
    shadowOpacity: 8.0,
    shadowRadius: 2,
    borderColor: 'red',
    shadowColor: '#000',
    elevation: 20,
  },
  trophyStyle:{
    backgroundColor:'#fff',
    borderColor:'#E5DA6E',
    borderWidth: 5,
    borderRadius: 100,
    width: wp('35%'),
    height: hp('18%'),
    alignItems: 'center',
    marginStart: 10,
  },
  trophyStyle2:{
    backgroundColor:'#fff',
    borderColor:'#E5655E',
    borderWidth: 5,
    borderRadius: 100,
    width: wp('30%'),
    height: hp('15%'),
    alignItems: 'center', 
    marginStart: 20,
    marginTop: 25,
  },
  paragraph: {
    color: '#fff',
    margin: '1%',
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: 'center',
    // marginBottom: 20,
  },
  curve: {
    backgroundColor:'#009387',
    width: wp('100%'),
    height: hp('53%'),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 170,
    margin: 0,
    marginLeft: 0,
    shadowOffset: { width: 19, height: 20 },
    shadowOpacity: 10.0,
    shadowRadius: 2,
    shadowColor: '#000',
    elevation: 30,
  }
});

export default Profile;