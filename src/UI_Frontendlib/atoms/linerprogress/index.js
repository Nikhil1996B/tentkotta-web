import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types'

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#FFA90A',
    },
}))(LinearProgress);

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

function CustomizedProgressBars({ value, themes }) {
    const classes = useStyles();

    if (!value) {
        return null;
    };
    const bgColor = themes ? {
        backgroundColor: `${themes && themes.colors ? themes.colors.bgColor : ''}`
    } : {}
    return (
        <div className={classes.root} data-test='linearProgressBarComponent' style={bgColor}>
            <BorderLinearProgress variant="determinate" value={value} />
        </div>
    );
}

CustomizedProgressBars.prototype = {
    value: PropTypes.number
}

export default CustomizedProgressBars;