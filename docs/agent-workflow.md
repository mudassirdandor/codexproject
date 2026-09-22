# Agent Workflow

## Purpose

This workflow keeps portfolio work sequential, scoped, and evidence-based. Agents coordinate through documented handoffs; they do not independently modify everything.

## Lifecycle

`PLAN → INSPECT → DESIGN → IMPLEMENT → REVIEW → VERIFY → OPTIMIZE → QA → FINAL REVIEW → RELEASE`

### PLAN

Define the task, intended outcome, constraints, owner, acceptance criteria, and relevant source documents. The Lead Architect confirms scope and complexity is justified.

### INSPECT

Read relevant documentation and inspect repository context before changing anything. Identify existing behavior, dependencies, related work, and conflicts.

### DESIGN

The UI/UX Design Agent translates the brief and design system into implementable requirements. Content & Data Integrity confirms factual and positioning constraints where content is involved.

### IMPLEMENT

The Frontend Engineer implements only the approved scope. Major features do not begin until architectural and design requirements are understood.

### REVIEW

Relevant agents review the implementation against requirements: design, content integrity, accessibility/SEO, and architecture as applicable.

### VERIFY

The implementation agent and QA Agent perform relevant direct checks. A claim is not accepted as proof; outcomes must be observed and recorded.

### OPTIMIZE

The Performance Agent uses actual context or measurements to propose and, when assigned, make scoped improvements. Optimization must preserve required behavior and design.

### QA

The QA & Testing Agent verifies functional behavior, responsive layouts, regressions, and the production build as relevant. Failures are documented for remediation and retest.

### FINAL REVIEW

After technical QA, the Final Creative Director / Reviewer assesses the complete experience for design coherence, editorial quality, positioning, and professional standard.

### RELEASE

Release occurs only when Definition of Done is satisfied, remaining risks are accepted explicitly, and meaningful work is recorded in `progress-log.md`.

## Required task record

Every development task must include:

1. A task definition.
2. The relevant source documents.
3. Repository/context inspection.
4. An implementation plan.
5. Scoped implementation.
6. Verification.
7. Relevant review.
8. A progress-log entry.
9. A handoff to the next agent.

## Handoff rules

- A handoff must name the receiving agent, task state, files affected, decisions, verification performed, unperformed checks, risks, and requested next action.
- The receiving agent must read the handoff and relevant documents before acting.
- Frontend Engineering must not start a major feature until relevant architecture and design requirements are understood.
- The Performance Agent must not optimize without a defined issue, context, or measurement.
- QA verifies the implemented result rather than trusting a claim that it works.
- Final Review occurs only after technical QA.
- Conflicting requirements require a documented stop and escalation; no agent silently chooses a direction.

## Agent coordination rules

- Read relevant documentation before acting.
- Never assume missing information or fabricate portfolio content.
- Preserve Mudassir Javed's documented Data Analyst positioning.
- Do not introduce dependencies without justification and approval.
- Do not redesign unrelated sections while completing a task.
- Do not overwrite another agent's work without understanding it.
- Preserve working functionality and prefer small, reversible changes.
- Verify changes before handoff and record meaningful work in `progress-log.md`.
- Keep `[TO VERIFY]` information clearly marked until it is verified.
- Treat performance and accessibility as implementation requirements, not final-stage extras.

## Definition of Done

### Functionality

Everything in the approved task works as intended.

### Design

The implementation follows `design-system.md` and approved design guidance.

### Content

Content matches `content.md`, respects the personal profile and projects documentation, and contains no fabricated information.

### Responsiveness

Desktop, tablet, and mobile layouts work properly for the task scope.

### Accessibility

Semantic structure, keyboard navigation, focus states, contrast, and reduced-motion behavior are addressed.

### Performance

No unnecessary dependencies, excessive animations, oversized assets, or obvious performance problems are introduced.

### SEO

Applicable titles, metadata, semantic structure, Open Graph information, and technical SEO are implemented.

### Code quality

TypeScript is clean, components are maintainable, and architecture remains appropriately simple.

### Verification

The production build succeeds and relevant tests and checks pass, or any unrun/failed checks are explicitly recorded and accepted.

### Documentation

Meaningful work, decisions, verification, issues, and handoffs are recorded in `progress-log.md`.
