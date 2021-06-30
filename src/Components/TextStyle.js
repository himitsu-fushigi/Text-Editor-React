import React from 'react'

// @dev components from material ui
import { Button } from '@material-ui/core'
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';

export default function TextStyle() {
    return (
        <div className="tabBar__textStyle">
            {/* @dev bold */}
            <Button>
                <FormatBoldIcon />
            </Button>
            
            {/* @dev italic */}
            <Button>
                <FormatItalicIcon />
            </Button>

            {/* @dev underline */}
            <Button>
                <FormatUnderlinedIcon />
            </Button>
            
            {/* @dev strike through */}
            <Button>
                <StrikethroughSIcon />
            </Button>
        </div>
    )
}
