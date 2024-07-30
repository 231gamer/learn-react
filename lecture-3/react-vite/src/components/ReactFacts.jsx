import React from 'react'

// Shared Tailwind CSS classes
const cardClass = 'bg-light-blue-200 p-6 rounded-lg shadow-md text-center'
const titleClass = 'text-2xl font-bold text-blue-600'
const subtitleClass = 'text-lg text-zinc-700'
const headingClass = 'text-xl font-semibold mt-4'

const ReactFacts = () => {
  return (
    <div className={cardClass}>
      <h1 className={titleClass}>ReactFacts</h1>
      <h2 className={subtitleClass}>React Course - Project 1</h2>
      <h3 className={headingClass}>Fun facts about React</h3>
      <ul className="list-disc list-inside mt-2">
        <FactItem text="Was first released in 2013" />
        <FactItem text="Was originally created by Jordan Walke" />
        <FactItem text="Has well over 100K stars on GitHub" />
        <FactItem text="Is maintained by Facebook" />
        <FactItem text="Powers thousands of enterprise apps, including mobile apps" />
      </ul>
    </div>
  )
}

const FactItem = ({ text }) => {
  return <li>{text}</li>
}

export default ReactFacts