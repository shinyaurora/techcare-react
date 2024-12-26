import PatiendDetailInfo from "./detail-info"
import AvatarImage from "../../assets/images/avatar/avatar-jessica-2x.png"

const PatientDetail = () => {

    const data = {
        "Date Of Birth": "August 23, 1996",
        "Gender": "Female",
        "Contact Info.": "(415) 555-1234",
        "Emergency Contacts": "(415) 555-5678",
        "Insurance Provider": "Sunrise Health Assurance"
    }

    return (
        <div className="min-h-96 w-full rounded-2xl bg-white py-8 ">
            <div className="flex flex-col items-center mb-8">
                <img src={AvatarImage} className="w-[200px] h-[200px] mb-[24px]"/>
                <p className="text-2xl text-[#072635] font-extrabold font-manrope">Jessica Taylor</p>
            </div>
            <div className="pl-5">
                {
                    Object.entries(data).map((value, key) => <PatiendDetailInfo key={key} cate={value[0]} value={value[1]}/>)
                }
            </div>
            <div className="flex flex-col items-center">
                <p className="mt-4 bg-[#01F0D0] text-center w-[220px] h-[41px] rounded-[20px] text-[14px] pt-[11px] font-bold">Show All Information</p>
            </div>
        </div>
    )
}

export default PatientDetail
