import React, {useState} from 'react';
import LeftSidebar from "../../components/Sidebars/LeftSidebar";
import RightSidebar from "../../components/Sidebars/RightSidebar";
import {useSelectorTyped} from "../../utils/hooks";
import {RootState} from "../../store";
import ModalCalendar from "../../components/ModalCalendar/ModalCalendar";
interface IMainLayout {
    children: JSX.Element
}
function MainLayout({children}: IMainLayout) {
    const { toggleModal } = useSelectorTyped(
        (state: RootState) => state.GlobalConfigDataStore
    )

    return (


        <div className='main-container'>
            {toggleModal && <ModalCalendar/>}
            <LeftSidebar/>
            {children}
            <RightSidebar />
        </div>
    );
}

export default MainLayout;