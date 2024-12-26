

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
                <tr>
                    <th>
                        Problem/Diagnosis
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Status
                    </th>
                </tr>
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