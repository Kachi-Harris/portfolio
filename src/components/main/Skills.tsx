"use client"

import React from 'react'

const cloud = [
  'AWS (EKS, ECS, IAM, VPC, RDS, CloudWatch, CloudFront)',
  'Terraform (modules, remote state, reusable IaC)',
  'CloudFormation',
  'Secure multi-environment architecture design',
]

const cicd = ['ArgoCD (GitOps)', 'GitLab CI', 'Jenkins', 'Codefresh', 'Blue/Green & Canary deployments']

const containers = ['Kubernetes (EKS)', 'OpenShift', 'Helm', 'Docker', 'Platform lifecycle management']

const observability = ['Prometheus', 'Grafana', 'Loki', 'OpenTelemetry', 'ELK Stack', 'Incident management']

const programming = ['Python', 'Bash', 'Shell scripting', 'Infrastructure automation']

const practices = ['GitOps', 'IaC', 'Security & least-privilege', 'Automated testing & quality gates']

const Group = ({ title, items }: { title: string; items: string[] }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <ul className="list-disc pl-5 text-sm space-y-1">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 sm:px-8 bg-background text-foreground">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Core Expertise</h2>
        <p className="mt-2 text-muted-foreground">Senior-level DevOps & platform engineering skills focused on production reliability.</p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap -mx-4">
        <Group title="Cloud & Infrastructure" items={cloud} />
        <Group title="CI/CD & Automation" items={cicd} />
        <Group title="Containers & Orchestration" items={containers} />
        <Group title="Observability & Monitoring" items={observability} />
        <Group title="Programming & Scripting" items={programming} />
        <Group title="DevOps Practices" items={practices} />
      </div>
    </section>
  )
}

export default Skills
