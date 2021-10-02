import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setCords } from "../../store/slices/flow";
import { Node, useStoreState } from "react-flow-renderer";

const getCordsMap = (nodes: Node[]) => {
    const result: any = {};
    nodes.forEach(node => {
        result[node.id] = { width: node.__rf.width, height: node.__rf.height };
    });
    return result;
};

const FlowCrutch: FC = () => {
    const dispatch = useAppDispatch();
    const { cords } = useAppSelector(state => state.flowReducer);
    const nodes = useStoreState((state) => state.nodes);

    useEffect(() => {
        if (cords) {
            return;
        }
        if (nodes && nodes.length > 0) {
            const element = nodes[0];
            if (element.__rf && element.__rf.width) {
                dispatch(setCords(getCordsMap(nodes)));
            }
        }
    }, [nodes, cords, dispatch]);

    return (
        <div />
    );
};

export default FlowCrutch;