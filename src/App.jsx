import Nav from "./components/nav";
import PatientDetail from "./components/patient-detail";
import PatientList from "./components/patient-list";

const Home = () => {
  return (
    <div className="flex flex-col p-4 gap-8">
      <div className="w-full">
        <Nav />
      </div>
      <div className="flex gap-8">
        <div className="w-80">
          <PatientList />
        </div>
        <div className="flex-1">

        </div>
        <div className="w-80">
          <PatientDetail />
        </div>
      </div>
    </div>
  )
}

export default Home;