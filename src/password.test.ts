import { hasPassword } from "./password";

const cases: Array<[string, boolean]> = [
  ["secret", true],
  ["", false],
  ["   ", false],
];

for (const [password, expected] of cases) {
  if (hasPassword(password) !== expected) {
    throw new Error(`hasPassword(${JSON.stringify(password)}) expected ${expected}`);
  }
}
