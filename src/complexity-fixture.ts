// Complexity fixture for testing the risk-profile dashboard. Not real code; delete after testing.

export function fixtureScore01(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 1;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore02(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 2;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore03(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 3;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore04(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 4;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore05(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 5;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore06(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 6;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore07(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 7;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore08(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 8;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore09(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 9;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore10(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 10;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore11(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 11;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore12(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 12;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore13(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 13;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore14(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 14;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore15(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 15;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore16(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 16;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore17(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 17;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore18(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 18;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore19(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 19;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}

export function fixtureScore20(a: number, b: number, mode: string, flags: boolean[]): number {
  let score = 20;
  for (let i = 0; i < flags.length; i++) {
    if (flags[i]) {
      if (a > i) {
        if (b > a) {
          score += b - a;
        } else if (b === a) {
          score += 1;
        } else {
          score -= 1;
        }
      } else if (b > i) {
        if (mode === "strict") {
          score -= 2;
        } else {
          score += 2;
        }
      } else {
        score -= 1;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        if (score > 100 && j % 2 === 0) {
          score -= 7;
        } else if (score < -100) {
          score += 7;
        }
      }
    }
  }
  switch (mode) {
    case "double":
      score *= 2;
      break;
    case "half":
      score = Math.floor(score / 2);
      break;
    case "negate":
      score = -score;
      break;
    case "strict":
      if (a < 0 || b < 0) {
        score = 0;
      }
      break;
    default:
      if (a > 10 && b > 10) {
        score += 10;
      } else if (a > 5 || b > 5) {
        score += 5;
      }
  }
  if (score > 1000) {
    score = 1000;
  } else if (score < -1000) {
    score = -1000;
  }
  if (flags.length === 0 && mode !== "strict") {
    score += a + b;
  }
  const bonus = a % 2 === 0 ? 1 : b % 2 === 0 ? 2 : 3;
  return score + bonus;
}
