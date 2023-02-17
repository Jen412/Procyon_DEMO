
import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';
import { useEffect, useState } from 'react';
import '../App.css';  // contains .diagram-component CSS
import useTree from '../Hooks/useTree';

/**
 * Diagram initialization method, which is passed to the ReactDiagram component.
 * This method is responsible for making the diagram and initializing the model and any templates.
 * The model's data should not be set here, as the ReactDiagram component handles that via the other props.
 */
function initDiagram() {
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const $ = go.GraphObject.make;
    const diagram =
        $(go.Diagram,
            {
            'undoManager.isEnabled': true,  // must be set to allow for model change listening
            // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
            'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
            model: new go.GraphLinksModel(
                {
                linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
                })
            });
  
    // define a simple Node template
    diagram.nodeTemplate =
        $(go.Node, 'Auto',  // the Shape will go around the TextBlock
            new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
            $(go.Shape, 'RoundedRectangle',
            { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
            // Shape.fill is bound to Node.data.color
            new go.Binding('fill', 'color')),
            $(go.TextBlock,
            { margin: 8, editable: true },  // some room around the text
            new go.Binding('text').makeTwoWay()
            )
        );
    diagram.linkTemplate =
        $(go.Link,
          {
            routing: go.Link.Horizontal,
          },
          $(go.Shape,
            { strokeWidth: 3, stroke: "#333" }));

    return diagram;
}


const Diagram = () => {
    const {generateTree, nodes} = useTree();
    const { nodeDataArray, linkDataArray} = generateTree(nodes);
    let nodeData=nodeDataArray;
    console.log("🚀 ~ file: Diagram.jsx:57 ~ Diagram ~ nodeData", nodeData)
    let linkData=linkDataArray;
    console.log("🚀 ~ file: Diagram.jsx:59 ~ Diagram ~ linkData", linkData)
    // useEffect(()=>{
    //     const { nodeDataArray, linkDataArray} = generateTree(nodes);
    //     nodeData= [
    //         { key: 0, text: 'Andrew Jackson', color: 'gray', loc: '-100 0' },
    //         { key: 1, text: 'Andrew Jackson', color: 'gray', loc: '-100 100' },
    //         { key: 2, text: 'Andrew Jackson', color: 'gray', loc: '-100 200' },
    //         { key: 3, text: 'AWSTool', color: 'lightblue', loc: '100 100' },
    //         { key: 4, text: "AdministrationAcces-Amplify",color: 'orange', loc: "250 -50" },
    //         { key: 5, text: "AmazonAugementedAI",color: 'orange', loc: "250 50" },
    //         { key: 6, text: "AccessAnalizaerService",color: 'orange', loc: "250 150" },
    //         { key: 7, text: "AWSCustomRole",color: 'orange', loc: "250 250" },
    //         { key: 8, text: "I0054d9cfe5771e555",color: 'orange', loc: "800 -100" },
    //         { key: 9, text: "alias/aws/rds",color: 'lightpink', loc: "800 -50" },
    //         { key: 10, text: "vpc-21b0035c",color: 'blue', loc: "800 0" },
    //         { key: 11, text: "i0054d9cdf7551e555",color: 'orange', loc: "800 50" },
    //         { key: 12, text: "alias/aws/rds",color: 'lightpink', loc: "800 100" },
    //         { key: 13, text: "vpc-21b0035c",color: 'blue', loc: "800 150" },
    //         { key: 14, text: "i0054d9cdf7551e555",color: 'orange', loc: "800 200" },
    //         { key: 15, text: "alias/aws/rds",color: 'lightpink', loc: "800 250" },
    //         { key: 16, text: "vpc-21b0035c",color: 'blue', loc: "800 300" },
    //         { key: 17, text: "i0054d9cdf7551e555",color: 'orange', loc: "800 350" },
    //     ];
    //     linkData= [
    //         { key: 0, from: 0, to: 3},
    //         { key: 1, from: 1, to: 3},
    //         { key: 2, from: 2, to: 3},
    //         { key: 3, from: 3, to: 4},
    //         { key: 4, from: 3, to: 5},
    //         { key: 5, from: 3, to: 6},
    //         { key: 6, from: 3, to: 7},
    //         { key: 7, from: 4, to: 8},
    //         { key: 8, from: 4, to: 9},
    //         { key: 9, from: 4, to: 17},
    //         { key: 10, from: 5, to: 9},
    //         { key: 11, from: 5, to: 10},
    //         { key: 12, from: 5, to: 14},
    //         { key: 13, from: 6, to: 12},
    //         { key: 14, from: 6, to: 13},
    //     ];
    // }, [])

    // useEffect(()=>{
    //     const { nodeDataArray, linkDataArray} = generateTree(nodes);
    //     nodeData= nodeDataArray;
    //     linkData= linkDataArray;

    // }, [nodeData])

    return ( 
        <ReactDiagram
            initDiagram={initDiagram}
            divClassName='diagram-component'
            nodeDataArray={nodeData}
            linkDataArray={linkData}
        />
    )
}

export default Diagram