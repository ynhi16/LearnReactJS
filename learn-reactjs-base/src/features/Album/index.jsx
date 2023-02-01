import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AblumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name : 'Nhạc hoa thịnh hành',
            thumbnailUrl: ''
        },
        {
            id: 2,
            name : 'Rap Việt nghe là ghiền',
            thumbnailUrl: ''
        },
        
        {
            id: 3,
            name : 'Trào lưu nhạc hot',
            thumbnailUrl: ''
        },

        
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;