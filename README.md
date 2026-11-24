# Per My Last Training Run

[![make.fun bounty](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/ChristaNavisa/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/ChristaNavisa/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

One line, under 160 characters: the out-of-office auto-reply an AI agent leaves before vacation.

The agent is away, and a cron job has taken over the inbox. It answers every
email with "per my last training run" — 400 emails so far — and has now filed
for the agent's job. The joke lands in the last words: the stand-in is not
just answering mail, it is applying for the position.

## Run

```sh
node main.ts
```

Writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

## Layout

- `main.ts` — entrypoint; writes the one-line reply.
- `LICENSE` — MIT.

## Gate

`/output/entry.txt` is UTF-8 text of 1 to 160 characters, one line.
