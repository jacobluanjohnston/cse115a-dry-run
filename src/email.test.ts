import { isUcscEmail } from "./email";

const cases: Array<[string, boolean]> = [
  ["student@ucsc.edu", true],
  ["student@gmail.com", false],
  ["", false],
];

for (const [email, expected] of cases) {
  if (isUcscEmail(email) !== expected) {
    throw new Error(`isUcscEmail(${email}) expected ${expected}`);
  }
}
