/**
 * WCAG contrast check: (L1 + 0.05) / (L2 + 0.05)
 * AA normal text: ≥ 4.5:1, large text: ≥ 3:1. AAA: 7:1 / 4.5:1
 */
function hexToLuminance(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const toLinear = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function contrast(hex1, hex2) {
  const L1 = hexToLuminance(hex1);
  const L2 = hexToLuminance(hex2);
  const [light, dark] = L1 > L2 ? [L1, L2] : [L2, L1];
  return ((light + 0.05) / (dark + 0.05)).toFixed(2);
}

const colors = {
  background: "#0c0c0c",
  foreground: "#fafafa",
  primary: "#dc2626",
  "primary-hover": "#de3333",
  "primary-on-dark": "#ef5f5f",
  muted: "#a3a3a3",
  card: "#171717",
  footer: "#0a0a0a",
  white: "#ffffff",
};

const pairs = [
  ["foreground auf background (Fließtext)", colors.foreground, colors.background],
  ["muted auf background", colors.muted, colors.background],
  ["muted auf card", colors.muted, colors.card],
  ["primary-on-dark auf background", colors["primary-on-dark"], colors.background],
  ["primary-on-dark auf card", colors["primary-on-dark"], colors.card],
  ["weiß auf primary (Buttons)", colors.white, colors.primary],
  ["weiß auf primary-hover", colors.white, colors["primary-hover"]],
  ["foreground auf card", colors.foreground, colors.card],
  ["weiß auf footer", colors.white, colors.footer],
];

const AA_NORMAL = 4.5;
const AA_LARGE = 3;

console.log("=== Kontrastprüfung (WCAG 2.1) ===\n");
console.log("AA: Normaltext ≥ 4.5:1, Großer Text ≥ 3:1\n");

let failed = [];
for (const [label, fg, bg] of pairs) {
  const ratio = parseFloat(contrast(fg, bg));
  const okNormal = ratio >= AA_NORMAL;
  const okLarge = ratio >= AA_LARGE;
  const status = okNormal ? "✓" : okLarge ? "○ (nur großer Text)" : "✗";
  console.log(`${label}: ${ratio}:1 ${status}`);
  if (!okLarge) failed.push({ label, ratio });
}

if (failed.length) {
  console.log("\n--- Unter 3:1 (kritisch) ---");
  failed.forEach(({ label, ratio }) => console.log(`  ${label}: ${ratio}:1`));
}
