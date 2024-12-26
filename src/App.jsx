import DiagnosisHistory from "./components/diagnosis-history";
import DiagnosticList from "./components/diagnostic-list";
import LabResult from "./components/lab-result";
import Nav from "./components/nav";
import PatientDetail from "./components/patient-detail";
import PatientList from "./components/patient-list";

const Home = () => {
  return (
    <div className="container mx-auto">

      <div className="flex flex-col p-4 gap-8">
        <div className="w-full">
          <Nav />
        </div>
        <div className="flex gap-8">
          <div className="w-80">
            <PatientList />
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <DiagnosisHistory />
            <DiagnosticList />
          </div>
          <div className="w-80 flex flex-col gap-8">
            <PatientDetail />
            <LabResult />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;