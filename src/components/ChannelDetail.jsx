import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

function ChannelDetail() {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`) // Corrija a query string
            .then((data) => setChannelDetail(data?.items[0]))
            .catch((error) => console.error('Error fetching channel detail:', error));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`) // Corrija a query string
            .then((data) => setVideos(data?.items))
            .catch((error) => console.error('Error fetching videos:', error));
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{ background: 'linear-gradient(90deg, rgba(129,90,191,1) 0%, rgba(37,9,83,1) 100%)', zIndex: 10, height: '300px' }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop="-130px" />
            </Box>

            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    );
}

export default ChannelDetail;