import React from 'react'
import './TextArea.css'

import {useDataLayerValue} from '../ContextApi/DataLayer'

export default function TextArea() {
    const [{textData}, dispatch] = useDataLayerValue();

    const handleTextChange = e => {
        dispatch({
            type: "ON_TEXT_CHANGE",
            newTextData: e.target.value
        })
    }

    return (
        <div className="textArea">
            <textarea onChange={handleTextChange} placeholder="Change the text here..."/>

            {/* @dev dangerouslySetInnerHTML is used to render the html codes directily in react js */}
            <div className="textArea__output" dangerouslySetInnerHTML={{
                __html: `<div style="display:flex;flex-wrap:wrap;align-items: baseline;">${textData}</div>`}}>
            </div>
        </div>
    )
}
