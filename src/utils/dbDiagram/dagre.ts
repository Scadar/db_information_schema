import dagre from "dagre";
import { Edge, isNode, Node, Position } from "react-flow-renderer";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

export const getLayoutedElements = (elements: Array<Node | Edge>, cords: any) => {
    const direction = "BT";
    dagreGraph.setGraph({ rankdir: direction });

    elements.forEach((el) => {
        if (isNode(el)) {
            dagreGraph.setNode(el.id, { width: cords[el.id].width, height: cords[el.id].height });
        } else {
            dagreGraph.setEdge(el.source, el.target);
        }
    });

    dagre.layout(dagreGraph);

    return elements.map((el) => {
        if (isNode(el)) {
            const nodeWithPosition = dagreGraph.node(el.id);
            el.targetPosition = Position.Bottom;
            el.sourcePosition = Position.Top;
            el.position = {
                x: nodeWithPosition.x - cords[el.id].width / 2 + Math.random() / 1000,
                y: nodeWithPosition.y - cords[el.id].height / 2
            };
        }

        return el;
    });
};