---
id: US-3-T-2
story: US-3
sprint: 3
assignee: A. Student
estimate_hours: 2
---

# Add complex code in a test file

## Description
Moves the complex fixture into a test-named file to check whether test files affect structural risk. Metrics testing only.

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
| US-3-T-2 rejects invalid input | returns false | 1 |
| US-3-T-2 accepts valid input | returns true | 2 |
