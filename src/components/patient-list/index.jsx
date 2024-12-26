import SearchIcon from "../../assets/images/icon/icon-search.svg";
import MoreIcon from "../../assets/images/icon/icon-more-hori.svg";

import AvatarEmily from "../../assets/images/avatar/avatar-emily.png";
import AvatarRyan from "../../assets/images/avatar/avatar-ryan.png";
import AvatarBrandon from "../../assets/images/avatar/avatar-brandon.png";
import AvatarJessica from "../../assets/images/avatar/avatar-jessica.png";
import AvatarSamantha from "../../assets/images/avatar/avatar-samantha.png";
import AvatarAshley from "../../assets/images/avatar/avatar-ashley.png";
import AvatarOlivia from "../../assets/images/avatar/avatar-olivia.png";
import AvatarTyler from "../../assets/images/avatar/avatar-tyler.png";
import AvatarKevin from "../../assets/images/avatar/avatar-kevin.png";
import clsx from "clsx";

const PatientList = () => {
    const patientList = [
        {
            firstName: "Emily",
            lastName: "Williams",
            gender: "Female",
            age: 18,
            avatar: AvatarEmily
        },
        {
            firstName: "Ryan",
            lastName: "Johnson",
            gender: "Male",
            age: 45,
            avatar: AvatarRyan
        },
        {
            firstName: "Brandon",
            lastName: "Mitchell",
            gender: "Male",
            age: 36,
            avatar: AvatarBrandon
        },
        {
            firstName: "Jessica",
            lastName: "Taylor",
            gender: "Female",
            age: 28,
            avatar: AvatarJessica
        },
        {
            firstName: "Samantha",
            lastName: "Johnson",
            gender: "Female",
            age: 56,
            avatar: AvatarSamantha
        },
        {
            firstName: "Ashley",
            lastName: "Martinez",
            gender: "Female",
            age: 54,
            avatar: AvatarAshley
        },
        {
            firstName: "Olivia",
            lastName: "Brown",
            gender: "Female",
            age: 32,
            avatar: AvatarOlivia
        },
        {
            firstName: "Tyler",
            lastName: "Davis",
            gender: "Male",
            age: 19,
            avatar: AvatarTyler
        },
        {
            firstName: "Kevin",
            lastName: "Anderson",
            gender: "Male",
            age: 30,
            avatar: AvatarKevin
        },
    ]

    return (
        <div className="min-h-96 w-full rounded-2xl bg-white py-6">
            <div className="flex items-center justify-between px-4">
                <span className="text-2xl font-semibold">Patients</span>
                <img src={SearchIcon} />
            </div>
            <div className="flex flex-col mt-6">
            {
                patientList.map((item, idx) => {
                    return (
                        <div className={clsx(
                            "flex justify-between items-center p-4",
                            item.firstName.toLowerCase() === "jessica" && "bg-[#D8FCF7]"
                        )} key = { idx } >
                            <div className="flex items-center gap-2">
                                <img src={item.avatar} className="w-12 h-12" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-primary">{item.firstName} {item.lastName}</span>
                                    <span className="text-xs text-secondary">General Practitioner</span>
                                </div>
                            </div>
                            <img src={MoreIcon} />
                        </div>
                    )
                })
        }

            </div>
        </div>
    )
}

export default PatientList;