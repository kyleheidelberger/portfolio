import React from 'react'
import Layout from '../components/layout'
// import { Document, Page } from 'react-pdf'
import { Document, Page } from "react-pdf/dist/entry.webpack";

import resume from '../assets/images/KHeidelberger_Resume.pdf'

const ResumePage = () => (
  <Layout>
    <div id="main">
        <p>My Resumé</p>
        <Document file={resume} id="resume">
            <Page pageNumber={1} />
        </Document>
    </div>
  </Layout>
)

export default ResumePage
