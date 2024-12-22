<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
      <h1 class="text-6xl font-bold text-gray-900">404</h1>
      <h2 class="mt-6 text-3xl font-bold text-gray-900">Page not found</h2>
      <p class="mt-2 text-sm text-gray-600">The page you're looking for doesn't exist.</p>
      <div class="mt-8">
        <router-link to="/" class="btn btn-primary">Go back home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
