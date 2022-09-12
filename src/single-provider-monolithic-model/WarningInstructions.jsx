import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useProject } from './ProjectProvider'

export default function WarningInstructions () {
  const { project, setProject } = useProject()
  const [value, setValue] = useState(project.warningInstructions.content)

  useEffect(() => {
    // setInstructions(value, 'warningInstructions')
  }, [value])

  console.count('WarningInstructions')

  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={setValue} /></div>)
}