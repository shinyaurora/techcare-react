import downloadImage from "../../assets/images/icon/icon-download.svg"

const LabResult = () => {
    const data = [
        "Blood Tests", "CT Scans", "Radiology Reports", "X-Rays", "Urine Test"
    ]
    return (
        <div className="min-h-90 w-full rounded-2xl bg-white p-5">
            <p className="text-[24px] font-bold mb-4">Lab Results</p>
            {
                data.map((ele, key) =>
                    <div key={key} className="flex justify-between py-[11px] px-4">
                        <p className="text-[13px]">{ele}</p>
                        <img src={downloadImage} className="w-[20px] h-[20px]"/>
                    </div>
                )
            }
        </div>
    )
}

export default LabResult;