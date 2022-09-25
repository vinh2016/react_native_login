import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment/moment';
import { URL_API_GET_USERS, URL_AVATAR } from '../../constants/UserConstants';

const UserInfoScreen = () => {
  const navigation = useNavigation();
  const [info, setInfo] = useState({
    createDate: '',
    avatar: URL_AVATAR,
    _id: '',
    username: '',
    role: '',
    status: '',
  });

  useEffect(() => {
    // get user id
    AsyncStorage.getItem('Id').then(response => {
      axios.get(`${URL_API_GET_USERS}/${response}`)
        .then(responseAPI => {
          const res = responseAPI.data;
          if (res.success == true) {
            // Set an image to avatar
            res.data.user.avatar = URL_AVATAR;

            setInfo(res.data.user);
          }
        }
        ).catch(error => {
          console.log(`Request API fail: ${error}`);
        });
    }).catch(error => {
      console.log('Get user id', error);
    })

  }, []);

  const onLogout = () => {
    // clear cache
    AsyncStorage.clear();
    // redirect to Login Screen
    navigation.replace('Login');
  }

  return (
    <ImageBackground
      blurRadius={2}
      style={{
        flex: 1,
      }}
      source={{
        uri: info.avatar,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(46, 134, 193, 0.2)',
        }}>
        <View
          style={{
            flex: 1,
          }}>

        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View
            style={{
              position: 'absolute',
              top: -50,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderWidth: 5,
                borderColor: 'rgba(46, 134, 193, 0.2)',
              }}
              source={{
                uri: info.avatar,
              }} />
          </View>
          <View
            style={{
              marginTop: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#2E86C1',
                fontSize: 20,
              }}>{info.username}</Text>
            <Text
              style={{
                fontSize: 10,
              }}>{info.role}</Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 10,
              padding: 10,
            }}>
            {/* button area */}
            <View>
              <View
                style={{
                  backgroundColor: '#2E86C1',
                  padding: 10,
                }}>
                <Text
                  style={{
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                  }}>Options</Text>
              </View>

              {/* change password button */}
              <View
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#2E86C1',
                  flexDirection: 'row',
                }}>
                <Icon name='lock' size={20} color='black' style={{ width: 30 }} />
                <Text
                  style={{
                    color: 'black',
                    marginLeft: 20,
                    flex: 1,
                  }}>Change password</Text>
                <Icon name='chevron-right' size={20} color='#2E86C1' />
              </View>

              {/* logout button */}
              <TouchableOpacity
                onPress={onLogout}
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#2E86C1',
                  flexDirection: 'row',
                }}>
                <Icon name='sign-out' size={20} color='black' style={{ width: 30 }} />
                <Text
                  style={{
                    color: 'black',
                    marginLeft: 20,
                    flex: 1,
                  }}>Logout</Text>
                <Icon name='chevron-right' size={20} color='#2E86C1' />
              </TouchableOpacity>
            </View>

            {/* info area */}
            <View
              style={{
                borderRadius: 10,
                flex: 1,
              }}>
              <View
                style={{
                  backgroundColor: '#2E86C1',
                  padding: 10,
                }}>
                <Text
                  style={{
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                  }}>User Information</Text>
              </View>

              {/* user name */}
              <View
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#2E86C1',
                  flexDirection: 'row',
                }}>
                <Icon name='user' size={20} color='black' style={{ width: 30 }} />
                <Text
                  style={{
                    color: 'black',
                    marginLeft: 20,
                  }}>{info.username}</Text>
              </View>

              {/* user role */}
              <View
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#2E86C1',
                  flexDirection: 'row',
                }}>
                <Icon name='black-tie' size={20} color='black' style={{ width: 30 }} />
                <Text
                  style={{
                    color: 'black',
                    marginLeft: 20,
                  }}>{info.role}</Text>
              </View>

              {/* user id */}
              <View
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#2E86C1',
                  flexDirection: 'row',
                }}>
                <Icon name='id-card' size={20} color='black' style={{ width: 30 }} />
                <Text
                  style={{
                    color: 'black',
                    marginLeft: 20,
                  }}>{info._id}</Text>
              </View>

              {/* user create date */}
              <View
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#2E86C1',
                  flexDirection: 'row',
                }}>
                <Icon name='calendar' size={20} color='black' style={{ width: 30 }} />
                <Text
                  style={{
                    color: 'black',
                    marginLeft: 20,
                  }}>{moment(info.createDate).format('HH:mm:ss DD/MM/YYYY')}</Text>
              </View>

              {/* user status */}
              <View
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#2E86C1',
                  flexDirection: 'row',
                }}>
                <Icon name='flag' size={20} color='black' style={{ width: 30 }} />
                <Text
                  style={{
                    color: 'black',
                    marginLeft: 20,
                  }}>{info.status}</Text>
              </View>

            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default UserInfoScreen