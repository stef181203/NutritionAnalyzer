import {Box, Button, Container, TextField, Typography} from "@mui/material";


const HomePage = () => {
    return (
      <>
          <Typography variant={'h3'} textAlign={'center'}
                      sx={{
                          pt: '0.7em',
                          color: 'white',
                          fontWeight: 'bold',
                          textShadow: '3px 3px 15px rgba(0,0,0,0.5)'
                      }}
          >
              Please provide a meal description
          </Typography>
          <Container sx={{
              backgroundColor: 'white',
              borderRadius: '5px',
              minHeight: '70vh',
              position: 'relative',
              top: '7%',
              boxShadow: '3px 3px 15px rgba(0,0,0,0.5)',
          }}
          maxWidth={'sm'}>
              <Box minHeight={'50%'} minWidth={'100%'} sx={{
                  justifyContent: 'start',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column'}}
              >
                  <TextField
                      multiline
                      minRows={5}
                      placeholder="Description"
                      sx={{ minWidth: '90%', marginTop: '3em' }}
                  />
                  <Button variant={'contained'} sx={{marginTop: '2em', backgroundColor: '#0000A3'}}>Submit</Button>
              </Box>
              <Box minHeight={'50%'}>

              </Box>

          </Container>
      </>
    );
}

export default HomePage;