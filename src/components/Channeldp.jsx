import {useState,useEffect} from 'react';
import {Box,CardMedia,Typography,Stack} from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromApi';
const Channeldp = ({id}) => {
    const [channelDetail,setChannelDetails] =useState(null);
    
    useEffect(()=>{
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then(
            (data)=>{
                
                    setChannelDetails(data?.items[0])
            }
        );
      },[id])
       
      console.log(channelDetail)
  return (
<Stack direction="row">
    <CardMedia 
image={channelDetail?.snippet?.thumbnails?.high?.url}
alt={channelDetail?.snippet?.title}
sx={{borderRadius:'50%',height:'50px',width:'50px',mb:2,border:'1px solid #e3e3e3' }}
/>
<Box paddingLeft="6px">
<Box sx={{paddingLeft:"2px", height:"fit-content"}} >
  {channelDetail?.snippet?.title}
  </Box>

{channelDetail?.statistics?.subscriberCount && (
  <Typography height="fit-content" >
    {parseInt(channelDetail?.statistics.subscriberCount).toLocaleString()} 
  </Typography>
)}
</Box>
</Stack>
  )
}

export default Channeldp
