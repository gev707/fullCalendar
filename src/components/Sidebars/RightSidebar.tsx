import React, {FC} from 'react';
import LogoSidebarIcon from "../../assets/icons/imageIcons/LogoSidebarIcon";

import NatificationIcon from "../../assets/icons/NatificationIcon";
import TariffIcon from "../../assets/icons/TariffIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import {Button} from "../Button/Button";

const  RightSidebar:FC =()=> {
    return (
        <div className="sidebar">
            <div className='right-sidebar'>
                <div className="title">
                    <div aria-hidden className='toggle-btn'><NatificationIcon /></div>
                    <div className='title__name'>
                        <div>Марина Липова</div>
                        <div className='title__tariff'><TariffIcon /> <span>Тариф Basic</span></div>
                    </div>
                </div>
                <div className='right-sidebar__filter'>
                    <p>Фильтры</p>
                    <Button className='button btn'><DeleteIcon /></Button>
                </div>
            </div>
        </div>
    );
}

export default RightSidebar;