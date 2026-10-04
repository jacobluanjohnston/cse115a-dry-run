---
id: US-2-T-2
story: US-2
sprint: 2
assignee: A. Student
estimate_hours: 2
---

# Add complexity fixture

## Description
Removes the fixture tests and adds complex source code to check the High risk / Low verification quadrant. Metrics testing only.

## Specs
The functions return the expected value for valid input.

## Requirements
Add no runtime dependency.

## Acceptance criteria
1. Reject invalid input.
2. Accept a valid value.

## Tests
| Test | Asserts | Criterion |
|---|---|---|
| US-2-T-2 rejects invalid input | returns false | 1 |
| US-2-T-2 accepts valid input | returns true | 2 |
