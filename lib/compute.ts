"use server"
export  async function initGallery() {

  const root = document?.getElementById('property-gallery')
  if (!root) return
  const viewport = root.querySelector('[data-gallery-viewport]')
  const track = root.querySelector('[data-gallery-track]')
  const slides = track ? Array.from(track.children) : []
  const prevBtn = root.querySelector('[data-gallery-prev]')
  const nextBtn = root.querySelector('[data-gallery-next]')
  const counter = root.querySelector('[data-gallery-counter]')

  function slideWidth() {
    return slides[0].getBoundingClientRect().width + 16 /* gap */
  }
  function indexFromScroll() {
    const x = viewport ? viewport.scrollLeft : 0
    return Math.round(x / slideWidth())
  }
  function snapTo(i: number) {
    const clamped = Math.max(0, Math.min(i, slides.length - 1))
    viewport?.scrollTo({ left: clamped * slideWidth(), behavior: 'smooth' })
    updateCounter(clamped)
  }
  function updateCounter(i: number) {
    if (counter) counter.textContent = i + 1 + ' / ' + slides.length
  }

  prevBtn &&
    prevBtn.addEventListener('click', () => snapTo(indexFromScroll() - 1))
  nextBtn &&
    nextBtn.addEventListener('click', () => snapTo(indexFromScroll() + 1))
  viewport &&
    viewport.addEventListener(
      'scroll',
      () => {
        // keep counter roughly in sync during manual scroll
        updateCounter(indexFromScroll())
      },
      { passive: true }
    )

  // initial
  updateCounter(0)
}

