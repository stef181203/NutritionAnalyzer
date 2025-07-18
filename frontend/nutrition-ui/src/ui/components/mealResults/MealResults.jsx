import {Box, Grid, Paper, Typography} from "@mui/material";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import EggIcon from '@mui/icons-material/Egg';
import CakeIcon from '@mui/icons-material/Cake';
import FastfoodIcon from '@mui/icons-material/Fastfood';


const MealResults = ({meal}) => {
    return (
        <Box width={'90%'}>
            <Grid container width={'100%'} display={'flex'} justifyContent={'space-evenly'}>
                <Grid item size={5}>
                    <Typography variant={'h6'} textAlign={'center'} sx={{ mb: '0.5em'}}>
                        Ingredients
                    </Typography>
                    <Paper variant={'outlined'}>
                        <ul>
                            {meal.ingredients.map((ingredient) => (
                                <li key={ingredient.name} style={{ mb: '0.5em'}}>
                                    <Typography variant={'body1'}>
                                        {ingredient.serving_qty}{ingredient.serving_unit} {ingredient.name}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </Paper>
                </Grid>
                <Grid item size={6} sx={{paddingRight: '0.2em'}}>
                    <Typography variant={'h6'} textAlign={'center'} sx={{ mb: '0.5em' }}>
                        Macros
                    </Typography>
                    <Paper variant={'outlined'} style={{padding: '1em 0 0.5em 1em'}}>
                        <Typography variant={'body1'} sx={{ mb: '0.5em', display: 'flex'}}>
                            <LunchDiningIcon sx={{marginRight: '0.3em'}}></LunchDiningIcon>
                            Total fat: <strong style={{marginLeft: '0.4em'}}>{meal.total_fat}g</strong>
                        </Typography>
                        <Typography variant={'body1'} sx={{ mb: '0.5em', display: 'flex'}}>
                            <CakeIcon sx={{marginRight: '0.3em'}}></CakeIcon>
                            Total carbs: <strong style={{marginLeft: '0.4em'}}>{meal.total_carbs}g</strong>
                        </Typography>
                        <Typography variant={'body1'} sx={{ mb: '0.5em', display: 'flex'}}>
                            <EggIcon sx={{marginRight: '0.3em'}}></EggIcon>
                            Total protein: <strong style={{marginLeft: '0.4em'}}>{meal.total_protein}g</strong>
                        </Typography>
                        <Typography variant={'h6'} sx={{ mb: '0.5em', display: 'flex'}}>
                            <FastfoodIcon fontSize={'large'} sx={{marginRight: '0.3em'}}></FastfoodIcon>
                            Total calories: <strong style={{marginLeft: '0.4em'}}>{meal.total_calories}kcal</strong>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MealResults;