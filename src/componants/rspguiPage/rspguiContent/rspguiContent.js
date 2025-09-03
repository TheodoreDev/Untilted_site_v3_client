import React from "react";
import './rspguiContent.css'
import '../../../variables.css'

function RspguiContent() {

    let memory_usage = 4000;
    if (memory_usage > 8000) {
        memory_usage = 8000;
    }
    
    return(
        <div className={"container_rspgui"}>
            <h1>Graphic Interface for Raspberry</h1>
            <div className="watcher">
                <div className="memory_usage">
                    <div className="partial-circle" style={{
                        background: `conic-gradient(
                            transparent 36deg,
                            #2563eb 36deg,
                            #2563eb calc((((70*${memory_usage})/8000 + 10)/100)*360deg),
                            transparent calc((((70*${memory_usage})/8000 + 10)/100)*360deg)
                    )`}} >
                        <div className="inner-circle">
                            {memory_usage}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RspguiContent