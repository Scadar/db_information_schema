import React, { FC } from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 99998,
        position: "absolute",
        top: 10,
        left: 10,
        display: "flex",
        flexDirection: "column",
    },
    back: {
        color: "#fff"
    }
}));

type FlowControlProps = {
    clear: () => void
}

const FlowControl: FC<FlowControlProps> = ({ clear }) => {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <Button onClick={ clear } className={classes.back} variant={"outlined"}>Назад</Button>
        </div>
    );
};

export default FlowControl;