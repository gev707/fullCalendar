import { TypedUseSelectorHook, useSelector } from 'react-redux'
import {StateType} from "../../interfaces";

export const useSelectorTyped: TypedUseSelectorHook<StateType> = useSelector