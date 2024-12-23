<template>
  <div class="relative min-h-screen">
    <DgafLogoNav />
    <!-- SVG Overlay Layer -->
    <CenterBackground />
    <MainNavigation class="absolute top-[250px] z-30" />
    <PlanetGroup1 class="absolute top-[250px] left-[30px] z-10"/>
    <div class="absolute inset-0 z-20 pointer-events-none mt-16 flex items-center">
      <img src="../../assets/animatingWave.svg" alt="Dgaf Logo" class="absolute top-0 right-0 w-[450px] h-[400px]" />
      <img src="../../assets/planet.svg" alt="Dgaf Logo" class="absolute top-[350px] right-[50px] w-[250px] h-[250px]" />
      <!-- <img src="../../assets/frame12611554198530-4z97.svg" alt="Dgaf Logo" class="absolute top-[450px] right-0 w-[500px] h-[1500px]" /> -->
      <div class="flex items-center mt-12">
        <img src="../../assets/animatingChart.svg" alt="Dgaf Logo" class="w-[507px] h-[373px]" />
      </div>
    </div>
    <!-- Background Layer -->
    <!-- <HeroBackground1 class="right-0 mt-24 h-2/3"/> -->
    <!-- Main Content -->
    <div class="mt-12 z-20">
      <section class="flex flex-col rounded-none relative" role="banner" aria-label="Hero Section">
        <div class="flex relative flex-col px-16 w-full min-h-[1298px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40a9ec89a80752e6be5bffbdccc8b2b367f8e9844e81e29e738b755f523adb6"
            alt="Hero background"
            class="object-cover absolute inset-0 size-full"
          />
          <div class="relative max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col">
              <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div class="flex relative flex-col w-full max-md:mt-5 max-md:max-w-full">
                  <div class="max-md:max-w-full">
                    <div class="flex gap-5 max-md:flex-col">
                      <div class="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6565dc85453108585a9eec89f3246f19adbe414f4658ce5a3136b8d27fa5dd8e"
                          alt="Feature icon 1"
                          class="object-contain shrink-0 mt-80 aspect-[1.01] w-[87px] max-md:mt-10"
                        />
                      </div>
                      <div class="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                        <div class="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a749c5aa30f868e1d4655250ab774ae7092027e6ffb11dbd98a6aea3e4ac1304"
                            alt="Feature icon 2"
                            class="object-contain ml-5 aspect-[1.02] w-[97px] max-md:ml-2.5"
                          />
                          <div class="mt-36 max-md:mt-10 max-md:max-w-full">
                            <div class="flex gap-5 max-md:flex-col">
                              <div class="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9c4113a8bf5a501090611803ca0fdbad1a5d638e7c7b737f685d97a1f851795"
                                  alt="Feature icon 3"
                                  class="object-contain grow shrink-0 max-w-full aspect-[1.01] w-[168px] max-md:mt-10"
                                />
                              </div>
                              <div class="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4624d2acabe1e254e735d0898d62138d7479dbbd5b9b89ff4b2dd4813329be0c"
                                  alt="Feature icon 4"
                                  class="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[33.33] w-[202px] max-md:mt-10"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8488b57ad4efbd765b4597d7b00924484218d4ee9262e8ce8e7abb081aec05d"
                    alt="Feature icon 5"
                    class="object-contain self-end mt-1.5 mr-6 aspect-[1.01] w-[86px] max-md:mr-2.5"
                  />
                  <div class="flex flex-col mt-9 ml-14 max-w-full w-[342px] max-md:ml-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/144c13aae022e300541b3ef2628c4f80b42193c3f2ca14f7d731da17e058b007"
                      alt="Feature icon 6"
                      class="object-contain max-w-full aspect-[1.01] w-[198px]"
                    />
                    <button
                      class="flex overflow-hidden text-white relative gap-2 items-center self-end px-10 pt-5 pb-5 mt-12 rounded-[50px] max-md:px-5 max-md:mt-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 open-dapp-button"
                      aria-label="Open dAPP"
                    >
                      <div class="flex absolute inset-0 z-1 shrink-0 self-start h-[66px] rounded-[50px] w-[220px] bg-gradient-to-r from-[#9966FF] to-[#651FFF]"></div>
                      <span class="self-stretch pr-1 z-0 pb-px pl-1 my-auto text-lg font-bold leading-tight text-center text-white">
                        Open dApp
                      </span>
                      <div class="flex z-0 items-start self-stretch my-auto w-6">
                        <div class="flex overflow-hidden items-start py-1.5 pr-2.5 w-6">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f53bdd610fd7ec22e76cc03b9f91b74fb7ccaa6e37647388cc3b44d0a10253e3"
                            alt=""
                            class="object-contain aspect-square w-[15px] arrow"
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div class="flex relative flex-col mt-52 w-full max-md:mt-10 max-md:max-w-full">
                  <div class="w-full max-md:max-w-full">
                    <div class="flex gap-5 max-md:flex-col">
                      <div class="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                        <div class="flex grow items-start mt-10 max-md:mt-10">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d885050fc486f28c8ea2aed45ba01d9df42d6f12cc489360c0aced7b8171c5"
                            alt="Feature illustration 1"
                            class="object-contain z-10 self-end mt-12 w-full aspect-[1.13] max-md:mt-10 max-md:-mr-0.5"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4a622da3ff29a7c1a4cdc5887639144572764e78e35f5834239d160919bc3ce"
                            alt="Feature illustration 2"
                            class="object-contain shrink-0 self-start max-w-full aspect-[1.01] w-[107px]"
                          />
                        </div>
                      </div>
                      <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div class="flex shrink-0 h-[166px] w-[168px] max-md:mt-10"></div>
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8201ada0996c09339c224bb5698c4b40dfc8c98a726b40d0b82b2fe3e54e329"
                    alt="Feature illustration 3"
                    class="object-contain self-end mt-6 mr-28 max-w-full aspect-[1.01] w-[225px] max-md:mr-2.5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex relative flex-wrap gap-5 items-start self-start pr-80 mt-16 ml-40 min-h-[53px] max-md:pr-5 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0948bb9779d070a191a8ec4691ca18b68cb0b6d9125df27ce726549887820bd"
              alt="Community icon"
              class="object-contain grow shrink gap-0 aspect-[1.96] w-[83px]"
            />
            <div class="flex flex-col pr-2.5 pb-px">
              <div class="text-3xl font-bold leading-none text-white">5k+</div>
              <div class="text-xs leading-5 text-zinc-400">Community members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import DgafLogoNav from '../ui/DgafLogoNav.vue'
import HeroBackground1 from '../ui/HeroBackground1.vue'
import PlanetGroup1 from '../ui/PlanetGroup1.vue'
import CenterBackground from '../ui/CenterBackground.vue'
import MainNavigation from './MainNavigation.vue'
</script>

<style scoped>
.open-dapp-button:hover .arrow {
  transform: translateY(20px) translateX(-5px);
  transition: transform 0.1s ease-in-out;
}

.open-dapp-button:hover .arrow {
  animation: moveArrow 0.5s forwards;
}

@keyframes moveArrow {
  0% {
    transform: translateY(20px) translateX(-5px);
  }
  100% {
    transform: translateY(0) translateX(0) scale(1.4);
  }
}
</style>