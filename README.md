## Question regarding `d.ts` files

Let's say I have some JS module `example`. Ideally I would fully convert `example` to a TS module, but that might take a while, so I want to take the intermediary step of writing an `example.d.ts` file to describe `example` so that I can get type Intellisense from other TS modules that use `example`.

I have `example.js` and `example.d.ts`, but when I import `example` from `pages/index.tsx`, I get:

```
File '...example.d.ts' is not a module.ts(2306)
```

Not sure if I'm authoring `d.ts` files incorrectly or misunderstanding how `d.ts` files are supposed to be used.