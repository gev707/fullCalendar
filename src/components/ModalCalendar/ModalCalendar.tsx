import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/modal";
import React, {useState} from "react";
import {Button, Select} from "@chakra-ui/react";
import {toggleModalCalendar,setEventData} from "../../store/GlobalConfigDataStore/GlobalConfigDataStore";
import {useSelectorTyped} from "../../utils/hooks";
import {RootState} from "../../store";
import {useDispatch} from "react-redux";

const ModalCalendar =()=> {
    const dispatch = useDispatch()
    const { toggleModal } = useSelectorTyped(
        (state: RootState) => state.GlobalConfigDataStore
    )
    const [overlay, setOverlay] = React.useState(<ModalOverlay />)
    const [eventTitle,setEventTitle] = useState('')
    const [eventProcess,setEventProcess] = useState('')
    const [eventAdditional,setEventAdditional] = useState('')

    const closeModal = () => {
        dispatch(toggleModalCalendar())
    }
    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )
    const onEventChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setEventTitle(e.target.value)
    }
    const onProcessChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setEventProcess(e.target.value)
    }
    const onAdditionalChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setEventAdditional(e.target.value)
    }
    const onSave = () => {
        const eventData = {
            title:eventTitle,
            inProcess:eventProcess,
            inAdditionalAdditional:eventAdditional
        }
        dispatch(setEventData(eventData))
        dispatch(toggleModalCalendar())
    }
    return (
        <>
            <Modal isCentered isOpen={toggleModal} onOpen={OverlayTwo}  onClose={closeModal}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Create Event</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Select onChange={onEventChange} variant='flushed' placeholder='Add event'>
                            <option value='Business Meeting'>Business Meeting</option>
                            <option value='Designer Meeting'>Designer Meeting</option>
                            <option value='Lunch'>Lunch</option>
                        </Select>
                        <Select onChange={onAdditionalChange} variant='flushed' placeholder='meeting from'>
                            <option value='Zuzan'>Zuzan</option>
                            <option value='Google'>Google</option>
                            <option value='MsOutBook'>MsOutBook</option>
                            <option value='Zoom'>Zoom</option>
                        </Select>
                        <Select onChange={onProcessChange} variant='flushed' placeholder='process'>
                            <option value='done'>Finished</option>
                            <option value='pending'>Actually</option>
                            <option value='future'>In future</option>
                        </Select>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onSave}>Save Event</Button>
                        <Button onClick={closeModal}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalCalendar