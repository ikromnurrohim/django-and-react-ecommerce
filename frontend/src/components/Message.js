import React from 'react'
import { Alert } from 'react-bootstrap'

function Message({ variant, children }) {
    return (
        <Alert variant={variant} style={{ marginTop: '10px', textAlign: 'center'}}>
            {children}
        </Alert>
    )
}

export default Message
