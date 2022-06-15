import React, {useEffect} from "react";
import '../DialogMessages/Messages.css'
import {DialogItem} from "./DialogItem";
import {useDispatch, useSelector} from "react-redux";
import withAuthRedirect from "../../../Utils/withAuthRedirect";
import {DispatchType, StateType} from "../../../redux/store";
import {getDialogs, getMessages} from "../../../redux/dialogsSlice";

const DialogItems: React.FC<{}> = () => {
    const dialogs = useSelector((state:StateType) => state.dialogs.dialogs)
    const dispatch = useDispatch<DispatchType>()

    useEffect(()=>{
        dispatch(getDialogs())
    },[])

    return (
            <div className='interlocutors app-block'>
                <div className='text-title'>Dialogs</div>
                {
                    dialogs.map(dialog =>
                        <DialogItem key={dialog.id} {...dialog}/>
                    )
                }
            </div>
    )
}

export default withAuthRedirect(DialogItems)