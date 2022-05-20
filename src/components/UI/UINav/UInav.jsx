import React from 'react'

export const UInav = ({style, reference, textNav}) => {
  return (
    <a className={style} href={reference}>{textNav}</a>
  )
}
