import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LayoutContainer from '../components/layout/Layout';
import GridList from 'react-native-grid-list';
import SquareImage from '../components/image/SquareImage';
import AccountServices from "../services/account";

class FavoriteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        }
    }

    renderItem = ({item, index}) => <SquareImage item={item} index={index}/>;

/*    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        console.log(this.state.favorites)
    }*/


    componentDidMount(): void {
        AccountServices.favorites(0)
            .then((response) => {
                let pictures = response.data.map((fav) => {
                    return {
                        thumbnail: {
                            uri: fav.images[0].link
                        }
                    };
                });
                this.setState({favorites: pictures});
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        console.log("RENDER", this.state.favorites);
        return (
            <LayoutContainer title={'Favoris'} font={''} fontSize={20}>
                <View style={styles.main_container}>
                    <View style={styles.pictures}>
                        <GridList
                            showSeparator
                            separatorBorderColor={'hsl(220,13%,14%)'}
                            separatorBorderWidth={1}
                            data={this.state.favorites}
                            numColumns={3}
                            renderItem={(item, index) => this.renderItem(item, index)}
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
    pictures: {
        marginVertical: 1,
    },
});

export default FavoriteContainer;
