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
} from "lucide-react";

export default function Portfolio() {
  // Map skill names to image filenames
  const getSkillImage = (name) => {
    const imageMap = {
      "AWS": "aws.png",
      "Azure": "azure.png",
      "Docker": "docker.png",
      "ECS/Fargate": "ecs.png",
      "GitHub Actions": "github.png",
      "CloudFormation": "cloudformation.webp",
      "Lambda": "lambda.png",
      "New Relic": "newrelic.png",
      "Kubernetes": "kube.png",
      "Python": "python.png",
      "Jenkins": "jenkins.png",
      "Ansible": "ansible.jpg",
      "Azure DevOps": "azure-devops.webp",
      "Azure Functions": "azure-function.png",
      "Cloudflare": "cloudflare.png",
      "Datadog": "datadog.png",
      "GCP": "gcp.png",
      "Grafana": "grafana.jpg",
      "Salesforce": "salesforce.svg.png",
      "Snowflake": "snowflake.png",
      "Terraform": "terraform.webp",
      "Azure Entra": "entra.png",
      "GuardDuty": "AWS_GuardDuty_logo.png",
      "Key Vault/Secret Manager": "lock.avif",
    };
    return `/images/${imageMap[name] || "aws.png"}`;
  };

  // Organized by category: Cloud Platforms → Containers → CI/CD → IaC → Monitoring → Security → Programming → CDN
  const skills = [
    // Cloud Platforms
    { name: "AWS", color: "#FF9900" },
    { name: "Azure", color: "#0078D4" },
    { name: "GCP", color: "#4285F4" },
    
    // Containers & Orchestration
    { name: "Docker", color: "#2496ED" },
    { name: "Kubernetes", color: "#326CE5" },
    
    // CI/CD
    { name: "GitHub Actions", color: "#181717" },
    { name: "Jenkins", color: "#D33833" },
    
    // Infrastructure as Code
    { name: "Terraform", color: "#7B42BC" },
    { name: "Ansible", color: "#EE0000" },
    
    // Monitoring & Observability
    { name: "Grafana", color: "#F46800" },
    { name: "Datadog", color: "#632CA6" },
    
    // Security
    { name: "Azure Entra", color: "#0078D4" },
    { name: "Key Vault/Secret Manager", color: "#0062AD" },
    { name: "GuardDuty", color: "#FF9900" },
    
    // Programming
    { name: "Python", color: "#3776AB" },
    
    // CDN & Edge
    { name: "Cloudflare", color: "#F38020" },
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
      period: "Mar 2024 – Present",
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

  const projects = [
    {
      title: "AWS Multi-Account Architecture",
      description:
        "Led AWS multi-account architecture for MyBambu U.S. and Colombia environments using AWS Organizations, IAM Identity Center, and cross-account roles.",
      tech: [
        "AWS Organizations",
        "IAM Identity Center",
        "GuardDuty",
        "CloudTrail",
      ],
    },
    {
      title: "GitHub Enterprise Migration",
      description:
        "Successfully migrated entire development organization from Bitbucket to GitHub, establishing branch protection rules, org-level access controls, and CI/CD pipelines.",
      tech: [
        "GitHub Actions",
        "Branch Protection",
        "CI/CD",
        "Organizational Management",
      ],
    },
    {
      title: "Fintech Payment Integrations",
      description:
        "Automated SFTP integrations with MoneyGram, Green Dot, and TransUnion using AWS Lambda, Paramiko, and python-gnupg for encrypted data transfer pipelines.",
      tech: ["AWS Lambda", "Python", "GPG Encryption", "SFTP", "S3"],
    },
    {
      title: "Real-Time Monitoring System",
      description:
        "Developed monitoring dashboards using New Relic, CloudWatch, and QuickSight for API reliability, vendor error tracking, and executive reporting.",
      tech: [
        "New Relic",
        "CloudWatch",
        "QuickSight",
        "SNS",
        "Slack Integration",
      ],
    },
    {
      title: "Data Orchestration Platform",
      description:
        "Collaborated with data engineers to automate and streamline data orchestration workflows, integrating Snowflake with AWS PostgreSQL databases for seamless data pipeline management.",
      tech: [
        "Snowflake",
        "AWS RDS PostgreSQL",
        "Data Pipeline",
        "ETL Automation",
        "Cross-Platform Integration",
      ],
    },
    {
      title: "Deployment Optimization & Automation",
      description:
        "Reduced deployment time by 82% (45 minutes to 8 minutes) by migrating from manual EC2 deployments to automated ECS Fargate with blue-green deployments, improving developer productivity and reducing deployment failures by 75%.",
      tech: [
        "ECS Fargate",
        "Blue-Green Deployments",
        "CI/CD",
        "AWS CodeDeploy",
        "Infrastructure Automation",
      ],
    },
    {
      title: "Real-Time Fraud Detection & Compliance System",
      description:
        "Implemented intelligent fraud detection alerts that prevented $50K+ in potential compliance fines and reduced false positive rates by 40%, enabling real-time threat response and maintaining regulatory compliance.",
      tech: [
        "AWS GuardDuty",
        "CloudWatch",
        "SNS",
        "Lambda",
        "Real-Time Alerting",
        "Compliance Automation",
      ],
    },
    {
      title: "Multi-Cloud Disaster Recovery & Cost Optimization",
      description:
        "Architected and automated disaster recovery solution across AWS and Azure regions, reducing RTO from 4 hours to 15 minutes. Implemented automated cost optimization policies saving $30K+ annually through right-sizing, reserved instance management, and automated resource scheduling.",
      tech: [
        "Terraform",
        "AWS",
        "Azure",
        "CloudFormation",
        "Cost Optimization",
        "Disaster Recovery",
        "Automation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 mt-16">
            <div className="w-56 h-56 mx-auto mb-6 flex items-center justify-center">
              <img 
                src="/ghost_transparent.png" 
                alt="Anthony Santo - Cloud & DevOps Engineer"
                className="w-full h-full object-contain drop-shadow-lg"
                style={{ 
                  filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.2))'
                }}
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-sans">
            Anthony Santo
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-6">
            Senior Cloud & DevOps Engineer
          </p>
          <p className="text-lg text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            8+ years of progressive IT experience specializing in cloud
            infrastructure, automation, and DevOps leadership. Proven success in
            architecting secure, scalable environments and modern CI/CD
            pipelines.
          </p>
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
          <div className="flex gap-4 justify-center mb-12">
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
              View Projects
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <Code className="w-10 h-10 inline-block mr-3 text-cyan-400" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105"
              >
                <div className={`mb-4 mx-auto flex items-center justify-center ${
                  skill.name === "Jenkins" || skill.name === "Azure Entra" 
                    ? "w-16 h-16" 
                    : "w-12 h-12"
                }`}>
                  {skill.name === "Key Vault/Secret Manager" ? (
                    <Lock
                      className="w-full h-full"
                      style={{ color: skill.color }}
                    />
                  ) : (
                    <img
                      src={getSkillImage(skill.name)}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                      style={{
                        backgroundColor: 'transparent',
                        imageRendering: 'auto',
                      }}
                      onError={(e) => {
                        console.error('Image failed to load:', getSkillImage(skill.name));
                      }}
                    />
                  )}
                </div>
                <h3 className="text-white text-center font-semibold">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <Award className="w-10 h-10 inline-block mr-3 text-cyan-400" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all"
              >
                <Award className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-white font-semibold mb-2 text-sm">
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
      <section id="experience" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <Briefcase className="w-10 h-10 inline-block mr-3 text-cyan-400" />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-cyan-500"
              >
                <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] top-0"></div>
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {job.title}
                  </h3>
                  <p className="text-cyan-400 mb-2">{job.company}</p>
                  <p className="text-slate-400 text-sm mb-3">{job.period}</p>
                  <p className="text-slate-300 mb-3">{job.description}</p>
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <Code className="w-10 h-10 inline-block mr-3 text-cyan-400" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Interested in working together or discussing cloud infrastructure?
            Reach out!
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="mailto:asanto92@outlook.com"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Me
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
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>
            © 2025 Anthony Santo. Built with passion for cloud infrastructure
            and DevOps excellence.
          </p>
        </div>
      </footer>
    </div>
  );
}