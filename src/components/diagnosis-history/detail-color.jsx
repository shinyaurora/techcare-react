import HeartBPMIcon from "../../assets/images/logo/HeartBPM.svg"
import RespiratoryIcon from "../../assets/images/logo/respiratory.svg"
import TemperatureIcon from "../../assets/images/logo/temperature.svg"

const DetailColor = () => {
    const data = [
        {
            cate: "Respiratory Rate",
            value: "20 bpm",
            state: "Normal",
            icon: RespiratoryIcon,
            bgColor: "#E0F3FA"
        },
        {
            cate: "Temperature",
            value: "98.6°F",
            state: "Normal",
            icon: TemperatureIcon,
            bgColor: "#FFE6E9"
        },
        {
            cate: "Heart Rate",
            value: "78 bpm",
            state: "Lower than Average",
            icon: HeartBPMIcon,
            bgColor: "#FFE6F1"
        },
    ]

    return (
        <div className="flex gap-4">
            {
                data.map((item, idx) => {
                    return (
                        <div className={`flex-1 flex flex-col rounded-lg bg-[${item.bgColor}] p-4`} key={idx}>
                            <img src={item.icon} className={`w-24 h-24 mb-2`} />
                            <span className="text-primary text-base">{item.cate}</span>
                            <span className="text-primary text-3xl font-black">{item.value}</span>
                            <span className="text-primary text-sm mt-2">{item.state}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DetailColor