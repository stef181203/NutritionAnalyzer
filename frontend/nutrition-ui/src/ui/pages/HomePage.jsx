import {Box, Button, CircularProgress, Container, TextField, Typography} from "@mui/material";
import {useState} from "react";
import useMeal from "../../hooks/useMeal.js";
import MealResults from "../components/mealResults/MealResults.jsx";

const initialHelperData = {
    "submitted": false,
    "text": '',
}

const HomePage = () => {
    const [helperData, setHelperData] = useState(initialHelperData)
    const {meal, loading, onSubmit} = useMeal()

    const handleSubmit = () => {
        if(helperData.text.trim().length > 0) {
            setHelperData(prevState => ({
                    ...prevState,
                    submitted: true
                })
            );
            onSubmit(helperData.text)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setHelperData({...helperData, [name]: value});
    };

    const handleClear = () => {
        setHelperData(initialHelperData)
    }


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
              Nutrition Analyzer
          </Typography>
          <Container sx={{
              backgroundColor: 'white',
              borderRadius: '5px',
              position: 'relative',
              top: '7%',
              boxShadow: '3px 3px 15px rgba(0,0,0,0.5)',
              paddingY: '2em'
          }}
          maxWidth={'md'}>
              <Box minHeight={'30vh'} minWidth={'100%'} sx={{
                  justifyContent: 'start',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column'
              }}
              >
                  <Typography variant={'h6'} sx={{ mb: '0.3em' }}>
                      Please provide a meal description
                  </Typography>
                  <TextField
                      multiline
                      minRows={5}
                      maxRows={5}
                      name={'text'}
                      value={helperData.text}
                      onChange={handleChange}
                      placeholder="Ingredients..."
                      sx={{ minWidth: '90%'}}
                  />
                  <Button onClick={handleSubmit} variant={'contained'} sx={{marginTop: '1.5em', backgroundColor: '#0000A3'}}>Submit</Button>
              </Box>
              {loading &&
                  <Box minHeight={'30vh'} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                      <CircularProgress />
                  </Box>
              }
              {helperData.submitted && !loading && meal &&
                  <>
                      <hr style={{width: '80%', marginTop: '1.5em', opacity: '60%' }}/>
                      <Box minHeight={'30vh'} display={"flex"} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                          <MealResults meal={meal}></MealResults>
                          <Button onClick={handleClear} variant={'contained'} sx={{marginTop: '1.5em', backgroundColor: '#0000A3'}}>Clear</Button>
                      </Box>
                  </>
              }
          </Container>
      </>
    );
}

export default HomePage;