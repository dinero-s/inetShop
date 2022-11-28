import React from 'react'
import MainLayout from '../../layout/MainLayout'
import css from "./index.module.scss"

type Props = {}

export default function Home({}: Props) {
  return (
    <>
    <MainLayout>
      <div className={css.main}>
        CHILDREN
      </div>
    </MainLayout>
    </>
  )
}