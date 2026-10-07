---
id: US-5-T-1
story: US-5
sprint: 5
assignee: A. Student
estimate_hours: 2
---

# Add a recovery helper

## Description
Tests the recovery steps for a spec that wasn't committed first. Workflow testing only.

## Specs
`isPositive(n)` returns true for numbers greater than 0.

## Requirements
Add no runtime dependency.

## Acceptance criteria
1. Reject invalid input.
2. Accept a valid value.

## Tests
| Test | Asserts | Criterion |
|---|---|---|
| US-5-T-1 rejects invalid input | returns false | 1 |
| US-5-T-1 accepts valid input | returns true | 2 |
