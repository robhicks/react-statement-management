import React from 'react'
import UserInstructions from './UserInstructions'
import ReviewerInstructions from './ReviewerInstructions'
import WarningInstructions from './WarningInstructions'

export default function ProjectInstructions ({ project, setProject }) {
  console.count('ProjectInstructions')
  return (<div className="mt-3 border border-gray-300 p-2">
    <h1 className="text-xl text-center pb-1 mb-1 border-b border-gray-300">Project Instructions</h1>
    <UserInstructions project={project} setProject={setProject} />
    <ReviewerInstructions project={project} setProject={setProject} />
    <WarningInstructions project={project} setProject={setProject} />
  </div>)
}