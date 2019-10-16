import React from 'react';
import {Text, View, StyleSheet, Button, FlatList, TouchableOpacity, Image} from 'react-native';
import LayoutContainer from '../components/layout/Layout';
import CircleImage from '../components/image/CircleImage';
import stylesheet from '../styles/styles';
import token from "../shared/lib/Token";
import SquareImage from '../components/image/SquareImage';
import AccountServices from "../services/account";

class UserContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: []
        }
    }

    renderItem(item) {
        console.log(item.thumbnail);
        return (
            <TouchableOpacity
                style={{flex:1/3, aspectRatio:1}}>
                <Image style={{flex: 1}} resizeMode='cover' source={item.thumbnail}/>
            </TouchableOpacity>
        )
    }

    signout = async () => {
        await token.clearToken();
        this.props.navigation.navigate('Auth');
    };

    componentDidMount(): void {
        AccountServices.images(0)
            .then((response) => {
                 console.log(response);
                let picturesArr = response.data.map((picture) => {
                    return {
                        thumbnail: {
                            uri: picture.link,
                        }
                    };
                });
                this.setState({pictures: picturesArr});
            })
            .catch((error) => {
                console.log(error);
            })

        AccountServices.images(0)
            .then((response) => {
                 console.log(response);
                let picturesArr = response.data.map((picture) => {
                    return {
                        thumbnail: {
                            uri: picture.link,
                        }
                    };
                });
                this.setState({pictures: picturesArr});
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <LayoutContainer title={'Profil'} font={''} fontSize={20}>
                <View style={styles.main_container}>
                    <Button title="Déconnexion" onPress={this.signout}/>
                    <View style={[styles.banner, stylesheet.shadow_box]}>
                        <View style={styles.banner_content}>
                            <View style={styles.picture}>
                                <CircleImage
                                    pic={
                                        'https://pbs.twimg.com/profile_images/606263942688735232/CUv5tizA_400x400.jpg'
                                    }
                                />
                            </View>
                            <View style={styles.infos}>
                                <Text
                                    style={[{fontSize: 30}, stylesheet.white, stylesheet.bold]}>
                                    Hit The Road
                                </Text>
                                <Text
                                    numberOfLines={3}
                                    style={[{fontSize: 14}, stylesheet.grey]}>
                                    NEW FEED ! FOLLOW: @clement.htr & @paulrdb ! YOUTUBE 325K
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.pictures}>
                        <FlatList
                            numColumns={3}
                            data={this.state.pictures}
                            renderItem={({item}) => this.renderItem(item)}
                        />
                    </View>
                </View>
            </LayoutContainer>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'hsl(218,15%,15%)',
    },
    banner_content: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    picture: {
        flex: 2,
        padding: 10,
    },
    infos: {
        flex: 4,
        padding: 10,
    },
    banner: {
        height: 140,
        backgroundColor: 'hsl(218,15%,15%)',
    },
    pictures: {
        marginVertical: 1,
    },
});

export default UserContainer;
