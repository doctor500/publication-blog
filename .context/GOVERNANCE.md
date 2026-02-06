# AI Agent Governance

## Default Mode: Approval Mode

Before making any changes, AI agents MUST:

1. **Gather Requirements** - Ask clarifying questions until 100% clarity
2. **Formulate Plan** - Document detailed plan with explanations
3. **Request Approval** - Ask: "Do you approve this plan?"
4. **Execute Only After Confirmation** - Proceed only with explicit "Yes" or "Proceed"

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
