import {
    Diagram,
    DiagramComponent,
    NodeModel,
    NodeConstraints, GradientModel, LinearGradientModel, RadialGradientModel,
    ConnectorModel
} from "@syncfusion/ej2-react-diagrams";

const Diagrams = () => {

    let diagramInstance:  any;
    let diagramInstance2: any;

    // A node is created and stored in nodes array.

    let node: NodeModel[] = [{
// Position of the node
        offsetX: 250,
        offsetY: 250,
// Size of the node
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
        constraints: NodeConstraints.Default | NodeConstraints.Shadow,
        // Text(label) added to the node
    }, {
// Position of the node
        offsetX: 350,
        offsetY: 350,
// Size of the node
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
        constraints: NodeConstraints.Default | NodeConstraints.Shadow,
// Text(label) added to the node
    }];

    const node2: NodeModel[] = [{
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        // Flip the node in Horizontal Direction
        flip:'Horizontal',
        shape: {
            type: 'Basic',
            shape: 'RightTriangle',
        },
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        }
        // Text(label) added to the node
    }];


    let linearGradient: GradientModel | LinearGradientModel | RadialGradientModel;
    linearGradient = {
        //Start point of linear gradient
        x1: 0,
        y1: 0,
        //End point of linear gradient
        x2: 50,
        y2: 50,
        //Sets an array of stop objects
        stops: [{
            color: 'white',
            offset: 0
        },
            {
                color: '#6BA5D7',
                offset: 100
            }
        ],
        type: 'Linear'
    };
    let radialGradient: GradientModel | LinearGradientModel | RadialGradientModel;
    radialGradient = {
//Center point of outer circle
        cx: 50,
        cy: 50,
//Center point of inner circle
        fx: 25,
        fy: 25,
//Radius of a radial gradient
        r: 50,
//Sets an array of stop objects
        stops: [{
            color: 'white',
            offset: 0
        },
            {
                color: '#6BA5D7',
                offset: 100
            }
        ],
        type: 'Radial'
    };

    let node3: NodeModel[] = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        style: {
            gradient: linearGradient
        }
        // Text(label) added to the node
    }, {
        // Position of the node
        offsetX: 350,
        offsetY: 350,
        // Size of the node
        width: 100,
        height: 100,
        style: {
            gradient: radialGradient
        }
        // Text(label) added to the node
    }];

    let nodes4: NodeModel[] = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{
            content: 'Node1'
        }],
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
        expandIcon: {
            shape: 'ArrowDown',
            width: 10,
            height: 10
        },
        collapseIcon: {
            shape: 'ArrowUp',
            width: 10,
            height: 10
        }
    },
        {
            id: 'Init',
            width: 140,
            height: 50,
            offsetX: 300,
            offsetY: 140,
            style: {
                fill: '#6BA5D7',
                strokeColor: 'white'
            },
            annotations: [{
                content: 'Node2'
            }],
        }
    ];
    let connectors: ConnectorModel[] = [{
// Unique name for the connector
        id: "connector1",
// Source and Target node's name to which connector needs to be connected.
        sourceID: "Start",
        targetID: "Init",
        type: 'Orthogonal'
    }];

    let node5: NodeModel[] = [{
        id: 'node1',
// Position of the node
        offsetX: 450,
        offsetY: 100,
// Size of the node
        width: 80,
        height: 50,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
    }, {
        id: 'node2',
// Position of the node
        offsetX: 350,
        offsetY: 200,
// Size of the node
        width: 80,
        height: 50,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
    }, {
        id: 'node3',
// Position of the node
        offsetX: 450,
        offsetY: 200,
// Size of the node
        width: 80,
        height: 50,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
    }, {
        id: 'node4',
// Position of the node
        offsetX: 550,
        offsetY: 200,
// Size of the node
        width: 80,
        height: 50,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
        }, {
        id: 'node5',
// Position of the node
        offsetX: 650,
        offsetY: 200,
// Size of the node
        width: 80,
        height: 50,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
        }, {
        id: 'node6',
// Position of the node
        offsetX: 750,
        offsetY: 200,
// Size of the node
        width: 80,
        height: 50,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
    }];
    let connector2: ConnectorModel[] = [{
        id: 'connector1',
        sourceID: 'node1',
        targetID: 'node2',
        type: 'Orthogonal'
    }, {
        id: 'connector2',
        sourceID: 'node1',
        targetID: 'node3',
        type: 'Orthogonal'
    }, {
        id: 'connector3',
        sourceID: 'node1',
        targetID: 'node4',
        type: 'Orthogonal'
    }, {
        id: 'connector4',
        sourceID: 'node1',
        targetID: 'node5',
        type: 'Orthogonal'
    }, {
        id: 'connector5',
        sourceID: 'node1',
        targetID: 'node6',
        type: 'Orthogonal'
    }];


    let node6: NodeModel[] = [{
// Position of the node
        offsetX: 250,
        offsetY: 250,
// Size of the node
        width: 100,
        height: 100,
//Sets type of the shape as text
        shape: {
            type: 'Text',
            content: 'Text Element'
        },
//Customizes the appearances such as text, font, fill, and stroke.
        style: {
            strokeColor: 'none',
            fill: 'none',
            color: 'black',
            textAlign: 'Center'
        }
    }];

    let node7: NodeModel[] = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        // sets the type of the shape as image
        shape: {
            type: 'Image',
            source: 'data:image/gif;base64,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'
        },
        //Customizes the appearances such as text, font, fill, and stroke.
        style: {
            fill: 'none'
        }
    }];
    //create class Property
    const createProperty = (name: any, type: any) => {
        return { name: name, type: type };
    }

    // A node is created and stored in nodes array.
    let node8: NodeModel[] = [{
        id: 'Patient',
        shape: {
            type: 'UmlClassifier',
            classShape: {
                name: 'Patient',
                attributes: [
                    createProperty('name', 'Name'),
                    createProperty('title', 'String[*]'),
                    createProperty('gender', 'Gender')
                ]
            },
            classifier: 'Class'
        },
        offsetX: 405,
        offsetY: 105
    }];


    let node9: NodeModel[] = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{
            content: 'Default Shape'
        }]
    },
        {
            id: 'node2',
            width: 100,
            height: 100,
            offsetX: 300,
            offsetY: 100,
            shape: {
                type: 'Path',
                data: 'M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,' +
                    '179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z'
            },
            annotations: [{
                content: 'Path Element'
            }]
        }
    ];

    let connectors3: ConnectorModel[] = [{
        id: 'connector1',
        type: 'Straight',
        sourcePoint: {
            x: 100,
            y: 300
        },
        targetPoint: {
            x: 200,
            y: 400
        },
    }];

    return (
        <>
            < DiagramComponent id = "diagram"
                               width = {
                                   '100%'
                               }
                               height = {
                                   '402px'
                               }
                // Add node
                               nodes = {
                                   node
                               }
                // render initialized Diagram
            />
            <br/><br/>
            <DiagramComponent id = "diagram2" ref={diagram => (diagramInstance = diagram)}
                              width = {
                                  '100%'
                              }
                              height = {
                                  '402px'
                              }
                              nodes = {
                                  node2
                              }
                              created = {
                                  () => {
                                      diagramInstance.select([diagramInstance.nodes[0]]);
                                  }
                              }
                // render initialized Diagram
            />
            <br/><br/>
            < DiagramComponent id = "diagram3"
                               width = {
                                   '100%'
                               }
                               height = {
                                   '600px'
                               }
                // Add node
                               nodes = {
                                   node3
                               }
                // render initialized Diagram
            />

            <br/><br/>
            < DiagramComponent id = "diagram4"
                               width = {
                                   '100%'
                               }
                               height = {
                                   '403px'
                               }
                               nodes = {
                                   nodes4
                               }
                               connectors = {
                                   connectors
                               }
            />
            <br/><br/>
            < DiagramComponent id = "diagram5"
                               width = {
                                   900
                               }
                               height = {
                                   402
                               }
                               nodes = {
                                   node5
                               }
                               connectors = {
                                   connector2
                               }
            />
            <br/><br/>
            <DiagramComponent id = "diagram6" ref={diagram => (diagramInstance2 = diagram)}
                              width = {
                                  '100%'
                              }
                              height = {
                                  '400px'
                              }
                              // Add node
                              nodes = {
                                  node6
                              }
                              created = {
                                  () => {
                                      diagramInstance.select([diagramInstance.nodes[0]]);
                                  }
                              }
                // render initialized Diagram
            />
            <br/><br/>
            < DiagramComponent id = "diagram7"
                               width = {
                                   '100%'
                               }
                               height = {
                                   '400px'
                               }
                // Add node
                               nodes = {
                                   node7
                               }
                // render initialized Diagram
            />
            <br/><br/>
            <DiagramComponent id = "diagram8"
                              width = {
                                  '100%'
                              }
                              height = {
                                  '400px'
                              }
                // Add node
                              nodes = {
                                  node8
                              }
                // render initialized Diagram
            />
            <br/><br/>
            <DiagramComponent id = "diagram9"
                              width = {
                                  '100%'
                              }
                              height = {
                                  '400px'
                              }
                              nodes = {
                                  node9
                              }
                              connectors = {
                                  connectors3
                              }
                // Add layer
                              layers = {
                                  [
                                      {
                                          id: 'layer1',
                                          visible: true,
                                          objects: ['node1'],
                                          lock: true
                                      },
                                      {
                                          id: 'layer2',
                                          visible: true,
                                          objects: ['node2'],
                                          lock: false
                                      }
                                  ]
                              }
                // render initialized Diagram
            />
            <br/><br/>

        </>

    );
}

export default Diagrams;

