import React, { FC, useEffect, useState } from "react";
import { useStoreState, useZoomPanHelper } from "react-flow-renderer";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 99998,
        position: "absolute",
        top: 10,
        right: 10,
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(1)
    },
    searchField: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 1s ease-out"
    },
    searchIcon: {
        fontSize: 30,
        cursor: "pointer"
    },
    closeIcon: {
        fontSize: 30,
        cursor: "pointer",
        color: theme.palette.flow.background
    },
    filterNodes: {
        cursor: "pointer",
        marginTop: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        "&:hover": {
            backgroundColor: grey[100]
        }
    }
}));

export const FlowFinder: FC = () => {
    const classes = useStyles();
    const nodes = useStoreState((state) => state.nodes);
    const [isOpen, setIsOpen] = useState(false);
    const [allNodeNames, setAllNodeNames] = useState<string[]>([]);
    const [searchNodeName, setSearchNodeName] = useState("");
    const { setCenter } = useZoomPanHelper();

    useEffect(() => {
        setAllNodeNames(nodes.map(node => node.id));
    }, [setAllNodeNames, nodes]);

    const focusNode = (name: string) => {
        if (nodes.length) {
            const node = nodes.find(node => node.id.includes(name));
            if (!node) {
                return;
            }
            const x = node.__rf.position.x + node.__rf.width / 2;
            const y = node.__rf.position.y + node.__rf.height / 2;
            const zoom = 1.85;

            setCenter(x, y, zoom);
        }
    };

    return (
        <Paper className={ classes.root } style={ { backgroundColor: isOpen ? "#fff" : "transparent" } }>
            <div className={ classes.searchField }>
                {
                    isOpen ?
                        <>
                            <TextField
                                placeholder="Имя таблицы"
                                variant="outlined"
                                value={ searchNodeName }
                                size={ "small" }
                                onChange={ (e) => setSearchNodeName(e.target.value) }
                            />
                            <CloseIcon
                                className={ classes.closeIcon }
                                onClick={ () => setIsOpen(false) }
                            />
                        </>
                        :
                        <SearchIcon className={ classes.searchIcon }
                                    style={ { color: !isOpen ? "#fff" : "#273136" } }
                                    onClick={ () => {setIsOpen(true);} }
                        />
                }
            </div>
            <div>
                {
                    isOpen && searchNodeName.length > 0 && allNodeNames &&
                    allNodeNames
                    .filter(nodeName => nodeName.includes(searchNodeName))
                    .map(name =>
                        <div
                            key={ name }
                            onClick={ () => focusNode(name) }
                            className={ classes.filterNodes }
                        >
                            <Typography>
                                { name }
                            </Typography>
                        </div>
                    )
                }
            </div>
        </Paper>
    );
};

export default FlowFinder;