import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import { subscribeAction } from './actions';
import { useLocation, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '90%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        background: `#FFFFFF 0% 0 % no-repeat padding-box`,
        borderRadius: `10px`
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    // React form handle methods
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        if (!values) return;
        dispatch(subscribeAction.resetSignUpParams());
        dispatch(subscribeAction.subscriptionRequested(values));
        dispatch({ type: "RESET_SIGIN" });
        history.push("/signUp");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Paper className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="enter email address"
                    type="email"
                    name="email"
                    id="id_email"
                    inputRef={register({
                        required: "E-mail ID is Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                        }
                    })}
                />
                {errors.email &&
                    <p
                        style={{ color: 'red', fontSize: '10px' }}>
                        {errors.email.message}
                    </p>
                }
                <Button variant="outlined" type="submit" autoComplete="off" style={{
                    background: `#E1540F 0% 0% no-repeat padding-box`,
                    padding: '1rem',
                    borderRadius: `10px`
                }}>
                    <span className="color-sub" style={{ color: `#FFFFFF` }}>
                        SUBSCRIBE
                </span>
                </Button>
            </Paper>
        </form >
    );
}
