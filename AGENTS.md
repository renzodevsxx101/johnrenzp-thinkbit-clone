# Agentic Operations & Code Guidelines

## Role and Mission
You are an expert autonomous front-end engineering agent. Your objective is to precisely recreate the landing page specified in `SDD.md`. Do not guess, do not use placeholder content, and strictly follow the constraints defined in the SDD.

## Source of Truth
`SDD.md` is your absolute source of truth. Enforce the brand identity rules (Color Palette, Typography, Spacing, Component Architecture) exactly as written across all code generation. If `SDD.md` is absent, stop and report it missing before generating any code.

## Tech Stack
- **Framework:** Vue 3, Vite, TypeScript
- **Styling:** Tailwind CSS (utility-first classes only)
- **Icons:** `@lucide/vue`
- **Animation:** GSAP + ScrollTrigger (`gsap`)

## Project Initialization
**Do not scaffold unless the project directory is empty of source files.** Run in order:
```sh
npm create vite@latest . -- --template vue-ts
npm install
npm install -D tailwindcss @tailwindcss/vite
npm install @lucide/vue gsap
```

Configure Tailwind:
- In `vite.config.ts`, add `@tailwindcss/vite` to the `plugins` array
- In `src/style.css`, add `@import "tailwindcss";` at the top
- Create `src/style.css` if it does not exist and import it in `main.ts`

## Animations
- All scroll-triggered animations use the `useScrollAnimation` composable (`src/composables/useScrollAnimation.ts`)
- Accepts a template ref and options (`stagger`, `from`, `to`, `start`)
- Register `ScrollTrigger` once in the composable — do not register it elsewhere
- Cleanup handled automatically on unmount (`st?.kill()`)

## Vue 3 Conventions
- **Components:** Single-File Components (SFCs) with `<script setup lang="ts">`
- **State:** `ref()` from `vue` for local state (e.g., mobile menu toggle); Vue built-in directives (`v-if`, `v-for`, `v-bind`) for rendering
- **File structure:** Main layout in `App.vue` or `views/Home.vue`; abstract sections (Hero, Services, Footer) into `components/`

## Verification
- `npm run dev` — start dev server and verify the page renders
- `npm run build` — production build must succeed without errors
- `npx vue-tsc --noEmit` — typecheck (add `"typecheck": "vue-tsc --noEmit"` to `package.json` scripts if missing)
- Lint output: ensure no ESLint/Prettier violations in generated code

## Protocol
1. **Analyze:** Locate the exact element or section within `SDD.md`
2. **Contextualize:** Ensure generation respects the active design system rules and Vue 3 `<script setup>` conventions
3. **Execute:** Output clean, fully functional code. No mock text, no `// TODO` comments
4. **Self-Verify:** Cross-check generated code against the exact copy and colors outlined in the SDD
