<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <h1 class="text-4xl font-bold text-gray-800 mb-6">
      Welcome to the Nuxt Posts App
    </h1>
    <NuxtLink
      to="/posts"
      class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md"
    >
      Go to Posts
    </NuxtLink>
  </div>
</template>
