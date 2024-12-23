<template>
  <div class="bg-black min-h-screen w-full">
    <OpenAppLink />
    <HeroSection />
    <LearnLocallyOwned />
    <JoinTheFutureOfFinance />
    <CoreServices />
    <FinancialJourneyStart class="w-2/3 " />
  </div>
</template>

<script setup>
  import OpenAppLink from '../components/ui/OpenAppLink.vue'
  import HeroSection from '../components/layout/HeroSction.vue'
  import LearnLocallyOwned from '../components/layout/LearnLocallyOwned.vue'
  import JoinTheFutureOfFinance from '../components/layout/JoinTheFutureOfFinance.vue'
  import CoreServices from '../components/layout/CoreServices.vue'
  import FinancialJourneyStart from '../components/ui/FinancialJourneyStart.vue'
</script>
