import DetailColorComponent from "./detail-colorcomponent"

const DiagnosisHistory = () => {

    const data = [
        {
            cate: "Respiratory Rate",
            value: "20 bpm",
            state: "Normal"
        },
        {
            cate: "Temperature",
            value: "98.6°F",
            state: "Normal"
        },
        {
            cate: "Heart Rate",
            value: "78 bpm",
            state: "Lower than Average"
        },
    ]

    return (
        <div className="min-h-96 w-full rounded-2xl bg-white">
            
            <div className="flex">
            {
                data.map((ele, key) => 
                    <DetailColorComponent cate={ele.cate} value={ele.value} state={ele.state} key={key}/>
                )
            }
            </div>
            
        </div>
    )
}

export default DiagnosisHistory;