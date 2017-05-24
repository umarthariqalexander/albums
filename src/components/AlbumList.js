import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
    constructor(context, props) {
        super(context, props);
        this.state = { albums: [] };
    }
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums/')
        .then(response => { this.setState({ albums: response.data }); })
        .catch((error) => { console.log(error); });
    }
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} record={album} />);
    }
    render() {
        return (
            <ScrollView style={styles.ViewStyles}>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
const styles = {
    ViewStyles: {
        paddingTop: 15
    }
};


export default AlbumList;
