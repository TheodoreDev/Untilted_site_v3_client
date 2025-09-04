import React from "react";

function UsageGraph(props) {
    const { usage, type } = props;
    let adjustedUsage;
    if (type === "memory") {
        adjustedUsage = usage > 8000 ? 8000 : usage;
    } else if (type === "cpu") {
        adjustedUsage = usage > 100 ? 100 : usage;
    }

    if (type == "memory") {
        return (
            <div className="usage-graph">
                <div className="partial-circle" style={{
                    background: `conic-gradient(
                        transparent 36deg,
                        #2563eb 36deg,
                        #2563eb calc((((70*${adjustedUsage})/8000 + 10)/100)*360deg),
                        transparent calc((((70*${adjustedUsage})/8000 + 10)/100)*360deg)
                    )`
                }}>
                    <div className="inner-circle">
                        {adjustedUsage}
                    </div>
                </div>
            </div>
        );
    } else if (type == "cpu") {
        return (
            <div className="usage-graph">
                <div className="partial-circle" style={{
                    background: `conic-gradient(
                        transparent 36deg,
                        #2563eb 36deg,
                        #2563eb calc(((70*${adjustedUsage}/100 + 10)/100)*360deg),
                        transparent calc(((70*${adjustedUsage}/100 + 10)/100)*360deg)
                    )`
                }}>
                    <div className="inner-circle">
                        {adjustedUsage}%
                    </div>
                </div>
            </div>
        );
    }
}

export default UsageGraph;
