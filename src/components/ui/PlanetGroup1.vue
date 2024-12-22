<template>
  <div class="planet-group">
    <div class="glow-circle"></div>
    <div class="planet-circle"></div>
  </div>
</template>

<script setup>
// No additional logic needed
</script>

<style scoped>
.planet-group {
  position: relative;
  width: 600px;
  height: 600px;
  display: flex;
  align-items: self-start;
  justify-content: self-start;
}

.glow-circle {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: rgba(100, 121, 178, 0.2);
  box-shadow:
    0 0 50px 50px rgba(100, 121, 178, 0.2),
    0 0 100px 100px #6479B2,
    0 0 150px 150px rgba(100, 121, 178, 0.1),
    0 0 200px 200px rgba(100, 121, 178, 0.05);
}

.planet-circle {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: #111111 1px solid;
  background: radial-gradient(circle at center,
    #111111 47%,
    #1F2737 100%
  );
  box-shadow: 0 0 40px rgba(100, 121, 178, 0.3);
}

</style>
