<template>
  <div class="center-bg"></div>
</template>

<script setup>
</script>

<style scoped>
.center-bg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: linear-gradient(to right,
    transparent,
    rgba(173, 56, 193, 0.1) 10%,
    rgba(173, 56, 193, 0.8) 30%,
    rgba(173, 56, 193, 1) 50%,
    rgba(173, 56, 193, 0.8) 70%,
    rgba(173, 56, 193, 0.1) 90%,
    transparent
  );
  mask-image: linear-gradient(to bottom,
    transparent,
    rgba(173, 56, 193, 0.1) 10%,
    rgba(173, 56, 193, 0.4) 30%,
    rgba(173, 56, 193, 1) 50%,
    rgba(173, 56, 193, 0.4) 70%,
    rgba(173, 56, 193, 0.1) 90%,
    transparent
  );
  -webkit-mask-image: linear-gradient(to bottom,
    transparent,
    rgba(173, 56, 193, 0.1) 10%,
    rgba(173, 56, 193, 0.4) 30%,
    rgba(173, 56, 193, 1) 50%,
    rgba(173, 56, 193, 0.4) 70%,
    rgba(173, 56, 193, 0.1) 90%,
    transparent
  );
  box-shadow:
    0 0 200px 200px rgba(173, 56, 193, 0.05),
    400px 400px 400px 400px rgba(173, 56, 193, 0.1),
    600px 600px 600px 600px rgba(173, 56, 193, 0.08),
    800px 800px 800px 800px rgba(173, 56, 193, 0.05);
  z-index: 0;
}
</style>
