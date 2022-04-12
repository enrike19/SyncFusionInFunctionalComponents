import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';

const Splitter = () => {

    const firstPane = () => {
        return (<div>
            <div className="content">
                <h3 className="h3">HTML</h3>
                <div className="code-preview">
                    &lt;<span>!DOCTYPE html&gt;</span>
                    <div>&lt;<span>html&gt;</span></div>
                    <div>&lt;<span>body&gt;</span></div>
                    &lt;<span>div</span> id="custom-image"&gt;
                    <div>&lt;<span>img</span> src="src/albert.png"&gt;</div>
                    <div>&lt;<span>div</span>&gt;</div>
                    <div>&lt;<span>/body&gt;</span></div>
                    <div>&lt;<span>/html&gt;</span></div>
                </div>
            </div>
        </div>);
    }
    const secondPane = () => {
        const openBrace = '{';
        const closeBrace = '}';
        return (<div>
            <div className="content">
                <h3 className="h3">CSS</h3>
                <div className="code-preview">
                    <span>img {openBrace} </span>
                    <div id="code-text">margin:<span>0 auto;</span></div>
                    <div id="code-text">display:<span>flex;</span></div>
                    <div id="code-text">height:<span>70px;</span></div>
                    <span>{closeBrace}</span>
                </div>
            </div>
        </div>);
    }
    const thirdPane = () => {
        const openBrace = '{';
        const closeBrace = '}';
        return (<div>
            <div className="content">
                <h3 className="h3">JavaScript</h3>
                <div className="code-preview">
                    <span>var</span> image = document.getElementById("custom-image");
                    <div>image.addEventListener("click", function() {openBrace}</div>
                    <div> // Code block for click action</div>
                    // Code block for click action</div>
                <span> {closeBrace}) </span>
            </div>
        </div> );
    }

    let innerSplitterInstance: any;
    let splitterInstance: any;

    const leftPaneContent = () => {
        return (<div>
            <div className="content">
                <a href="https://www.syncfusion.com/ebooks/neuralnetworks" target="_blank">Neural Networks Using C# Succinctly</a>
                <p>Neural networks are an exciting field of software development used to calculate outputs from input data.
                    While the idea seems simple enough, the implications of such networks are staggering—think optical character recognition,
                    speech recognition, and regression analysis. With Neural Networks Using C# Succinctly by James McCaffrey, you’ll learn
                    how to create your own neural network to solve classification problems, or problems where the outcomes can only be one of
                    several values. <br /><br />Learn about encoding and normalizing data, activation functions and how to choose the right one, and ultimately
                    how to train a neural network to find weights and bias values that provide accurate predictions.
                </p>
            </div>
        </div>);
    }

    const rightPaneContent1 = () => {
        return (<div>
            <div className="content">
                <a href="https://www.syncfusion.com/ebooks/data_capture_and_extraction_with_c_sharp_succinctly" target="_blank"> Data Capture and Extraction with C# Succinctly </a>
                <p>Capturing and extracting information is one of the most important tasks a developer can perform, and making this task more
                    engaging without relying entirely on specialized tools is an efficient way to improve productivity.
                    In Data Capture and Extraction with C# Succinctly, author Ed Freitas guides readers toward getting more out of C# in minimal time.
                    Email has become a pillar of our modern and connected society, and it now serves as a primary means of communication.
                </p>
            </div>
        </div>);
    }
    const rightPaneContent2 = () => {
        return (<div>
            <div className="content">
                <a href="https://www.syncfusion.com/ebooks/spark" target="_blank">Spark Succinctly</a>
                <p>Mastering big data requires an aptitude at every step of information processing.
                    Post-processing, one of the most important steps, is where you find Apache Spark frequently employed.
                    Spark Succinctly, by Marko Svaljek, addresses Spark’s use in the ultimate step in handling big data. This e-book, the
                    third installment in Svaljek’s IoT series, teaches the basics of using Spark and explores how to work with RDDs,
                </p>
            </div>
        </div>);
    }
    const onCreate = () => {
        // Initialize Splitter component
        const cont = innerSplitterInstance.element.querySelectorAll(".e-pane")[1];
        cont.appendChild(splitterInstance.element);
    }

    const paneDetails = {
        content: 'New Pane',
        max: '250px',
        min: '30px',
        size: '150px',
    };


    let splitterInstance1: any;
    const firstPane1 = () => {
        return (<div>
            <div className="content">Pane1</div>
        </div>);
    }
    const secondPane1 = () => {
        return (<div>
            <div className="content">Pane2</div>
        </div>);
    }
    const btnClick1 = () => {
        if (splitterInstance1.allPanes.length > 1) {
            splitterInstance1.addPane(paneDetails, 1);
        }
    }

    let splitterInstanceDelete: any;
    const btnClickDelete = () => {
        if (splitterInstanceDelete.allPanes.length > 1) {
            splitterInstanceDelete.removePane(1);
        }
    }

    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Default</b>
                    <div className="App">
                        <SplitterComponent id="splitter" height="250px" width="100%">
                            <PanesDirective>
                                <PaneDirective />
                                <PaneDirective />
                                <PaneDirective />
                            </PanesDirective>
                        </SplitterComponent>
                    </div>
                </div>
                <div className="col-md-6">
                    <b>Vertical</b>
                    <SplitterComponent id="splitter-vertical" height="250px" width="100%" orientation={'Vertical'}>
                        <PanesDirective>
                            <PaneDirective />
                            <PaneDirective />
                        </PanesDirective>
                    </SplitterComponent>
                </div>
            </div>



            <div className="row mt-40">
                <div className="col-md-6">
                    <b>With content</b>
                    <SplitterComponent id="splitter" height="250px" width="100%">
                        <PanesDirective>
                            <PaneDirective content={firstPane}/>
                            <PaneDirective content={secondPane}/>
                            <PaneDirective content={thirdPane}/>
                        </PanesDirective>
                    </SplitterComponent>
                </div>
                <div className="col-md-6">
                    <b>Nested</b>
                    <div id="target" className="control-section splitter-expand">
                        <SplitterComponent id="splitter1" separatorSize={3} height="250px" width="100%" ref={(splitter) => { innerSplitterInstance = splitter; }}>
                            <PanesDirective>
                                <PaneDirective size='48%' content={leftPaneContent}/>
                                <PaneDirective />
                            </PanesDirective>
                        </SplitterComponent>
                        <SplitterComponent id="splitter2" separatorSize={3} orientation="Vertical" ref={(splitter) => { splitterInstance = splitter; }} created={onCreate}>
                            <PanesDirective>
                                <PaneDirective size='50%' content={rightPaneContent1}/>
                                <PaneDirective content={rightPaneContent2}/>
                            </PanesDirective>
                        </SplitterComponent>
                    </div>
                </div>

            </div>



            <div className="row mt-40">
                <div className="col-md-6 mt-40">
                    <b>add splitter</b>
                    <div className="App">
                        <SplitterComponent id="separator1" height="200px" width='580px' ref={(splitter) => { splitterInstance1 = splitter; }}>
                            <PanesDirective>
                                <PaneDirective size='200px' content={firstPane1}/>
                                <PaneDirective size='200px' content={secondPane1}/>
                            </PanesDirective>
                        </SplitterComponent>
                        <div id='addButton'>
                            <button className='e-control e-btn' onClick={btnClick1}>Add Pane</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-6 mt-40">
                    <b>delete splitter</b>
                    <div className="App">
                        <SplitterComponent id="separator" height="200px" width='600px' ref={(splitter) => { splitterInstanceDelete = splitter; }}>
                            <PanesDirective>
                                <PaneDirective size='200px' content={firstPane}/>
                                <PaneDirective size='200px' content={secondPane}/>
                                <PaneDirective size='200px' content={thirdPane}/>
                            </PanesDirective>
                        </SplitterComponent>
                        <div id='removeButton'>
                            <button className='e-control e-btn' onClick={ btnClickDelete }>Remove Pane</button>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
}

export default Splitter;
