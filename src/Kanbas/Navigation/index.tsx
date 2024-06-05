import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { useLocation } from "react-router";


export default function KanbasNavigation() {
  const { pathname } = useLocation();

  const getNavClass = (segment: string) => {
    return pathname.includes(segment) ? "bg-white text-black" : "bg-black text-white";
  };

  function getIconClass(arg0: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0">
        <img src="/images/NEU.png" width="75px" /> 
      </a>
      <a id="wd-account-link" href="#/Kanbas/Account"
        className={`list-group-item text-center border-0 ${getNavClass("Account")}`}>
        <FaRegCircleUser className={`fs-1 ${getIconClass("Account")}`} /><br />
        Account 
      </a>
      <a id="wd-dashboard-link" href="#/Kanbas/Dashboard"
        className={`list-group-item text-center border-0 ${getNavClass("Dashboard")}`}>
        <AiOutlineDashboard className={`fs-1 ${getIconClass("Dashboard")}`} /><br />
        Dashboard 
      </a>
      <a id="wd-course-link" href="#/Kanbas/Courses"
        className={`list-group-item text-center border-0 ${getNavClass("Courses")}`}>
        <LiaBookSolid className={`fs-1 ${getIconClass("Courses")}`} /><br />
        Courses 
      </a>
      <a id="wd-calendar-link" href="#/Kanbas/Calendar"
        className={`list-group-item text-center border-0 ${getNavClass("Calendar")}`}>
        <IoCalendarSharp className={`fs-1 ${getIconClass("Calendar")}`} /><br />
        Calendar 
      </a>
      <a id="wd-inbox-link" href="#/Kanbas/Inbox"
        className={`list-group-item text-center border-0 ${getNavClass("Inbox")}`}>
        <FaInbox className={`fs-1 ${getIconClass("Inbox")}`} /><br />
        Inbox 
      </a>
      <a id="wd-labs-link" href="#/Kanbas/Labs"
        className={`list-group-item text-center border-0 ${getNavClass("Labs")}`}>
        <IoMdSettings className={`fs-1 ${getIconClass("Labs")}`} /><br />
        Labs 
      </a>
    </div>
  );
}