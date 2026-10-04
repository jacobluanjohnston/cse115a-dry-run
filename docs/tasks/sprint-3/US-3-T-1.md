---
id: US-3-T-1
story: US-3
sprint: 3
assignee: A. Student
estimate_hours: 2
---

# Restore fixture tests

## Description
Adds the fixture tests back to check the High risk / High verification quadrant. Metrics testing only.

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
| US-3-T-1 rejects invalid input | returns false | 1 |
| US-3-T-1 accepts valid input | returns true | 2 |
