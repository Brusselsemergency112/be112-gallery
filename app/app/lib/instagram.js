const MOCK = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  media_url: `/gallery/${String(i + 1).padStart(2, "0")}.jpg`,
  caption: `Bruxelles — 02:${10 + i}. Un silence entre deux appels.`,
  permalink: "#",
  timestamp: new Date().toISOString(),
}));

export async function getInstagramMedia() {
  const token = process.env.IG_ACCESS_TOKEN;
  const userId = process.env.IG_USER_ID;

  if (!token || !userId) return MOCK;

  const url = `https://graph.instagram.com/${userId}/media?fields=id,media_url,caption,permalink,timestamp&access_token=${token}`;
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) return MOCK;

  const json = await res.json();
  return json.data || MOCK;
}
