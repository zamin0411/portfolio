/**
 * Shared Framer Motion animation configs.
 * Reusing these avoids repetition and keeps animations consistent.
 *
 * Why: DRY principle — same fade-in-up used in 10+ places.
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

/** Hero uses animate (not whileInView) since it's above the fold — no scroll needed */
export const fadeInUpHero = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}
