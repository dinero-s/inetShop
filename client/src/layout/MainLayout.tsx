import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'

type Props = {
    children: any
}

export default function MainLayout({children}: Props) {
  return (
    <>
    <div>
        <Header />
        {children}
        <Footer />
    </div>
    </>
  )
}