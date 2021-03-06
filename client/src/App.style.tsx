import {Theme} from '@material-ui/core';

const AppStyle = (theme: Theme) => ({
    gameWrap: {
        background: 'linear-gradient(90deg, rgba(0, 30, 41, 0.75), rgba(197, 0, 50, 0.65))',
        padding: '0.7rem',
        borderRadius: '1em',
    },
    game: {
        height: '560px',
        backgroundColor: '#251818',
        color: 'white',
        [theme.breakpoints.down('md')]: {
            height: '600px',
        },
        [theme.breakpoints.down('sm')]: {
            height: '90%',
        },
    }
});

export {
    AppStyle,
}
