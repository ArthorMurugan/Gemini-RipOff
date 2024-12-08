import './Sidebar.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';

// Reusable component for sidebar entries
// eslint-disable-next-line react/prop-types
const SidebarEntry = ({ icon, label, isExtended }) => (
  <div className="bottom-item recent-entry">
    <img src={icon} alt={`${label} icon`} />
    {isExtended && <p>{label}</p>}
  </div>
);

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      {/* Top Section */}
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="Menu Icon"
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="New Chat Icon" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="Message Icon" />
              <p>What is React ...</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <SidebarEntry icon={assets.question_icon} label="Help" isExtended={extended} />
        <SidebarEntry icon={assets.history_icon} label="History" isExtended={extended} />
        <SidebarEntry icon={assets.setting_icon} label="Activity" isExtended={extended} />
      </div>
    </div>
  );
};

export default Sidebar;
