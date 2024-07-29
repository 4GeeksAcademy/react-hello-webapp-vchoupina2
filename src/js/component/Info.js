//ler import hook useContext
//2do import Context
//3r llamar a store y actionsimport React from "react";

import React, {useContext} from "react"
import { Context } from "../store/appContext"

const Info = () => {

    const {store, actions} = useContext(Context)
    console.log(store);
    return (
        <div>
            <h1>Info</h1>
        </div>
    )
}

export default Info