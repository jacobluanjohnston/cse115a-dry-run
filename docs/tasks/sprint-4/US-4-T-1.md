---
id: US-4-T-1
story: US-4
sprint: 4
assignee: A. Student
estimate_hours: 2
---

# Edit one line of the complexity fixture

## Description
Changes one line in an existing large file to check whether the dashboard analyzes the whole file or only the changed lines. Metrics testing only.

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
| US-4-T-1 rejects invalid input | returns false | 1 |
| US-4-T-1 accepts valid input | returns true | 2 |
