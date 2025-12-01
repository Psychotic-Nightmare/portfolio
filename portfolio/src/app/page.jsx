"use client";

import {
  Award,
  Briefcase,
  Code,
  Mail,
  Linkedin,
  ChevronDown,
  MapPin,
  Lock,
  User,
  Sparkles,
} from "lucide-react";

export default function Portfolio() {
  // Map skill names to image filenames
  const getSkillImage = (name) => {
    const imageMap = {
      AWS: "aws.png",
      Azure: "azure.png",
      GCP: "gcp.png",
      Docker: "docker.png",
      "GitHub Actions": "github.png",
      Kubernetes: "kube.png",
      Terraform: "terraform.webp",
      Ansible: "ansible.svg",
      Cloudflare: "cloudflare.png",
      Datadog: "datadog.png",
      Grafana: "grafana.png",
      "CloudWatch": "]cloudwatch.png",
      "New Relic": "new relic.png",
      Python: "python.png",
      "Bash / Shell": "bash.png",
      "Node.js": "Node.js_logo.svg.png",
      YAML: "yaml.png",
      JSON: "json.jpg",
      PowerShell: "powershell.png",
      "Azure Entra": "entra.png",
      GuardDuty: "AWS_GuardDuty_logo.png",
      "Key Vault/Secret Manager": "lock.avif",
    };
    return `/portfolio/images/${imageMap[name] || "aws.png"}`;
  };

  // Organized skills into clear senior-level categories
  const skillCategories = [
    {
      name: "Cloud Platforms",
      description: "Designing resilient, secure, and scalable cloud foundations.",
      items: ["AWS", "Azure", "GCP"],
    },
    {
      name: "DevOps & Infrastructure",
      description: "Automating infrastructure and delivery across teams and regions.",
      items: [
        "Terraform",
        "Ansible",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Cloudflare",
      ],
    },
    {
      name: "Observability & Reliability",
      description: "Keeping platforms observable, debuggable, and highly available.",
      items: ["Datadog", "Grafana", "CloudWatch", "New Relic", "GuardDuty", "Key Vault/Secret Manager"],
    },
    {
      name: "Languages & Automation",
      description: "Turning operational pain points into automated, repeatable workflows.",
      items: ["Python", "Bash / Shell", "Node.js", "YAML", "JSON", "PowerShell"],
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    {
      name: "AWS Certified SysOps Administrator",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    {
      name: "Azure Administrator Associate",
      issuer: "Microsoft",
      year: "2024",
    },
    { name: "Azure AI Engineer Associate", issuer: "Microsoft", year: "2024" },
    { name: "Azure Fundamentals", issuer: "Microsoft", year: "2023" },
  ];

  const experience = [
    {
      title: "Senior DevOps Engineer / DevOps Engineer",
      company: "MyBambu (Fintech / Payments Platform)",
      period: "Mar 2024 – Nov 2025",
      description:
        "Led company-wide GitHub migration from Bitbucket. Built ECS Fargate clusters, Lambda functions, and automated CI/CD pipelines. Currently architecting AWS multi-region environments for U.S. and LATAM operations.",
      bullets: [
        "Architected AWS multi-region environments for U.S. and LATAM operations, implementing GuardDuty, Config, CloudTrail, and centralized logging",
        "Reduced deployment time from 45 minutes to 8 minutes by migrating from manual EC2 deployments to automated ECS Fargate with blue-green deployments",
        "Built automated GPG-encrypted SFTP pipeline processing daily MoneyGram transactions, eliminating 6 hours of manual file transfers",
        "Led company-wide migration from Bitbucket to GitHub, designing organization structure, repository access model, branch protection, and automated workflows for continuous integration and deployment across all engineering teams",
        "Prevented $50K+ in potential compliance fines by implementing real-time fraud detection alerts that reduced false positive rates by 40%",
        "Mentored and managed engineers, establishing AWS training program and hands-on cloud security workshops",
        "Created executive dashboards in QuickSight showing 99.9% API uptime and vendor performance metrics",
        "Implemented SNS-based alerting pipelines sending operational and compliance events to Slack channels in real time",
        "Standardized CI/CD pipelines reducing deployment failures by 75%",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "NextEra Energy",
      period: "May 2023 – Mar 2024",
      description:
        "Streamlined GitHub CI/CD workflows reducing costs. Migrated applications from EC2 to ECS.",
      bullets: [
        "Saved $15K monthly by optimizing GitHub Actions workflows and migrating oversized EC2 instances to right-sized ECS containers",
        "Migrated 8 critical applications from EC2 to ECS, improving response times by 35% and reducing infrastructure costs by 25%",
        "Built Infrastructure-as-Code templates with AWS CDK that reduced new environment provisioning to 30 minutes",
        "Implemented CloudWatch and Prometheus monitoring with proactive alerting and incident prevention capabilities",
      ],
    },
    {
      title: "Junior Cloud Engineer / Application Support Specialist",
      company: "Orangetheory Fitness",
      period: "Feb 2018 – Mar 2023",
      description:
        "Developed cloud infrastructure using AWS and Azure. Created RESTful APIs with Python and Flask. Designed Power BI dashboards and automated deployments. Managed 20,000+ devices in IBM MaaS360 and JAMF.",
      bullets: [
        "Built Python Flask APIs serving 2M+ fitness class bookings monthly, handling 500+ concurrent users during peak hours",
        "Automated device management for 20,000+ iPads across 1,300+ studios, reducing manual configuration time by 90%",
        "Created Power BI dashboards tracking annual revenue streams, used by C-suite for strategic planning and franchise expansion decisions",
        "Developed automated deployment pipeline using Docker that reduced release cycles from weekly to daily",
        "Designed Azure Functions processing 100K+ daily heart rate monitor readings, enabling real-time workout analytics for members",
      ],
    },
  ];

  // Case-study style projects highlighting problem → solution → impact
  const caseStudies = [
    {
      title: "Multi-Region Fintech Platform on AWS",
      problem:
        "Companie needed a secure, compliant, and highly available multi-region architecture to support payments across U.S. and LATAM without increasing operational overhead.",
      solution:
        "Designed and implemented a multi-account AWS landing zone using AWS Organizations, IAM Identity Center, GuardDuty, Config, and centralized logging, paired with ECS Fargate services and automated CI/CD pipelines.",
      impact:
        "Enabled expansion into new markets with 99.9%+ uptime, strong security posture, and clear separation of regulatory domains while keeping deployment velocity high.",
      tech: [
        "AWS Organizations",
        "ECS Fargate",
        "GuardDuty",
        "CloudTrail",
        "GitHub Actions",
        "Terraform",
      ],
      linkLabel: "Discuss this architecture",
      linkHref:
        "mailto:asanto92@outlook.com?subject=Multi-Region%20Fintech%20Platform%20Architecture",
    },
    {
      title: "Deployment Optimization & CI/CD Standardization",
      problem:
        "Engineering teams were deploying via manual EC2 changes, leading to 45-minute releases, inconsistent environments, and frequent deployment failures.",
      solution:
        "Re-platformed workloads onto ECS Fargate with blue-green deployments and standardized GitHub Actions pipelines, including branching strategy, environment promotion, and automated testing gates.",
      impact:
        "Cut deployment time from 45 minutes to 8 minutes and reduced deployment-related incidents by ~75%, freeing engineers to ship features instead of fighting the pipeline.",
      tech: [
        "ECS Fargate",
        "GitHub Actions",
        "Blue-Green Deployments",
        "AWS CodeDeploy",
        "Infrastructure Automation",
      ],
      linkLabel: "View CI/CD approach",
      linkHref:
        "mailto:asanto92@outlook.com?subject=Deployment%20Optimization%20and%20CI%2FCD%20Standardization",
    },
    {
      title: "Real-Time Fraud Detection & Compliance Automation",
      problem:
        "Fraud and compliance alerts were delayed and noisy, risking regulatory fines and making it hard for teams to separate real threats from false positives.",
      solution:
        "Implemented real-time fraud detection and compliance pipelines using GuardDuty, CloudWatch, Lambda, and SNS to send structured alerts to Slack channels with actionable context.",
      impact:
        "Avoided $50K+ in potential fines, reduced false positives by 40%, and gave operations teams a clear, real-time picture of risk across the platform.",
      tech: ["GuardDuty", "CloudWatch", "Lambda", "SNS", "Slack Integration"],
      linkLabel: "Ask about this system",
      linkHref:
        "mailto:asanto92@outlook.com?subject=Real-Time%20Fraud%20Detection%20System",
    },
    {
      title: "Multi-Cloud DR & Cost Optimization",
      problem:
        "Critical services needed stronger disaster recovery and cost controls across AWS and Azure without slowing down development teams.",
      solution:
        "Designed and automated a multi-region, multi-cloud DR strategy backed by Terraform and CloudFormation, including right-sizing, scheduling, and reserved instance strategies.",
      impact:
        "Reduced RTO from ~4 hours to ~15 minutes while saving $30K+ annually through automated cost optimization and more efficient resource usage.",
      tech: ["Terraform", "CloudFormation", "AWS", "Azure", "Cost Optimization", "Disaster Recovery"],
      linkLabel: "Review DR strategy",
      linkHref:
        "mailto:asanto92@outlook.com?subject=Multi-Cloud%20DR%20and%20Cost%20Optimization",
    },
  ];

  const funFacts = [
    "I believe in clear communication, turning complex cloud architecture into visuals and training that any team can understand.",
    "I'm always building small automation tools, scripts, and processes that reduce operational friction.",
    "Outside of tech, I'm usually experimenting with my homelab, exploring new tools that make life simpler, or staying consistent with strength training.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 mt-16">
            <div className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-6 flex items-center justify-center rounded-full bg-slate-900/40 border border-cyan-500/40 shadow-lg shadow-cyan-500/10">
              <img
                src="/portfolio/ghost_transparent.png"
                alt="Anthony Santo - Cloud & DevOps Engineer"
                className="w-4/5 h-4/5 object-contain drop-shadow-lg"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.4))",
                }}
              />
            </div>
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/80 mb-4">
            Senior Cloud &amp; DevOps Engineer
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-sans leading-tight">
          Building modern, scalable cloud platforms that keep companies fast, secure, and resilient.
          </h1>
          <div className="flex flex-wrap gap-4 justify-center text-slate-300 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>South Florida</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>asanto92@outlook.com</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            I&apos;m a senior-level Cloud &amp; DevOps engineer with years of experience designing,
            building, and operating cloud platforms across AWS and Azure. My focus is on building
            resilient architectures, automating everything that should be automated, and giving teams
            the tools and guardrails they need to ship safely and quickly.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            I specialize in multi-account AWS designs, infrastructure as code, containerized workloads,
            CI/CD standardization, and observability for high-traffic, regulated environments like
            fintech and energy. I enjoy owning problems end-to-end, from landing zone and security
            baselines to deployment pipelines and incident response workflows.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            The impact I care most about, fewer risky manual changes, faster and safer releases,
            clear visibility into system health, and platforms that scale smoothly as the business grows.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              <Code className="w-8 h-8 inline-block mr-2 text-cyan-400" />
              Technical Skills
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              A focused toolset for building secure, automated, and observable cloud platforms.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700/80"
              >
                <h3 className="text-xl font-semibold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  {category.description}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="flex flex-col items-center gap-2 bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-3 hover:border-cyan-500/70 transition-all"
                    >
                      <div
                        className={`mb-1 flex items-center justify-center ${
                          item === "Key Vault/Secret Manager" ? "w-8 h-8" : "w-10 h-10"
                        }`}
                      >
                        {item === "Key Vault/Secret Manager" ? (
                          <Lock className="w-full h-full text-cyan-400" />
                        ) : (
                          <img
                            src={getSkillImage(item)}
                            alt={item}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      <span className="text-sm text-slate-100 text-center">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              <Award className="w-8 h-8 inline-block mr-2 text-cyan-400" />
              Certifications
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Validated expertise across AWS and Azure, backing hands-on delivery with formal credentials.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-5 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all"
              >
                <Award className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-white font-semibold mb-1 text-sm">
                  {cert.name}
                </h3>
                <p className="text-slate-400 text-xs mb-1">{cert.issuer}</p>
                <p className="text-cyan-400 text-xs">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              <Briefcase className="w-8 h-8 inline-block mr-2 text-cyan-400" />
              Experience
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              A track record of owning cloud, DevOps, and automation initiatives end-to-end.
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-cyan-500/80"
              >
                <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <div className="bg-slate-900/70 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {job.title}
                  </h3>
                  <p className="text-cyan-400 mb-1 text-sm">{job.company}</p>
                  <p className="text-slate-400 text-xs mb-3">{job.period}</p>
                  <p className="text-slate-300 mb-3 text-sm leading-relaxed">
                    {job.description}
                  </p>
                  {job.bullets && (
                    <ul className="space-y-2 text-slate-300">
                      {job.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1">•</span>
                          <span className="text-sm leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects / Case Studies Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              <Code className="w-8 h-8 inline-block mr-2 text-cyan-400" />
              Case Studies
            </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
              A selection of projects that show how I approach complex infrastructure, automation,
              and reliability challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((project, index) => (
              <article
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <div className="space-y-3 text-sm text-slate-200">
                  <div>
                    <span className="font-semibold text-cyan-300">
                      Problem
                    </span>
                    <p className="text-slate-300 mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-cyan-300">
                      Solution
                    </span>
                    <p className="text-slate-300 mt-1">{project.solution}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-cyan-300">
                      Impact
                    </span>
                    <p className="text-slate-300 mt-1">{project.impact}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/15 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.linkHref && (
                  <a
                    href={project.linkHref}
                    className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
                  >
                    {project.linkLabel}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Personality / Fun Facts Section */}
      <section id="fun-facts" className="py-16 px-6 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-7 h-7 text-cyan-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Beyond the Cloud
            </h2>
          </div>
          <p className="text-slate-300 mb-4">
            The principles and interests that shape how I work.
          </p>
          <ul className="space-y-3 text-slate-200">
            {funFacts.map((fact, index) => (
              <li key={index} className="flex items-start">
                <span className="text-cyan-400 mr-2 mt-1">•</span>
                <span className="text-sm md:text-base">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/70">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s build something reliable together.
          </h2>
          <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto">
          Whether you're a startup looking to scale, modernizing infrastructure, or standardizing DevOps practices, I'd love to talk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:asanto92@outlook.com"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-santo-b63b76152/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 bg-slate-900/80">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} Anthony Santo · Cloud &amp; DevOps Engineer ·
            Focused on automation, scalable cloud architecture, and building reliable platforms.
          </p>
        </div>
      </footer>
    </div>
  );
}