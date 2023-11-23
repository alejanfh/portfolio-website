'use client'
import { projectsData } from '@/lib/data'
import SectionHeading from './section-heading'
import React from 'react'
import { Project } from './project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section ref={ref} className=' scroll-mt-28' id='projects'>
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  )
}
