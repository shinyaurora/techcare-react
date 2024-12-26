import BirthIcon from "../../assets/images/icon/icon-birth.svg"
import FemaleIcon from "../../assets/images/icon/icon-female.svg"
import InsuranceIcon from "../../assets/images/icon/icon-insurance.svg"
import PhoneIcon from "../../assets/images/icon/icon-phone.svg"

const PatiendDetailInfo = ({cate, value}) => {

    const checkCate = () => {
        let res
        switch(cate) {
            case "Date of Birth":
                res = BirthIcon
                break
            case "Gender":
                res = FemaleIcon
                break
            case "Contact Info.":
                res = PhoneIcon
                break
            case "Emergency Contacts":
                res = PhoneIcon
                break
            case "Insurance Provider":
                res = InsuranceIcon
                break
            default:
                res = BirthIcon
        }
        return res
    }

    return (
        <div className="mb-6 flex">
            <div>
                <img src={checkCate()} className="w-[42px] h-[42px] mr-4"/>
            </div>
            <div>
                <p className="text-[14px] text-[#072635]">{cate}</p>
                <p className="text-[14px] text-[#072635] font-bold">{value}</p>
            </div>
        </div>
    )
}

export default PatiendDetailInfo