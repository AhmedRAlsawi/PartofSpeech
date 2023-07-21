import React from 'react'
import { Helmet } from 'react-helmet-async'

function SEO({ myTitle, myDesc, }) {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{myTitle}</title>
            <meta name="description" content={myDesc} />
        </Helmet>
    )
}

export default SEO