import React from 'react'

type sectionHeadingProps={
  children: React.ReactNode
}
export default function SectionHeading({children}:sectionHeadingProps) {
  return (
    <h1 className="text-3xl font-bold mb-8 capitalize text-center">{children}</h1>
  )
}
