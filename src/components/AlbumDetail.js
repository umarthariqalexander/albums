import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = (props) => {
    const { record } = props;
    const { thumbnailStyle, headerContentStyles, thumbnailContainerStyle, headerTextStyle }
     = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: record.thumbnail_image }}/>
                </View>
                <View style={headerContentStyles}>
                    <Text style={headerTextStyle}>{record.title}</Text>
                    <Text>{record.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: record.image }}/>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(record.url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>);
};

const styles = {
        headerContentStyles: {
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        headerTextStyle: {
            fontSize: 18
        },
        thumbnailStyle: {
            height: 50,
            width: 50
        },
        imageStyle:{
            height: 300,
            flex: 1,
            width: null
        },
        thumbnailContainerStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10
        }
};

export default AlbumDetails;
