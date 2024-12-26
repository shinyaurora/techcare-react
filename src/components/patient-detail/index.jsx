
const PatientDetail = () => {

    const data = {
        "Date Of Birth": "August 23, 1996",
        "Gender": "Female",
        "Contact Info.": "(415) 555-1234",
        "Emergency Contacts": "(415) 555-5678",
        "Insurance Provider": "Sunrise Health Assurance"
    }

    return (
        <div>
            <div>
                <img></img>
                <p>Jessica Taylor</p>
            </div>
            <div>
                {
                    Object.entries(data).map((key, value) => <PatiendDetailInfo cate={key} value={value}/>)
                }
                <div>Show All Information</div>
            </div>
        </div>
    )
}

export default PatientDetail
