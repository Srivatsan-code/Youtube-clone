import {Link} from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {demoVideoUrl,demoVideoTitle,demoChannelUrl,
demoChannelTitle} from '../utils/constants';

const VideoCard = (item) => {
  
  const {video:{id:{videoId},snippet}}=item;
  const id=snippet?.channelId;
  
  
  return (
    <Card className='card' sx={{width:{xs:'100%',sm:'358px',md:'320px'},
    boxShadow:'none',borderRadius:"12px" ,border:"1px solid gray",backgroundColor:'#1e1e1e'
    }}>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
      <CardMedia 
      
      image={snippet?.thumbnails?.high?.url}
      
      alt={snippet?.title}
      sx={{width:{
        xs:'100%',sm:'358px',md:'320px'
      },height:180,borderRadius:"12px"}}
      />
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
     
   


      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
        <Typography varient="subtitle1"
        fontWeight="bold" color="#FFF"
        >
          {snippet?.title.slice(0,60)|| 
          demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/
      ${snippet?.channelId}`:demoChannelUrl}>
        <Typography varient="subtitle2"
        fontWeight="bold" color="gray"
        >
        
          {snippet?.channelTitle|| demoChannelTitle}
          {<CheckCircle sx={{fontSize:12,color:'gray',ml:5}}/>}
        </Typography>
      </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard
