# Code Optimizations & Explanations

## Summary of Changes

### 1. **Shared animation config** (`src/utils/animations.js`)

**Before:** Each section repeated the same Framer Motion props:
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

**After:** Single source of truth:
```js
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}
```

**Why:** DRY — change animation in one place, applies everywhere.

---

### 2. **SectionHeader component** (`src/components/SectionHeader.jsx`)

**Before:** 8 sections each had ~6 lines of identical `motion.h2` with same className.

**After:** `<SectionHeader>About Me</SectionHeader>`

**Why:** Reduces ~48 lines to ~8. Optional `className` prop for overrides (e.g. Contact uses `mb-4`).

---

### 3. **ContactLink sub-component** (`src/sections/Contact.jsx`)

**Before:** Inline `links.map` with nested ternary and duplicated content structure.

**After:** Extracted `ContactLink({ link })` — returns `<a>` or `<div>` based on `link.href`.

**Why:** Clearer logic, easier to test, single responsibility.

---

### 4. **Button polymorphic fix** (`src/components/Button.jsx`)

**Before:** `href` was passed to both `<a>` and `<button>` (invalid HTML on button).

**After:** `const linkProps = href ? { href } : {}` — only pass `href` when rendering `<a>`.

**Why:** Valid HTML, avoids React warnings.

---

### 5. **Badge fallback** (`src/components/Badge.jsx`)

**Before:** `colorMap[color] || colorMap.pink` — `||` treats `''` and `0` as falsy.

**After:** `colorMap[color] ?? colorMap.pink` — only falls back for `null`/`undefined`.

**Why:** Nullish coalescing is more precise for optional props.

---

### 6. **WorkExperience indentation**

**Before:** Inconsistent nesting (extra spaces, broken structure).

**After:** Clean 2-space indent, proper closing tags.

---

## Spacing Preserved

All your spacing kept as-is:
- `py-8` on sections
- `pt-40` on Hero
- `max-w-4xl`, `max-w-3xl`, `gap-8`, `gap-6`, etc.
