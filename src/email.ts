export function isUcscEmail(email: string): boolean {
  return email.trim().toLowerCase().endsWith("@ucsc.edu");
}
