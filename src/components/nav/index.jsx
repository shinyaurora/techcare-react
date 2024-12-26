import Logo from "../../assets/images/logo/logo-2x.png";

import HomeIcon from "../../assets/images/icon/icon-home.svg";
import GroupIcon from "../../assets/images/icon/icon-group.svg";
import CalendarIcon from "../../assets/images/icon/icon-calendar.svg";
import ChatIcon from "../../assets/images/icon/icon-chat.svg";
import CreditIcon from "../../assets/images/icon/icon-credit.svg";
import SettingsIcon from "../../assets/images/icon/icon-settings.svg";
import MoreVertIcon from "../../assets/images/icon/icon-more-vert.svg";

import DefaultAvatar from "../../assets/images/avatar/avatar-default.png";

import clsx from "clsx";

const Nav = () => {

    const navLinks = [
        {
            title: "Overview",
            icon: HomeIcon
        },
        {
            title: "Patients",
            icon: GroupIcon
        },
        {
            title: "Schedule",
            icon: CalendarIcon
        },
        {
            title: "Message",
            icon: ChatIcon
        },
        {
            title: "Transactions",
            icon: CreditIcon
        },
    ]

    return (
        <div className="flex items-center justify-between bg-white rounded-full w-full h-20 px-8">
            <img src={Logo} className="h-10 w-auto" />
            <div className="flex items-center gap-4">
                {
                    navLinks.map((item, idx) => {
                        return (
                            <div
                                className={clsx(
                                    "flex items-center gap-2 px-4 py-2 rounded-full text-primary",
                                    idx === 1 && "bg-[#01F0D0]"
                                )}
                                key={idx}>
                                <img src={item.icon} className="w-4 h-4" />
                                <span className="text-sm font-semibold">{ item.title }</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                    <img src={DefaultAvatar} className="w-12 h-12" />
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-primary">Dr. Jose Simmons</span>
                        <span className="text-xs text-secondary">General Practitioner</span>
                    </div>
                </div>
                <div className="w-[0.5px] h-10 bg-black/10" />
                <div className="flex items-center gap-3">
                    <img src={SettingsIcon} />
                    <img src={MoreVertIcon} />
                </div>
            </div>
        </div>
    )
}

export default Nav;