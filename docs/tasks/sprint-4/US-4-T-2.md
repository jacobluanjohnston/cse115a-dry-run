---
id: US-4-T-2
story: US-4
sprint: 4
assignee: A. Student
estimate_hours: 2
---

# Add isOdd helper

## Description
Adds a one-line helper and is merged with Squash and merge to check how the checker handles squash merges. Metrics testing only.

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
| US-4-T-2 rejects invalid input | returns false | 1 |
| US-4-T-2 accepts valid input | returns true | 2 |
