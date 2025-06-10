import { Paper, Stack, Typography} from "@mui/material";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import EggIcon from '@mui/icons-material/Egg';
import CakeIcon from '@mui/icons-material/Cake';
import FastfoodIcon from '@mui/icons-material/Fastfood';


const Meal = ({meal}) => {
    return (
        <Stack spacing={2} minWidth={'90%'}>
            <Paper elevation={2} style={{padding: '0.25em', display: 'flex'}}>
                <LunchDiningIcon sx={{marginInlineEnd: '0.5em'}}></LunchDiningIcon>
                <Typography variant={'body1'}>
                    Total Fat: {meal.total_fat}g
                </Typography>
            </Paper>
            <Paper elevation={2} style={{padding: '0.25em', display: 'flex'}}>
                <EggIcon sx={{marginInlineEnd: '0.5em'}}></EggIcon>
                <Typography variant={'body1'}>
                    Total Carbs: {meal.total_carbs}g
                </Typography>
            </Paper>
            <Paper elevation={2} style={{padding: '0.25em', display: 'flex'}}>
                <CakeIcon sx={{marginInlineEnd: '0.5em'}}></CakeIcon>
                <Typography variant={'body1'}>
                    Total Protein: {meal.total_protein}g
                </Typography>
            </Paper>
            <Paper elevation={2} style={{padding: '0.25em', display: 'flex'}}>
                <FastfoodIcon fontSize={'large'} sx={{marginInlineEnd: '0.5em'}}></FastfoodIcon>
                <Typography variant={'h6'} fontWeight={'bold'}>
                    Total Calories: {meal.total_calories}kcal
                </Typography>
            </Paper>
        </Stack>
    )
}

export default Meal;