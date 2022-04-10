import React, {useEffect, useState} from 'react';
import FullCalendar, {
    EventInput,
    EventApi,
    EventClickArg,
    EventContentArg,
    formatDate,
    DateSelectArg
} from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, {DateClickArg, EventDragStartArg} from '@fullcalendar/interaction'
import classNames from "classnames";
import MsOutlookIcon from "../../assets/icons/imageIcons/MsOutlookIcon";
import GoogleCalendarIcon from "../../assets/icons/imageIcons/GoogleCalendarIcon";
import { toggleModalCalendar} from "../../store/GlobalConfigDataStore/GlobalConfigDataStore";
import {useDispatch} from "react-redux";
import {useSelectorTyped} from "../../utils/hooks";
import {RootState} from "../../store";
interface IState {
    title: string
    start?: string | Date,
    inProcess?: 'done' | 'pending' | 'future',
    isAdditional?: any
}
function Calendar() {
    const dispatch = useDispatch()
    const {eventData} = useSelectorTyped((state: RootState) => state.GlobalConfigDataStore)
    const [event,setEvent] =useState()
    useEffect(()=>{
        setEvent(eventData)
    },[])
    const handleDateSelect =(selectInfo:DateSelectArg) => {
        dispatch(toggleModalCalendar())
        const {title,inProcess,inAdditional} = eventData
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect()
        if(title){
            calendarApi.addEvent({
                id:String(new Date()),
                title,
                inProcess,
                inAdditional,
                start:selectInfo.startStr,
                end:selectInfo.endStr,
                allDay:selectInfo.allDay,
            })
        }

    }
    const renderEventsContent = (eventContent:EventContentArg)=>{
        const {inProcess,inAdditional} = eventContent.event.extendedProps;
        return (
                <div className='events'>
                    <div className='events__content'>
                         <span  className={classNames('process',{
                             'process__done': inProcess==='done',
                             'process__pending':inProcess==='pending',
                             'process__future':inProcess==='future'
                         })}/>
                        <p>{eventContent.timeText}</p>
                        <p>{eventContent.event.title}</p>
                    </div>
                    <div className='eventIcons'>{inAdditional}</div>
                </div>
            )
    }
    const handleEventClick = (clickInfo:EventClickArg) => {
      dispatch(toggleModalCalendar())
    }




    return (
        <div className='calendar'>
            <div className='demo-app-main'>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'title',
                        center: '',
                        right: 'prev,next,dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    initialView='dayGridMonth'
                    eventClick={handleEventClick}
                    eventContent={renderEventsContent}
                    eventDragStart={(e:EventDragStartArg)=>{
                        console.log(e)
                    }}
                    eventDragStop={(e:EventDragStartArg)=>{
                       console.log(e)
                    }}
                    events={event}
                    //eventsSet={handleEvents}
                    eventTextColor={'#394453'}
                    eventBackgroundColor={'none'}
                    eventBorderColor={'none'}
                    eventColor={'none'}
                    droppable={true}
                    firstDay={1}
                    weekends={true}
                    editable={true}
                    select={handleDateSelect}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    dateClick={(e:DateClickArg)=>{
                        dispatch(toggleModalCalendar())
                    }}
                />
            </div>
        </div>
    );
}

export default Calendar;
