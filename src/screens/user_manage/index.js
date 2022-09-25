import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment/moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import SysModal from '../../components/sys_modal';
import SysGlobalLoading from '../../components/sys_global';
import { URL_API_GET_USERS, URL_API_DEL_USERS, URL_AVATAR } from '../../constants/UserConstants';

const UserManageScreen = () => {

    // initial state
    const [userList, setUserList] = useState([]);
    const [keySearch, setKeySearch] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // the api load app
    useEffect(() => {
        getData();
    }, []);

    const onChangeKeySearch = (value) => setKeySearch(value);

    const getData = () => {
        try {
            setIsLoading(true);

            axios({
                url: URL_API_GET_USERS,
                method: 'GET',
            }).then(result => {
                const list = result.data.data.userList;
                // Set an image to avatar
                list.forEach(element => {
                    element.avatar = URL_AVATAR;
                });

                setUserList(list);
                setIsLoading(false);
            }).catch(error => {
                console.log('fetch data fail');
                setIsLoading(false);
            })
        } catch (error) {
            setIsLoading(false);
        }
    };

    // on Delete
    const onDelete = value => {
        try {
            setIsLoading(true);
            axios({
                method: 'DELETE',
                url: `${URL_API_DEL_USERS}/${value}`
            }).then(result => {
                setMessageAlert(result.data.message);
                setShowAlert(true);

                // reload data
                getData();
            }).catch(error => {
                console.log('delete user error', error);
                setIsLoading(false);
            })
        } catch (error) {
            setIsLoading(false);
        }
    }

    // handle on Hide Alert
    const onHideAlert = () => setShowAlert(false);

    return (
        <View
            style={{
                flex: 1,
            }}>
            <SysModal message={messageAlert} onHide={onHideAlert} visible={showAlert} />
            <SysGlobalLoading visible={isLoading} />
            <View
                style={{
                    padding: 10,
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#2E86C1',
                    }}>
                    User Management
                </Text>
            </View>

            {/* search bar */}
            <View
                style={{
                    padding: 10,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                    <TextInput
                        style={{ flex: 1, marginLeft: 10 }}
                        placeholder='Enter your key search'
                        value={keySearch}
                        onChangeText={onChangeKeySearch}
                    ></TextInput>
                    <Icon
                        style={{ padding: 10 }}
                        size={20}
                        name='search'
                    />
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                }}>
                <FlatList
                    refreshing={false}
                    onRefresh={() => getData()}
                    data={userList.filter(user => user.username.search(keySearch.toLocaleLowerCase()) > -1)}
                    keyExtractor={item => item._id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <View
                                    style={{
                                        padding: 10,
                                        borderRadius: 10,
                                        backgroundColor: 'white',
                                        marginBottom: 10,
                                        flexDirection: 'row',
                                        marginBottom: 10,
                                        marginHorizontal: 10,
                                    }}>
                                    <View>
                                        <Image
                                            style={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: 10,
                                            }}
                                            source={{
                                                uri: item.avatar,
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            paddingLeft: 10,
                                            flex: 1,
                                        }}>
                                        <Text
                                            style={{
                                                color: '#2E86C1',
                                                fontSize: 20,
                                                fontWeight: 'bold',
                                                marginBottom: 5,
                                            }}>
                                            {item.username}
                                        </Text>
                                        <Text>{item.role}</Text>
                                        <Text>{moment(item.createDate).format('HH:mm:ss DD/MM/YYYY')}</Text>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                onDelete(item._id);
                                            }}
                                            style={{
                                                backgroundColor: '#CD6155',
                                                borderRadius: 5,
                                                width: 30,
                                                height: 30,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                            <Icon name='trash' size={20} color='white' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        );
                    }}/>
            </View>

        </View>
    )
}

export default UserManageScreen
