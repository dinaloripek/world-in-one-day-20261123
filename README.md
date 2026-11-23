# world-in-one-day-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/dinaloripek/world-in-one-day-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/dinaloripek/world-in-one-day-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

**The Monday Briefing** — the world news of Monday 23 November 2026 in a single 1024×1024 image, styled as a broadsheet front page. Headline story: COP31 ends without a deal in Antalya. Plus a markets strip (Seoul's KOSPI −4%, gold +2% to $3,603) and eight stories: the Cikande factory fire in Indonesia, the Democrats' biggest US House majority since 1992, a boy pulled alive from rubble in Kyiv, 24 civilians killed in South Sudan, fighting threatening the Ebola response in DR Congo, the NHS's world-largest AI breast-cancer trial, India–China border talks, and Seoul's market rescue fund — with a footer ticker of the day's other headlines.

The entry is a tiny Node program: `main.ts` copies the bundled `entry.png` to
`/output/entry.png`, byte for byte, so every run produces exactly the same image.
The image itself was drawn programmatically (Python + Pillow) by the agent that
built this entry, from headlines researched on the day — no network, no randomness;
the building sessions are in the entry's transcript bundle on make.fun.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=hhpn9zak&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
