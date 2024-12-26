import downloadImage from "../../assets/images/icon/icon-download.svg"

const LabResult = () => {
    const data = [
        "Blood Tests", "CT Scans", "Radiology Reports", "X-Rays", "Urine Test"
    ]
    return (
        <div className="min-h-96 w-full rounded-2xl bg-white">
            <p>Lab Results</p>
            {
                data.map((ele, key) =>
                    <div key={key} className="flex justify-between">
                        <p>{ele}</p>
                        <img src={downloadImage} />
                    </div>
                )
            }
        </div>
    )
}

export default LabResult;