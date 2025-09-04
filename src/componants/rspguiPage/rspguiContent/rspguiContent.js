import React from "react";
import './rspguiContent.css'
import '../../../variables.css'
import UsageGraph from "./usage_graph";

function RspguiContent() {

    let memory_usage = 4000;
    let cpu_usage = 50;
    
    return(
        <div className={"container_rspgui"}>
            <h1>Graphic Interface for Raspberry</h1>
            <div className="watcher">
                <UsageGraph usage={memory_usage} type="memory"/>
                <UsageGraph usage={cpu_usage} type="cpu"/>
            </div>
        </div>
    )
}

export default RspguiContent