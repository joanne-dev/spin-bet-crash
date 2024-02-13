export const getMultiplier = async () => {
  const seed = new Date().toISOString();
  const hash = await generateHash(seed);
  const seedHash = seed + hash;
  let multiplier = 0;
  for (let i = 0; i < seedHash.length; i++) {
    multiplier += seedHash.charCodeAt(i);
  }
  return Number(((multiplier % 100) / 10 + 1).toFixed(2));
};
export const generateHash = async (seed: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(seed);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
};
