import HeartBPM from "../../assets/images/logo/HeartBPM.svg"
import respiratory from "../../assets/images/logo/respiratory.svg"
import temperature from "../../assets/images/logo/temperature.svg"

const DetailColorComponent = ({cate, value, state}) => {

    const checkCate = () => {
        if(cate == "Respiratory Rate") return HeartBPM
        else if(cate == "Temperature") return respiratory
        else return temperature
    }
    const checkColor = () => {
        let res = "rounded-2xl p-4 w-[228px] h-[242px] "
        if(cate == "Respiratory Rate") res += "bg-[#E0F3FA]"
        else if(cate == "Temperature") res += "bg-[#FFE6E9]"
        else res += "bg-[#FFE6F1]"
        return res
    }
    return (
        <div className={checkColor()}>
            <img src={checkCate()} className="w-[96px] h-[96px] rounded-full"/>
            <p>{cate}</p>
            <p>{value}</p>
            <p>{state}</p>
        </div>   
    )
}

export default DetailColorComponent