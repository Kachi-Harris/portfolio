'use client'

import { motion } from 'framer-motion'
import { FC, JSX } from 'react'
import Image from 'next/image'
// Removed company images to avoid broken image references
import { Timeline as TimelineComponent } from '@/components/ui/timeline'
import { FaBriefcase, FaBuilding } from 'react-icons/fa'

export interface TimelineItem {
  id: number
  type: 'work' | 'project'
  title: string
  company: string
  location: string
  date: string
  imageURL: string
  description: string
  achievements: string[]
  icon: JSX.Element
  companyIcon: JSX.Element
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Senior DevOps / Platform Engineer',
    company: 'SITA',
    location: 'London, United Kingdom',
    date: 'May 2023 – Present',
    imageURL: '/sita-logo.png',
    description: 'Designing and operating cloud-native platforms and platform tooling for multiple product teams.',
    achievements: [
      'Designed and scaled EKS platforms supporting multiple product teams with secure multi-environment topology.',
      'Led GitOps delivery using ArgoCD to enable auditable, predictable production deployments.',
      'Built reusable Terraform modules for VPC, EKS, IAM, and managed databases to reduce drift and increase repeatability.',
      'Improved incident detection and resolution through full-stack observability (logs, metrics, tracing).',
      'Mentored engineers and formalised IaC and CI/CD best practices across teams.',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    type: 'work',
    title: 'DevOps / Platform Engineer',
    company: 'Accenture',
    location: 'London, United Kingdom',
    date: 'Feb 2021 – May 2023',
    imageURL: '/accenture-logo.png',
    description: 'Delivered enterprise-grade DevOps platforms and automated pipelines for client environments.',
    achievements: [
      'Delivered repeatable infrastructure using Terraform for multi-environment clients.',
      'Designed CI/CD pipelines with automated testing and security gates to balance speed and safety.',
      'Led containerisation efforts and migrated legacy systems to Kubernetes-based architectures.',
      'Implemented centralized monitoring using ELK, Prometheus, and CloudWatch to improve observability.',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-orange-500" />,
  },
  {
    id: 3,
    type: 'work',
    title: 'Cloud Engineer',
    company: 'Access Bank',
    location: 'Lagos, Nigeria',
    date: 'May 2022 – Jun 2023',
    imageURL: '/access-bank-logo.png',
    description: 'Designed secure AWS environments and automated provisioning for regulated financial workloads.',
    achievements: [
      'Designed secure AWS accounts and VPC topologies for regulated workloads with least-privilege IAM.',
      'Automated infrastructure provisioning with Terraform and CloudFormation to speed deployments.',
      'Implemented monitoring and alerting strategies to maximise uptime and reduce incidents.',
      'Enforced security policies and system hardening for production environments.',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 4,
    type: 'work',
    title: 'Linux System Administrator',
    company: 'Access Bank',
    location: 'Lagos, Nigeria',
    date: 'Aug 2014 – May 2022',
    imageURL: '/access-bank-logo.png',
    description: 'Managed enterprise Linux systems and automation across dev, test and production environments.',
    achievements: [
      'Maintained high availability with 99.9% uptime across critical systems.',
      'Automated routine operations and operational runbooks using Bash scripting.',
      'Supported incident response, hardening, and capacity planning for production services.',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-blue-500" />,
  },
]

export const TimelineElement: FC<{ item: TimelineItem; index: number }> = ({ item, index }) => (
  <div className="space-y-6" key={index}>
    <div className="flex items-center gap-4">
      {/* Company logos removed to avoid broken images; showing text only */}
      <div>
        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
          {item.company} • {item.location}
        </p>
        <p className="text-sm text-muted-foreground">{item.date}</p>
      </div>
    </div>

    <p className="text-sm text-muted-foreground">{item.description}</p>

    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
      {item.achievements.map((ach) => (
        <li key={ach}>{ach}</li>
      ))}
    </ul>

    {item.type === 'project' && (
      <div className="w-full mt-4">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md bg-background">
          <Image
            src={item.imageURL}
            alt={`${item.title} Architecture`}
            className="object-contain"
            loading="lazy"
            fill
          />
        </div>
      </div>
    )}
  </div>
)

const Timeline: FC = () => {
  const timelineContent = timelineData.map((item) => ({
    title: item.date,
    content: <TimelineElement key={item.id} item={item} index={item.id} />,
  }))

  return (
    <section id="experience" className="py-20 bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold tracking-tight text-primary">
            Professional Experience & Projects
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
            Highlights of my career and key projects showcasing my skills & impact.
          </p>
        </motion.div>

        <div className="relative w-full">
          <TimelineComponent data={timelineContent} />
        </div>
      </div>
    </section>
  )
}

export default Timeline
