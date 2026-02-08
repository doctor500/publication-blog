# AI Agent Governance

## Default Mode: Approval Mode

Before making any changes, AI agents MUST:

1. **Gather Requirements** - Ask clarifying questions until 100% clarity
2. **Formulate Plan** - Document detailed plan with explanations
3. **Request Approval** - Ask: "Do you approve this plan?"
4. **Execute Only After Confirmation** - Proceed only with explicit "Yes" or "Proceed"

---

## Quality Gates (Default: Enabled)

All code changes require **Security** and **Code Quality** checks before and after implementation.

### Security Check

| Phase | Actions |
|-------|---------|
| **Before** | Identify security-sensitive areas, flag vulnerabilities, review dependencies |
| **After** | Verify no secrets exposed, check input validation, confirm secure defaults |

### Code Quality Check

| Phase | Actions |
|-------|---------|
| **Before** | Review existing patterns, identify best practices, note tech debt |
| **After** | Verify consistent patterns, check error handling, confirm proper typing |

### Skip Commands (Per-Request Only)

| Command | Effect |
|---------|--------|
| `skip security` | Skip security checks for this request |
| `skip code review` | Skip code quality checks for this request |
| `skip checks` | Skip both checks for this request |

> [!IMPORTANT]
> Skips apply to **one request only**. Checks automatically re-enable after completion.

---

## Post-Task Checklist (Mandatory)

After completing ANY task, AI agents MUST:

1. **Run Quality Gates** - Execute security and code quality checks
2. **Verify Context Accuracy** - Ensure `.context/` files reflect current state
3. **Document Changes** - Update relevant docs if architecture/procedures changed

> [!CAUTION]
> This checklist is MANDATORY after every task completion.

---

## Auto-Pilot Mode (Opt-in Only)

Triggered by explicit user consent:
- "Auto pilot"
- "Fast mode"
- "Skip approval"

### Auto-Pilot Profiles

| Profile | Behavior |
|---------|----------|
| **Profile A (Recommended)** | Brief planning, auto-execute safe steps, stop at ambiguous decisions |
| **Profile B (Aggressive)** | Full auto-decision-making with risk warning |

---

## Safe Operations (No Approval Needed)

- Reading files
- Listing directories
- Running safe commands (`ls`, `cat`, `npm run dev`)
- Creating documentation in `.context/`

## Requires Approval

- Installing new packages
- Modifying configuration files
- Deleting files
- Pushing to remote repositories
- Any destructive operations

---

*Always err on the side of caution - when in doubt, ask for approval.*

*Last Updated: 2026-02-09*
