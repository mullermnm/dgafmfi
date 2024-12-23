<template>
  <section 
    class="flex flex-col items-center ml-48 py-16 max-w-7xl mx-auto font-inter"
    role="region" 
    aria-label="Hero section"
    ref="sectionRef"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
      <!-- Left Column -->
      <div class="flex flex-col col-span-2">
        <h1 class="text-5xl font-bold text-white leading-[79px] tracking-tighter max-md:text-4xl max-md:leading-[70px]">
          Locally Owned and Operated Explore a new era of financial services.
        </h1>

        <p class="text-xl leading-[30px] font-light tracking-wider text-white text-opacity-80 w-3/5">
          Digaf's financial solutions connect seamlessly through innovative
          digital platforms, enabling individuals and businesses to access and
          manage loans effortlessly.
        </p>

        <div class="flex gap-10 mt-12 font-semibold tracking-tight">
          <button
            class="group flex items-center px-16 py-6 text-black bg-white rounded-xl shadow-[0px_0px_1px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            @click="handleLearnMore"
          >
            <span class="text-xl">Learn</span>
            <Icon icon="material-symbols:arrow-right-alt-rounded" class="ml-2 w-8 h-8 transform group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          <button
            class="group flex items-center text-white text-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            @click="handleApply"
          >
            <span class="text-xl">Apply here</span>
            <Icon icon="material-symbols:arrow-right-alt-rounded" class="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <!-- Right Column -->
      <div class="flex flex-col col-span-1 mr-24 mt-12">
        <div class="">
          <h2 class="text-7xl font-extrabold tracking-tighter text-white">
            {{ formatNumber(displayedProducts) }}+
          </h2>
          <p class="text-base text-md tracking-wide font-light leading-5 text-white text-opacity-80 w-4/5">
            Loan products and services, and growing. Digaf connects individuals
            and businesses through innovative financial solutions, enabling
            seamless access to funds and support.
          </p>
        </div>

        <div class="relative">
          <h2 class="text-5xl font-extrabold tracking-tighter text-white whitespace-nowrap absolute right-8 transform -translate-x-0">
            Birr {{ formatNumber(displayedAmount) }}+
          </h2>
          <p class="mt-20 text-base font-light leading-5 text-white text-opacity-80 w-4/5">
            Loans disbursed. Empowering communities with accessible and impactful
            financial services.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const sectionRef = ref(null)
const displayedProducts = ref(0)
const displayedAmount = ref(0)
const duration = 2000 // Animation duration in milliseconds
const hasAnimated = ref(false)

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const animateNumber = (start, end, updateRef, duration) => {
  const startTime = performance.now()
  const updateNumber = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function for smooth animation
    const easeOutQuad = 1 - (1 - progress) * (1 - progress)
    const current = Math.floor(start + (end - start) * easeOutQuad)
    
    updateRef.value = current
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber)
    } else {
      // Pause for 3 seconds after reaching the target
      setTimeout(() => {
        updateRef.value = end
      }, 3000)
    }
  }
  requestAnimationFrame(updateNumber)
}

const startAnimations = () => {
  if (!hasAnimated.value) {
    animateNumber(0, 272, displayedProducts, duration)
    animateNumber(0, 6024887388, displayedAmount, duration)
    hasAnimated.value = true
  }
}

onMounted(() => {
  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimations()
        observer.disconnect() // Stop observing after animation starts
      }
    })
  }, {
    threshold: 0.2 // Start animation when 20% of the section is visible
  })

  // Start observing the section
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

const handleLearnMore = () => {
  // Handle learn more click
}

const handleApply = () => {
  // Handle apply click
}
</script>

<style scoped>
.group:hover span:last-child {
  transform: translateX(4px);
  transition: transform 0.3s ease;
}
</style>