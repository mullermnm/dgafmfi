<template>
    <div class="flex flex-col rounded-none" role="main">
      <div
        class="p-2 w-full rounded-3xl bg-white bg-opacity-10 max-md:max-w-full"
        aria-label="Financial Breakdown Overview"
      >
        <div class="flex gap-0 max-md:flex-col">
          <!-- Card 1 -->
          <section 
            class="group flex flex-col w-[33%] max-md:ml-0 max-md:w-full relative overflow-hidden"
            aria-labelledby="microloans-heading"
          >
            <div class="flex flex-col grow max-md:mt-10 max-md:max-w-full relative">
              <div class="flex flex-col self-center max-w-full text-2xl leading-none whitespace-nowrap w-[130px] relative z-10">
                <div class="self-start font-semibold text-violet-600" role="text">60%</div>
                <h2 id="microloans-heading" class="mt-5 font-extrabold text-black">Microloans</h2>
              </div>
              <div class="flex flex-col pt-20 mt-14 w-full text-xl font-extrabold leading-5 rounded-t-3xl rounded-b-none bg-purple-300 bg-opacity-10 max-md:mt-10 max-md:max-w-full relative z-10" tabindex="0">
                <div class="flex overflow-hidden gap-8 items-start pt-3.5 pr-3.5 pb-20 bg-violet-600 rounded-t-3xl rounded-b-none relative">
                  <!-- Animated background overlay -->
                  <div class="absolute inset-y-0 left-0 w-[90%] bg-white transform -translate-x-full transition-all duration-500 ease-in-out rounded-tr-[450px] group-hover:translate-x-0"></div>
                  <div class="flex shrink-0 w-0 bg-white rounded-[10px] h-[389px] relative z-10" role="presentation"></div>
                  <div class="flex flex-col grow shrink-0 items-start mt-2.5 basis-0 w-fit relative z-10">
                    <p class="text-white group-hover:text-transparent  text-opacity-70">Supporting community growth and well-being.</p>
                    <h3 class="pr-12 pb-px mt-10 text-4xl tracking-tighter leading-10 text-white group-hover:text-black max-md:pr-5 max-md:mt-10">+ Financial <br />Empowerment.</h3>
                    <p class="self-stretch mt-14 text-white text-opacity-50 max-md:mt-10">
                      <span class="text-white group-hover:text-transparent">Empowering individuals and businesses</span><br />
                      <span class="text-white group-hover:text-transparent">to achieve financial success</span>.<br /><br />
                      <span class="text-white group-hover:text-transparent">Financial empowerment for all.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Card 2 -->
          <section 
            class="group flex flex-col w-[33%] max-md:ml-0 max-md:w-full relative overflow-hidden"
            aria-labelledby="savings-heading"
          >
            <div class="flex flex-col mt-40 w-full max-md:mt-10 max-md:max-w-full relative">
              <div class="flex flex-col self-start ml-24 text-2xl leading-none max-md:ml-2.5 relative z-10">
                <div class="self-start font-semibold text-violet-600" role="text">30%</div>
                <h2 id="savings-heading" class="mt-3 font-extrabold text-white">Savings Accounts</h2>
              </div>
              <div class="mt-14 max-md:mt-10 max-md:max-w-full">
                <div class="flex flex-col w-full">
                  <div class="flex flex-col pt-24 mx-auto w-full font-extrabold rounded-t-3xl rounded-b-none bg-purple-300 bg-opacity-10 relative z-10" tabindex="0">
                    <div class="flex overflow-hidden gap-7 items-start pt-3.5 pr-5 bg-violet-600 rounded-t-3xl rounded-b-none shadow-[0px_4px_4px_rgba(0,0,0,0.25)] relative">
                      <!-- Animated background overlay -->
                      <div class="absolute inset-y-0 left-0 w-[90%] bg-white transform -translate-x-full transition-all duration-500 ease-in-out rounded-tr-[450px] rounded-tr-[50px] group-hover:translate-x-0"></div>
                      <div class="flex shrink-0 w-0 bg-white rounded-[10px] h-[299px] relative z-10" role="presentation"></div>
                      <div class="flex flex-col grow shrink-0 mt-3 basis-0 w-fit relative z-10">
                        <p class="text-base tracking-wider leading-none uppercase text-white group-hover:text-transparent text-opacity-70">Giving back to the communities we serve.</p>
                        <h3 class="self-start pr-12 pb-px mt-16 text-4xl tracking-tighter leading-10 text-white group-hover:text-black max-md:pr-5 max-md:mt-10">+ Community <br />Development.</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Card 3 -->
          <section 
            class="group flex flex-col w-[33%] max-md:ml-0 max-md:w-full relative overflow-hidden"
            aria-labelledby="education-heading"
          >
            <div class="flex flex-col mt-[250px] w-full max-md:mt-10 max-md:max-w-full relative">
              <div class="flex flex-col self-center max-w-full text-2xl leading-none w-[234px] relative z-10">
                <div class="self-start font-semibold text-violet-600" role="text">10%</div>
                <h2 id="education-heading" class="mt-5 font-black text-white">Financial Education</h2>
              </div>
              <div class="flex flex-col pt-20 mt-16 w-full rounded-t-3xl rounded-b-none bg-purple-300 bg-opacity-10 relative z-10" tabindex="0">
                <div class="flex overflow-hidden gap-7 pt-3.5 bg-violet-600 rounded-t-3xl rounded-b-none shadow-[0px_4px_4px_rgba(0,0,0,0.25)] relative">
                  <!-- Animated background overlay -->
                  <div class="absolute inset-y-0 left-0 w-[90%] bg-white transform -translate-x-full transition-all duration-500 ease-in-out rounded-tr-[250px] group-hover:translate-x-0"></div>
                  <div class="flex shrink-0 self-start w-0 bg-white rounded-[10px] h-[186px] relative z-10" role="presentation"></div>
                  <div class="flex flex-col grow shrink-0 basis-0 w-fit relative z-10">
                    <p class="text-base font-semibold tracking-wider leading-4 uppercase text-white group-hover:text-transparent text-opacity-70">Fair lending practices and ethical business conduct.</p>
                    <h3 class="pr-6 pb-px mt-14 text-4xl font-extrabold tracking-tighter leading-10 text-white group-hover:text-black max-md:pr-5 max-md:mt-10">+ Ethical and <br />Transparent Practices.</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
  name: 'FinancialBreakdown'
}
</script>

<style scoped>
/* Ensure smooth transitions */
.group:hover .bg-white {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reverse animation */
.group:not(:hover) .bg-white {
  transform: translateX(-100%);
  border-radius: 0 150px 0 0;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>