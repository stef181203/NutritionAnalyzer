import {Box, Typography} from "@mui/material";

const Header = () => {
    return(
        <>
            <Box sx={{ backgroundColor: '#2596be', mb: 3}} boxShadow={6} display={'flex'} justifyContent={'center'}>
                <Typography variant="h4" sx={{m: 1}} color={'white'} fontWeight={'bold'} display={'inline-block'}>
                    Nutrition Analyzer
                </Typography>
            </Box>
        </>
    );
}

export default Header;