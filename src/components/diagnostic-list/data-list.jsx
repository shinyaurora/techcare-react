

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
        <table>
            <thead className="">
                <td>
                    Problem/Diagnosis
                </td>
                <td>
                    Description
                </td>
                <td>
                    Status
                </td>
            </thead>
            <tbody>
                {
                    data.map((ele, key) => 
                        <tr className="" key={key}>
                            <td>
                                {ele.problem}
                            </td>
                            <td>
                                {ele.description}
                            </td>
                            <td>
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