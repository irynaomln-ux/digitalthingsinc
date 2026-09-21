export type Role = {
  title: string
  summary: string
  requirements: string[]
}

export const roles: Role[] = [
  { title: 'Machine Learning Engineer', summary: 'Mid–senior · Python, PyTorch, production ML', requirements: ['3+ years building and shipping machine learning systems', 'Strong Python and PyTorch or TensorFlow experience', 'Experience taking models from experimentation into production', 'Comfort working with data pipelines, APIs, and cloud infrastructure'] },
  { title: 'Backend & AI Engineer', summary: 'Mid–senior · TypeScript, Python, LLM applications', requirements: ['Strong backend engineering fundamentals and API design experience', 'Production experience with TypeScript or Python', 'Hands-on work integrating LLMs or AI-powered product features', 'Pragmatic approach to testing, observability, and reliability'] },
  { title: 'Data Engineer', summary: 'Mid–senior · SQL, Python, modern data platforms', requirements: ['3+ years building reliable data pipelines', 'Advanced SQL and strong Python skills', 'Experience with warehouses, orchestration, and data modeling', 'Care for data quality, documentation, and stakeholder usability'] },
  { title: 'QA Engineer', summary: 'Mid-level · automation, web applications, CI/CD', requirements: ['Experience testing modern web applications end to end', 'Ability to build and maintain automated test suites', 'Comfort working with APIs, browsers, and CI/CD pipelines', 'Clear communication and a methodical approach to quality'] },
  { title: 'Senior Risk Specialist', summary: 'Senior · crypto, blockchain, risk management', requirements: ['Senior-level experience in risk management within crypto or blockchain', 'Strong understanding of digital asset risk frameworks and controls', 'Ability to assess complex exposures and communicate clear recommendations', 'Comfort partnering with compliance, product, and technical teams'] },
  { title: 'Product & Project Manager', summary: 'Mid–senior · digital products, delivery, cross-functional teams', requirements: ['Track record owning digital product or project delivery', 'Strong discovery, prioritization, and stakeholder management skills', 'Ability to translate customer needs into clear team direction', 'Comfort balancing strategy, detail, and delivery momentum'] },
  { title: 'Business Development Manager', summary: 'Mid-level · B2B, partnerships, consultative sales', requirements: ['Experience developing B2B relationships and commercial opportunities', 'Strong written, verbal, and presentation communication', 'Structured approach to pipeline management and follow-through', 'Curiosity about technology and confidence speaking with technical teams'] },
  { title: 'Marketing Manager', summary: 'Mid-level · growth, content, digital products', requirements: ['Experience owning multi-channel marketing programs', 'Strong writing, positioning, and campaign planning skills', 'Comfort using data to learn and improve performance', 'Ability to collaborate closely with product, sales, and creative teams'] },
]

export const contactEmail = 'recruitment@digitalthingsinc.com'
export const linkedinHref = 'https://www.linkedin.com/company/digitalthingsincc'

export const applicationHref = (title: string) => `mailto:${contactEmail}?subject=${encodeURIComponent(`Application: ${title}`)}`

export const placementGroups = [
  { title: 'Engineering', roles: ['Machine Learning Engineer', 'Backend & AI Engineer', 'Data Engineer', 'QA Engineer'] },
  { title: 'Product & Business', roles: ['Senior Risk Specialist', 'Product & Project Manager', 'Business Development Manager', 'Marketing Manager'] },
]

export const getRole = (title: string) => roles.find((role) => role.title === title)

export const process = [
  ['Scope the role', 'We get close to the work, the team, and what great looks like.'],
  ['Source and screen', 'We search deliberately, then assess for skill, context, and motivation.'],
  ['Introduce', 'You meet a short list of people worth making time for.'],
  ['Close', 'We stay close through the offer and help both sides land well.'],
] as const

export const reasons = [
  ['We read the stack ourselves', 'Technical fluency means better conversations, sharper briefs, and fewer wasted interviews.'],
  ['Small, dedicated searches', 'Your search gets the focus of a small team, not a handoff between departments.'],
  ["We tell you when it's not working", 'Straight answers make better decisions. If the brief needs changing, we will say so.'],
] as const

export const hireHref = `mailto:${contactEmail}?subject=${encodeURIComponent('Hiring inquiry')}`
export const jobsHref = `mailto:${contactEmail}?subject=${encodeURIComponent("I'm interested in a role at Digital Things")}`
