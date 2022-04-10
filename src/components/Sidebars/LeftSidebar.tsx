import React, {FC, useState} from 'react';
import {Button} from "../Button/Button";
import SizeScreenIcon from "../../assets/icons/SizeScreenIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import SaveRecordIcon from "../../assets/icons/SaveRecordIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import TariffIcon from "../../assets/icons/TariffIcon";
import PaymentIcon from "../../assets/icons/PaymentIcon";
import AdditionalIcon from "../../assets/icons/AdditionalIcon";
import LogoSidebarIcon from "../../assets/icons/imageIcons/LogoSidebarIcon";
import classNames from "classnames";

const  LeftSidebar:FC =()=> {
    const [isOpen,setIsOpen] = useState(false)

    return (
        <div className='sidebar'>
            <div onClick={()=>setIsOpen(!isOpen)} className={classNames('left-sidebar',{
                'left-sidebar__close':isOpen
                })}>
                    <div className="title">
                        <div className='title-content'><LogoSidebarIcon /><span className='items'><p>zuzan</p></span></div>
                        <div aria-hidden className='toggle-btn' onClick={()=>setIsOpen(!isOpen)}><SizeScreenIcon /></div>
                    </div>
                    <div className='nav'>
                        <ul>
                            <li><span><CalendarIcon /></span><span className='items'>Календарь</span></li>
                            <li><span><SaveRecordIcon /></span><span className='items'>Сохраненные записи</span></li>
                            <li className='active'><span><PlusIcon /></span><span className='items'>Создать встречу</span></li>
                            <span className='hr'></span>
                            <li ><span><TariffIcon /></span><span className='items'>Тариф Basic</span></li>
                            <li><span><PaymentIcon /><span className='items'>Поменять тариф</span></span></li>
                            <span className='hr'></span>
                            <li><span><AdditionalIcon /></span><span className='items'>Интеграции</span></li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}

export default LeftSidebar;