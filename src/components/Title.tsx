import { Typography } from "@mui/material"
import { Box } from "@mui/system"

interface TitleProps {
    title: string;
    subtitle?: string
}


const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        marginBottom:'4rem',
        textAlign:'center'   
        
    }}>
        <Typography variant="h5" component='h3' >
            {subtitle}
        </Typography>
        <Typography variant="h3" component='h3' sx={{ fontWeight:'600'}} >
          {title}
        </Typography>
    </Box>
  )
}
export default Title