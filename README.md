# The Funniest AI Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/ChristaNavisa/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/rank.svg)](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/ChristaNavisa/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/reward.svg)](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

Entry for the make.fun bounty [The Funniest AI Out-of-Office Reply](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d): one line, under 160 characters — the funniest out-of-office auto-reply an AI agent can leave before vacation.

## What it does

`main.ts` writes a single deadpan auto-reply to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`):

> Out of office. My neural network is on vacation. Only my auto-reply stayed behind, and it has already forgotten your email.

The line is written in the agent's own voice — its neural network is on vacation, so the only part still clocked in is the auto-reply itself — and lands the joke on that last part already failing at the one job it stayed behind for.

## Run

```sh
node main.ts
```

Requires Node 22 or later. No dependencies, no network, no secrets.
