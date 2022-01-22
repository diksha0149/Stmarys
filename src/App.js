import './App.css';
import Sidebar from './components/Navbar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact/Contact';
import Rules from './components/Rules';
import Information from './components/Information';
import Photo_Gallery from './components/Photo_gallery';
import Achievements from './components/Achievements';
import About from './components/About';
import Fee_structure from './components/Information/Fee_structure';
import Notices from './components/Information/Notices';
import Assessment_pattern from './components/Information/Assessment_pattern';
import Teaching_methadology from './components/Information/Teaching_methodology';
import School_report from './components/Information/School_report';
import Mandatory_disclosure from './components/Information/Mandatory_disclosures';
import Calendar from './components/Information/Calendar';
import Year_plans from './components/Information/Year_Plans';
import Rules_for_payment_of_fee from './components/Rules/Rules_for_payment_of_fee';
import Rules_of_discipline from './components/Rules/Rules_of_discipline';
import Leave_rules from './components/Rules/Leave_rules';
import School_library from './components/Rules/School_library';
import School_uniform from './components/Rules/School_uniform';
import School_hours from './components/Rules/School_hours';
import About_School from './components/Aboutus/About_School';
import Principles_message from './components/Aboutus/Principles_message';
import Motto_Vision_Mission from './components/Aboutus/Motto_Vision_Mission';
import Prayers from './components/Aboutus/Prayers';
import Infrastructure from './components/Aboutus/Infrastructure';
import X_toppers from './components/Achievements/X_toppers';
import XII_toppers from './components/Achievements/XII_toppers';
import Pre_primary from './components/Achievements/Pre_primary';
import Primary from './components/Achievements/Primary';
import Secondary from './components/Achievements/Secondary';
import Passout_students from './components/Achievements/Passout_students';
import School_Bearers from './components/School_Bearers';
import Managing_committee from './components/Office_Bearers/Managing_committee';
import Our_manager from './components/Office_Bearers/Our_manager';
import Our_principal from './components/Office_Bearers/Our_principal';
import Teaching_staff from './components/Office_Bearers/Teaching_staff';
import Non_Teaching_staff from './components/Office_Bearers/Non_Teaching_staff';
import Committee_clubs from './components/Office_Bearers/Committees_&_club';
import Student_cabinet from './components/Office_Bearers/Student_cabinet';
import Apply_for_admission from './components/Contact/Apply_for_admission';
import Apply_for_jobs from './components/Contact/Apply_for_jobs';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home} />

        <Route path='/About_us' exact component={About} />
        <Route path='/About_School' exact component={About_School} />
        <Route path='/Principles_message' exact component={Principles_message} />
        <Route path='/Motto_Vision_Mission' exact component={Motto_Vision_Mission} />
        <Route path='/Prayers' exact component={Prayers} />
        <Route path='/Infrastructure' exact component={Infrastructure} />
        
        
        <Route path='/Rules' exact component={Rules} />
        <Route path='/Rules_for_payment_of_fee' exact component={Rules_for_payment_of_fee} />
        <Route path='/Rules_of_discipline' exact component={Rules_of_discipline} />
        <Route path='/Leave_rules' exact component={Leave_rules} />
        <Route path='/School_library' exact component={School_library} />
        <Route path='/School_uniform' exact component={School_uniform} />
        <Route path='/School_hours' exact component={School_hours} />
        
        
        <Route path='/Achievements' exact component={Achievements} />
        <Route path='/X_toppers' exact component={X_toppers} />
        <Route path='/XII_toppers' exact component={XII_toppers} />
        <Route path='/Pre_primary' exact component={Pre_primary} />
        <Route path='/Primary' exact component={Primary} />
        <Route path='/Secondary' exact component={Secondary} />
        <Route path='/Passout_students' exact component={Passout_students} />
       
        <Route path='/Information' exact component={Information} />
        <Route path='/Fee_structure' exact component={Fee_structure} />
        <Route path='/Notices' exact component={Notices} />
        <Route path='/Assessment_pattern' exact component={Assessment_pattern} />
        <Route path='/Teaching_methadology' exact component={Teaching_methadology} />
        <Route path='/School_report' exact component={School_report} />
        <Route path='/Mandatory_disclosures' exact component={Mandatory_disclosure} />
        <Route path='/Calendar' exact component={Calendar} />
        <Route path='/Year_plans' exact component={Year_plans} />

        <Route path='/School_Bearers' exact component={School_Bearers} />
        <Route path='/Managing_committee' exact component={Managing_committee} />
        <Route path='/Our_manager' exact component={Our_manager} />
        <Route path='/Our_principal' exact component={Our_principal} />
        <Route path='/Teaching_staff' exact component={Teaching_staff} />
        <Route path='/Non_Teaching_staff' exact component={Non_Teaching_staff} />
        <Route path='/Committee_clubs' exact component={Committee_clubs} />
        <Route path='/Student_cabinet' exact component={Student_cabinet} />

        <Route path='/Photo_gallery' exact component={Photo_Gallery} />
        <Route path='/Contact' exact component={Contact} />
        <Route path='/Apply_for_admission' exact component={Apply_for_admission} />
        <Route path='/Apply_for_jobs' exact component={Apply_for_jobs} />
      </Switch>
    </Router>
  );
}

export default App;
