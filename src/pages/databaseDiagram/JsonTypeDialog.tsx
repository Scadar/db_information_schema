import React, { FC, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, Typography } from "@material-ui/core";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

type JsonTypeDialogProps = {
    open: boolean
    onClose: (value: string) => void
}

const JsonTypeDialog: FC<JsonTypeDialogProps> = ({ onClose, open }) => {
    const [code, setCode] = useState("");
    useEffect(() => {
        fetch("./textTypes.txt")
        .then((r) => r.text())
        .then(text => {
            setCode(text);
        });
    }, []);

    return (
        <Dialog onClose={ onClose } open={ open } fullWidth>
            <DialogTitle>Тип для JSON</DialogTitle>
            <DialogContent>
                <Typography variant={ "caption" }>
                    <SyntaxHighlighter language="typescript">
                        { code }
                    </SyntaxHighlighter>
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default JsonTypeDialog;