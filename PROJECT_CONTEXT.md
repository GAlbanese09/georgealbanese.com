# George Albanese Portfolio — Project Context for Claude

**Read this before every session. This is the source of truth.**

## Who Is George

George Albanese is an endpoint automation engineer with 10+ years of IT experience. Based in Norwalk, CT, working remotely. Official title at Revalize, Inc. is Desktop Engineer, but actual scope is significantly beyond that — he owns the entire endpoint platform, identity governance, endpoint security stack, and production automation. He's actively job searching targeting $100k–$175k roles (Endpoint Automation Engineer, Cloud Delivery Engineer, IAM/Endpoint Security Engineer).

## What This Site Is

A professional portfolio at **GeorgeAlbanese.com** designed to give George a competitive edge in his job search. It targets two audiences:

1. **Technical recruiters** doing initial screening (30-second scan — keywords, scale, certifications)
2. **Hiring managers / technical leads** evaluating architecture depth and systems thinking (2–5 minute review)

This is NOT a developer portfolio. It's an infrastructure engineer's operational showcase — architecture diagrams, automation flows, measurable impact, sanitized case studies. Think "technical operator who documents their work," not "creative developer portfolio."

## Design Direction

**Aesthetic: "NOC Dashboard meets Technical Documentation"**

- Dark theme — charcoal/slate backgrounds, not pure black
- Accent color: Cyan/teal (#06B6D4 range) — evokes terminal, monitoring, infrastructure
- Secondary accent: Amber (#F59E0B range) — for warnings, highlights, call-to-action
- Typography: JetBrains Mono for headings/accents (monospace = ops identity), plus a clean sans-serif (Outfit) for body text
- Subtle grid/dot patterns in backgrounds — evokes dashboards, not decoration
- Minimal animations — fade-ins on scroll, nothing flashy
- Card-based layouts for projects/skills — evokes Intune/Azure portal card patterns
- NO: gradient hero sections, floating orbs, parallax scrolling, or anything that screams "AI generated template"

## Technical Stack

- **Framework**: Astro 5 with MDX integration
- **Styling**: Tailwind CSS 4
- **Interactive islands**: React (only where needed — metrics dashboard, project filter)
- **Hosting**: Cloudflare Pages (free tier)
- **Contact form**: Cloudflare Workers/Pages Functions + Turnstile CAPTCHA
- **Analytics**: Cloudflare Web Analytics (free, cookie-free)
- **Domain**: GeorgeAlbanese.com (Cloudflare Registrar)
- **Content**: Markdown/MDX files in Astro Content Collections (no CMS)
- **Diagrams**: Mermaid.js or Excalidraw SVG exports in MDX

## Site Structure

```
/                    → Homepage (hero, about, skills, metrics, certifications, contact CTA)
/resume              → Resume page (PDF embed + download button)
/projects            → Case studies index (card grid with tech badges + metrics)
/projects/[slug]     → Individual case study (full P.A.R. writeup)
/blog                → Blog/KB index (future Phase 3)
/blog/[slug]         → Individual article (future Phase 3)
```

## Content Architecture

### Content Collections (src/content/)

**case-studies/** — MDX files with frontmatter:
```yaml
title: "Conditional Access Architecture"
description: "Designed 20 policies from scratch..."
tags: ["Entra ID", "Conditional Access", "Zero Trust", "MFA"]
metrics:
  - label: "Policies Built"
    value: "20"
  - label: "Platforms Covered"
    value: "6"
  - label: "Users Protected"
    value: "500+"
category: "identity" # identity | endpoint | security | automation
order: 1
featured: true
```

**blog/** — MDX files with frontmatter:
```yaml
title: "How to Structure Conditional Access for a Hybrid Workforce"
date: "2026-04-15"
tags: ["Conditional Access", "Entra ID", "Zero Trust"]
category: "identity"
draft: false
```

## Key Content Sections

### Skills Grid Categories
1. **Endpoint Management** — Intune, Jamf Pro, Autopilot, Autopatch, LAPS, DFCI, Config Profiles, Compliance
2. **Identity & Access** — Entra ID, Conditional Access, SSO, MFA, Certificate Auth, App Protection (MAM)
3. **Endpoint Security** — ASR Rules, BitLocker, Defender for Endpoint/EDR, Windows Firewall, SmartScreen
4. **Automation & Scripting** — PowerShell, Microsoft Graph API, Azure Automation, SQL, Azure Blob Storage
5. **Service Management** — Jira, ServiceNow, Confluence, Virtual Service Agent, Dayforce (HRIS)
6. **Platforms** — Windows, macOS, iOS/Android, M365, Exchange Online, Google Workspace, SharePoint

### Metrics Dashboard (homepage)
- 585+ Devices Managed
- 80 Configuration Profiles
- 20 Conditional Access Policies
- 117 Apps Deployed
- 7 Compliance Policies
- ~15 min saved per onboard / ~10 min saved per offboard

### Certifications
- CompTIA Network+
- CompTIA Security+
- In Progress: MD-102, SC-300, AZ-104

## Phase Plan

### Phase 1 (Current) — Ship the Foundation
- [x] Project scaffolding
- [ ] Homepage (hero, about, skills, metrics, certs, contact CTA)
- [ ] Resume page
- [ ] Responsive design (mobile-first)
- [ ] Cloudflare Pages deployment
- [ ] Contact form (Workers function + Turnstile)

### Phase 2 — Case Studies
- [ ] Content collection for case studies
- [ ] Project index page with card grid
- [ ] Individual case study pages
- [ ] Architecture diagrams (Mermaid/Excalidraw)
- [ ] 3–5 sanitized case studies written

### Phase 3 — Knowledge Base / Blog
- [ ] Blog content collection
- [ ] Blog index and article pages
- [ ] Tag system and category filtering
- [ ] RSS feed
- [ ] Backend auth for KB management (stretch)

### Phase 4 — Dusklog Showcase
- [ ] Dedicated case study for Dusklog
- [ ] Screenshots/demo
- [ ] Technical architecture writeup

## File Naming Conventions
- Components: PascalCase (`SkillsGrid.astro`, `MetricCard.astro`)
- Pages: kebab-case (`index.astro`, `resume.astro`)
- Content: kebab-case (`conditional-access-architecture.mdx`)
- Styles: kebab-case (`global.css`)

## How George Works With Claude
- Give prompts for VS Code Claude, not explanations
- Include git commit messages with every prompt
- Direct, no fluff
- Push back when ideas are wrong
- George is NOT a developer — he relies on Claude for all technical decisions
- George has excellent product instincts and UX sensibility

## Important Notes
- Do NOT include confidential tenant IDs, secrets, internal URLs, or production code
- All Revalize content must be sanitized — use "mid-sized B2B SaaS company" if needed
- Metrics can use real numbers (device counts, policy counts) but no company-specific identifiers
- Resume PDF will be placed in /public/George_Albanese_Resume.pdf
