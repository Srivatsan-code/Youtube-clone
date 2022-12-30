import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import {logo} from '../utils/constants';
import SearchBar from "./SearchBar";
const Navbar =()=>(
 
    <Stack direction="row"
     alignItems="center" 
     p={2} 
     sx={{position:'sticky',background:'#000',top:0, justifyContent:'space-between'}} >
     <Link to="/" style={{display:'flex',alignItems:'center'}}>
      <img className="logo" src="https://images.pond5.com/illustrative-editorial-youtube-icon-appearing-footage-169443698_iconm.jpeg" alt="logo" height={80} width={120} />
     </Link>
     <SearchBar/>
    </Stack>
  )


export default Navbar
