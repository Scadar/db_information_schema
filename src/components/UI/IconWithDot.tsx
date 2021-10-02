import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";

type IconWithDotProps = {
    children: React.ReactNode
    withDot: boolean
}

const useStyles = makeStyles(() => ({
    root: {
        position: "relative",
        boxSizing: "border-box"
    },
    dot: {
        position: "absolute",
        right: 5,
        bottom: 3,
        border: `2px solid ${yellow[500]}`,
        borderRadius: "50%",
        width: 3,
        height: 3
    }
}));

const IconWithDot: FC<IconWithDotProps> = ({ children, withDot }: IconWithDotProps) => {

    const classes = useStyles();

    return (
        <div className={ classes.root }>
            { children }
            {
                withDot && <div className={ classes.dot }/>
            }
        </div>
    );
};

export default IconWithDot;