import "materialize-css";
import { Button } from "../Buttons/Button";
import "./Sidebar.scss";

export const Sidebar = ({ sidebarOpen, onSidebarOpen }) => {
  return (
    <div
      className={sidebarOpen ? "sidebar-container close" : "sidebar-container"}
    >
      <i
        className={
          sidebarOpen
            ? "menu-btn material-icons left"
            : "menu-btn material-icons right"
        }
        onClick={onSidebarOpen}
      >
        menu
      </i>
      <h2
        className={
          !sidebarOpen ? "profile-info-visible" : "profile-info-hidden"
        }
      >
        Sidebar
      </h2>
      <div className="btn-container">
        <Button
          noBorder={true}
          title={"Доска"}
          icon={<i className="material-icons left">dashboard</i>}
        />
        <Button
          noBorder={true}
          title={"Рабочие"}
          icon={<i className="material-icons left">group</i>}
        />
        <Button
          noBorder={true}
          title={"Расходы"}
          icon={<i className="material-icons left">call_made</i>}
        />
        <Button
          noBorder={true}
          title={"Доходы"}
          icon={<i className="material-icons left">call_received</i>}
        />
      </div>
    </div>
  );
};
