import { Button } from '@material-ui/core'
import React from 'react'

// @dev material ui components
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

export default function TextListing() {
    return (
        <div className="tabBar__textListing">
            {/* @dev bullet list */}
            <Button>
                <FormatListBulletedIcon />
            </Button>
            
            {/* @dev bullet list numbered */}
            <Button>
                <FormatListNumberedIcon />
            </Button>
        </div>
    )
}
