import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box } from '@mui/material';
import {Videos,ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromApi';
const ChannelDetail=()=> {
    const [channelDetail,setChannelDetails] =useState(null);
    const [videos,setVideos]=useState([])
    const {id}=useParams();
    useEffect(()=>{
      fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=>setChannelDetails(data?.items[0]));

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=>setVideos(data?.items));
    },[id])
  return (
    <Box minHeight="95vh">
    <Box>
      <div style={{
        background: "linear-gradient(59deg, rgba(2,0,36,1) 0%, rgba(153,93,196,1) 39%, rgba(105,130,214,1) 68%, rgba(0,212,255,1) 100%)",
        zIndex:10,
        height:'300px'
      }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
    </Box>
    <Box display="flex" p="2">
     <Box sx={{mr:{sm:'100px'}}}/>
     <Videos videos={videos}/>
    </Box>
    </Box>
  )
}

export default ChannelDetail
