import { projectsData } from '@/lib/data'
import SectionHeading from './section-heading'
import React from 'react'
import { Project } from './project'

export default function Projects() {
  return (
    <section className=' scroll-mt-28' id='projects'>
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  )
}
