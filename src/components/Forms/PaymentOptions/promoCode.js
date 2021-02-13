import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '98%',
        boxShadow: "0px 0px 1px 1px",
        button: {
            backgroundColor: 'orange'
        }
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
        background: '#e1540f'
    },
    divider: {
        height: 28,
        margin: 4,
    },

}));

export default function PromoCode() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    // React form handle methods
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        if (!values) return;
        // dispatch(subscribeAction.subscriptionRequested(values));
        // history.push("/signUp");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Paper className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="enter promocode"
                    type="text"
                    name="promocode"
                    id="promocode"
                    inputRef={register({
                        pattern: {
                            value: /^[A-Z0-9._%+-]$/i,
                            message: "enter a valid promocode",
                        }
                    })}
                />
                {
                    errors.email &&
                    <p
                        style={{ color: 'red', fontSize: '10px' }}>
                        {errors.promocode.message}
                    </p>
                }
                <Button variant="outlined" type="submit" autoComplete="off">
                    <span className="color-sub">
                        APPLY
                    </span>
                </Button>
            </Paper>
        </form>
    );
}
