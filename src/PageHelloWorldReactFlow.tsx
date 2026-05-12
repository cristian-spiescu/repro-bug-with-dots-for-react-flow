import { ReactFlow, Background, BackgroundVariant, Controls, MiniMap, useNodesState, useEdgesState, addEdge, type Edge, type Connection } from "@xyflow/react";
import { useCallback, useEffect, useState } from "react";

const SNAP_GRID: [number, number] = [20, 20];

const initialNodes = [
    { id: "1", position: { x: 100, y: 100 }, data: { label: "Node A" } },
    { id: "2", position: { x: 360, y: 100 }, data: { label: "Node B" } },
];

const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2" },
];

export default function PageHelloWorldReactFlow() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    
    const onConnect = useCallback(
        (connection: Connection) => setEdges(eds => addEdge(connection, eds)),
        [setEdges]
    );

    return (
        <div style={{ width: "100%", height: "800px" }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                snapToGrid
                snapGrid={SNAP_GRID}
                fitView
            >
                <Background variant={BackgroundVariant.Dots} gap={20} size={1.5} />
                <Controls />
                <MiniMap zoomable pannable />
            </ReactFlow>
        </div>
    );
}
