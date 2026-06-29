import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, type Ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(
  elRef: Ref<HTMLElement | null>,
  options: {
    from?: gsap.TweenVars
    to?: gsap.TweenVars
    trigger?: string | Element
    start?: string
    toggleActions?: string
    stagger?: number
  } = {},
) {
  const { from = {}, to = {}, trigger, start = 'top 85%', toggleActions = 'play none none none', stagger } = options

  let st: ScrollTrigger | undefined

  onMounted(() => {
    if (!elRef.value) return

    const targets = stagger && elRef.value.children.length
      ? elRef.value.children
      : elRef.value

    const tween = gsap.fromTo(
      targets,
      { opacity: 0, y: 40, ...from },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: stagger ?? undefined,
        scrollTrigger: {
          trigger: trigger ?? elRef.value,
          start,
          toggleActions,
        },
        ...to,
      },
    )

    st = tween.scrollTrigger
  })

  onUnmounted(() => {
    st?.kill()
  })
}
