

const DiagnosticDataList = () => {
    const data = [
        {
            problem: 'hypertension',
            description: 'Chronic High Blood Pressure',
            status: 'Under Observation'
        },
        {
            problem: 'Type 2 Diabetes',
            description: 'Insulian resistance and elavated blood sugar',
            status: 'Cured'
        },
        {
            problem: 'hypertension',
            description: 'Chronic High Blood Pressure',
            status: 'Under Observation'
        },
        {
            problem: 'Type 2 Diabetes',
            description: 'Insulian resistance and elavated blood sugar',
            status: 'Cured'
        },
    ]

    return (
        <table className="mt-[40px] w-full">
            <thead>
                <tr className="h-[48px] text-[14px] font-bold">
                    <th className="text-left pl-5 rounded-l-[24px] bg-[#F6F7F8]">
                        Problem/Diagnosis
                    </th>
                    <th className="text-left pl-5 bg-[#F6F7F8]">
                        Description
                    </th>
                    <th className="text-left pl-5 rounded-r-[24px] bg-[#F6F7F8]">
                        Status
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((ele, key) => 
                        <tr className="border-b text-[14px]" key={key}>
                            <td className="pl-5 py-3">
                                {ele.problem}
                            </td>
                            <td className="pl-5 py-3">
                                {ele.description}
                            </td>
                            <td className="pl-5 py-3">
                                {ele.status}
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default DiagnosticDataList