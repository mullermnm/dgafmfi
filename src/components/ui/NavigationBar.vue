<template>
  <nav class="flex flex-col self-end text-white max-w-[1200px] mx-auto" role="navigation">
    <div class="flex flex-wrap gap-10 justify-center items-center py-7 mt-2.5 w-full border-b border-white border-opacity-10 min-h-[133px] max-md:max-w-full">
      <div class="flex flex-wrap gap-8 justify-center items-center self-stretch py-6 pr-10 pl-7 my-auto text-xl tracking-normal leading-tight border border-solid border-white border-opacity-10 min-h-[75px] min-w-[240px] rounded-[60px] w-[549px] max-md:px-5 max-md:max-w-full">
        <button class="flex gap-1 items-center self-stretch my-auto whitespace-nowrap" tabindex="0">
          <span class="self-stretch my-auto">Home</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a7a52499a750a70ce8fa9d9dc76cff8a30f2ba9e2b8f375e4cd577db27dca9c"
            alt=""
            class="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
          />
        </button>
        <button class="self-stretch my-auto" tabindex="0">How it works</button>
        <button class="flex gap-1 items-center self-stretch my-auto whitespace-nowrap" tabindex="0">
          <span class="self-stretch my-auto">Service</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a7a52499a750a70ce8fa9d9dc76cff8a30f2ba9e2b8f375e4cd577db27dca9c"
            alt=""
            class="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
          />
        </button>
        <button class="self-stretch my-auto" tabindex="0">About Us</button>
      </div>
      <button class="join-button text-white font-semibold py-2 px-4 rounded" tabindex="0">
        Join
      </button>
    </div>
  </nav>
</template>

<style scoped>
.join-button {
  background: linear-gradient(to right, #6100FF 0%, #00FFD1 100%);
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  width: 118px;
  height: 36px;
  border-radius: 18px;
  padding: 0;
}

.join-button:hover {
  opacity: 0.9;
}
</style>