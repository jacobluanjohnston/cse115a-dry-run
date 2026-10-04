---
id: US-2-T-1
story: US-2
sprint: 2
assignee: A. Student
estimate_hours: 2
---

# Add math helpers

## Description
Adds small math helper functions and a test file. Metrics testing only.

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
| US-2-T-1 rejects invalid input | returns false | 1 |
| US-2-T-1 accepts valid input | returns true | 2 |