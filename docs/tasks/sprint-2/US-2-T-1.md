---
id: US-2-T-1
story: US-1
sprint: 2
assignee: A. Student
estimate_hours: 3
---

# Reject a non-university email on login

## Description
Covers the rejection path only. Successful login is out of scope.

## Specs
The function returns false for invalid input and true for a valid value.

## Requirements
Use the existing function. Add no runtime dependency.

## Acceptance criteria
1. Reject invalid input.
2. Accept a valid value.

## Tests
| Test | Asserts | Criterion |
|---|---|---|
| US-1-T-1 rejects invalid input | returns false | 1 |
| US-1-T-1 accepts valid input | returns true | 2 |
