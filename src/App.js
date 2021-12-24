import './App.css';
import Header from './Header';
import 'react-calendar/dist/Calendar.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {useEffect} from "react"
import {bindActionCreators} from 'redux';
import {actionCreators} from "./state/index";
import {useDispatch} from 'react-redux';
import Tooltip from '@mui/material/Tooltip';
import Footer from './Footer';

function App() {
    let month = useSelector(state => state.month)
    let year = useSelector(state => state.year)
    let country = useSelector(state => state.country)
    let event = useSelector(state => state.event)
    const dispatch = useDispatch()
    const {Event} = bindActionCreators(actionCreators,dispatch);
    
    month = localStorage.getItem("month");
    year = localStorage.getItem("year");
    if(month === "101" )
    {
      let date =new Date();
      month = date.getMonth()+1;
    }
    if(year === "101")
    {
      let date =new Date();
      year = date.getFullYear();
    }
    useEffect(() => {
      axios.get('https://calendarific.com/api/v2/holidays?&api_key=aba53bbdc04bc38fb0a95a60835affa2e65af9d5&country='+String(country)+'&year='+String(year)).then((response) => {
        Event(response.data)
      });
      }, [country]);
      
      let events = []
      if(event!=null)
      {
        let Color="yellow";
        for(let i=0; i<55; i++)
        {
          if(event.response.holidays[i].type[0]==="Common local holiday")
          {
            Color="DarkCyan";
          }
          else if(event.response.holidays[i].type[0]==="Optional holiday")
          {
            Color='purple';
          }
          else if(event.response.holidays[i].type[0]==="Season")
          {
            Color="DarkSeaGreen";
          }
          else if(event.response.holidays[i].type[0]==="Observance")
          {
            Color="Chocolate";
          }
          else if(event.response.holidays[i].type[0]==="National holiday")
          {
            Color="DarkGreen";
          }
          events.push({title: event.response.holidays[i].name, date:event.response.holidays[i].date.iso, color:Color})
        }
      }
    return (
      <>
        <Header></Header>
      <div className='container1'>
         <FullCalendar
          timeZone= 'UTC'
          initialDate={new Date(Number(year),Number(month),1)}
          height={565}
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          firstDay={1}
          weekends={true}
          events={events}
        />
      </div>
      <div className='colorRep'>
      Event Color Representative
        <ul>
        <Tooltip title="DarkCyan">
        <li className='one'>Common local holiday</li>
        </Tooltip>
        <Tooltip title="purple">
        <li className='two'>Optional holiday</li>
        </Tooltip>
        <Tooltip title="DarkSeaGreen">
        <li className='three'>Season</li>
        </Tooltip>
        <Tooltip title="Chocolate">
        <li className='four'>Observance</li>
        </Tooltip>
        <Tooltip title="DarkGreen">
        <li className='five'>National holiday</li>
        </Tooltip>
        </ul>
      </div>
      <Footer/>
      </>
    );
}
export default App;
