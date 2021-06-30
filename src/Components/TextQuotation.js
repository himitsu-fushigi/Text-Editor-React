import React from 'react'

// @dev material ui components
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { Button } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';

export default function TextQuotation() {
    return (
        <div className="tabBar__textQuotation">
            {/* @dev text quote */}
            <Button>
                <FormatQuoteIcon />
            </Button>
            
            {/* @dev text code */}
            <Button>
                <CodeIcon />
            </Button>
        </div>
    )
}
