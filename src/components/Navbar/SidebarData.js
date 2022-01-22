import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav:[]
  },
  {
    title: 'About_Us',
    path: '/about_us',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'About School',
        path: '/About_School',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: `Principle's Message`,
        path: '/Principles_message',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Motto, Vision and Mission',
        path: '/Motto_Vision_Mission',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Prayers',
        path: '/Prayers',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Infrastructure',
        path: '/Infrastructure',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Information',
    path: '/Information',
    icon: <FaIcons.FaCartPlus />,
    subNav: [
      {
        title: 'Fee Structure',
        path: '/Fee_structure',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: `Notices`,
        path: '/Notices',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Assessment Pattern',
        path: '/Assessment_pattern',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Teaching Methodology',
        path: '/Teaching_methadology',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'School Report',
        path: '/School_report',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Mandatory Disclosures',
        path: '/Mandatory_disclosures',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Calendar',
        path: '/Calendar',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Year Plans',
        path: '/Year_plans',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'School Bearers',
    path: '/School_Bearers',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Managing Committee',
        path: '/Managing_committee',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Our Manager',
        path: '/Our_manager',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Our Principal',
        path: '/Our_principal',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Teaching Staff',
        path: '/Teaching_staff',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Non Teaching Staff',
        path: '/Non_Teaching_staff',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Committees and Club',
        path: '/Committee_clubs',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Student Cabinet',
        path: '/Student_cabinet',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Rules',
    path: '/Rules',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Rules of Discipline',
        path: '/Rules_of_discipline',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Rules for Payment of fee',
        path: '/Rules_for_payment_of_fee',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'leave Rules',
        path: '/Leave_rules',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'School Library',
        path: '/School_library',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'School Uniform',
        path: '/School_uniform',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'School Hours',
        path: '/School_hours',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Achievements',
    path: '/Achievements',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'CBSE X Toppers',
        path: '/X_toppers',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'CBSE XII Toppers',
        path: '/XII_toppers',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Pre-Primary',
        path: '/Pre_primary',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Primary',
        path: '/Primary',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Sr. Secondary',
        path: '/Secondary',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Passout Students',
        path: '/Passout_students',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Photo_Gallery',
    path: '/Photo_gallery',
    icon: <IoIcons.IoMdHelpCircle />,
    subNav:[]
  },
  {
    title: 'Contact',
    path: '/Contact',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Contact',
        path: '/Contact',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Apply for Jobs',
        path: '/Apply_for_jobs',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Apply for Admission',
        path: '/Apply_for_admission',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
];
