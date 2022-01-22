
import React, { useState } from "react";
import "./Sidestyle.css";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { NavLink } from "react-router-dom";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
 
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  position:relative;
  left:-2%;
  justify-content: flex-end;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  display: block;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  overflow-y: auto;
`;

const Sidebar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="earlier">
        <div class="menu-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About_School">About_Us</Link>
              <div class="dropdown-menu">
                <ul>
                  <li><Link to="/About_School">About School</Link></li>
                  <li><Link to="/Principles_message">Principle's Message</Link></li>
                  <li><Link to="/Motto_Vision_Mission">Motto, Vision and Mission</Link></li>
                  <li><Link to="/Prayers">Prayers</Link></li>
                  <li><Link to="/Infrastructure">Infrastructure</Link></li>
                </ul>
              </div>
            </li>
            <li><Link to="Information">Information</Link>

              <div class="dropdown-menu">
                <ul>
                  <li><Link to="/Fee_structure">Fee Structure</Link></li>
                  <li><Link to="/Notices">Notices</Link></li>
                  <li><Link to="/Assessment_pattern">Assessment Pattern</Link></li>
                  <li><Link to="/Teaching_methadology">Teaching Methodology</Link></li>
                  <li><Link to="/School_report">School Report</Link></li>
                  <li><Link to="/Mandatory_disclosures">Mandatory Disclosures</Link></li>
                  <li><Link to="/Calendar">Calendar</Link></li>
                  <li><Link to="/Year_plans">Year Plans</Link></li>
                </ul>
              </div>
            </li>
            <li><Link to="/School_Bearers">School Bearers</Link>
              <div class="dropdown-menu">
                <ul>
                  <li><Link to="/Managing_committee">Managing Committee</Link></li>
                  <li><Link to="/Our_manager">Our Manager</Link></li>
                  <li><Link to="/Our_principal">Our Principal</Link></li>
                  <li><Link to="/Teaching_staff">Teaching Staff</Link></li>
                  <li><Link to="/Non_Teaching_staff">Non Teaching Staff</Link></li>
                  <li><Link to="/Committee_clubs">Committees and Club</Link></li>
                  <li><Link to="/Student_cabinet">Student Cabinet</Link></li>
                </ul>
              </div>
            </li>
            <li><Link to="/Rules">Rules</Link>
              <div class="dropdown-menu">
                <ul>
                  <li><Link to="/Rules_of_discipline">Rules of Discipline</Link></li>
                  <li><Link to="/Rules_for_payment_of_fee">Rules for Payment of fee</Link></li>
                  <li><Link to="/Leave_rules">leave Rules</Link></li>
                  <li><Link to="/School_library">School Library</Link></li>
                  <li><Link to="/School_uniform">School Uniform</Link></li>
                  <li><Link to="/School_hours">School Hours</Link></li>
                </ul>
              </div>
            </li>
            <li><Link to="/Achievements">Achievements</Link>
              <div class="dropdown-menu">
                <ul>
                  <li><Link to="/X_toppers">CBSE X Toppers</Link></li>
                  <li><Link to="/XII_toppers">CBSE XII Toppers</Link></li>
                  <li><Link to="/Pre_primary">Pre-Primary</Link></li>
                  <li><Link to="/Primary">Primary</Link></li>
                  <li><Link to="/Secondary">Sr. Secondary</Link></li>
                  <li><Link to="/Passout_students">Passout Students</Link></li>
                </ul>
              </div>
            </li>
            <li><Link to="/Photo_gallery">Photo_Gallery</Link></li>
            <li><Link to="/Contact">Contact us</Link>
              <div class="dropdown-menu">
                <ul>
                  <li><Link to="/Contact">Contact</Link></li>
                  <li><Link to="/Apply_for_jobs">Apply for Jobs</Link></li>
                  <li><Link to="/Apply_for_admission">Apply for Admission</Link></li>
                </ul>
              </div></li>
          </ul>
        </div>
      </div>
      <div className="late">
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} onClick={showSidebar}/>;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      </div>

    </>
  );
};

export default Sidebar;
