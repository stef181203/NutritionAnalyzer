import {Container, Typography} from "@mui/material";


const HomePage = () => {
    return (
      <>
          <Container sx={{border: '0.15em solid gray', borderRadius: '10px'}} maxWidth={'lg'}>
              <Typography>
                  Trying everything out...
              </Typography>
          </Container>
      </>
    );
}

export default HomePage;