import DiagnosticDataList from "./data-list"

const DiagnosticList = () => {
    return (
        <div className="min-h-96 w-full rounded-2xl bg-white p-5">
            <p className="text-[24px] font-bold">Diagnostic List</p>
            <DiagnosticDataList />
        </div>
    )
}

export default DiagnosticList
