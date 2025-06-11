<template>
  <div class="p-4 border rounded cursor-pointer hover:shadow">
    <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
    <p>{{ post.body.slice(0, 100) }}...</p>
  </div>
</template>

<script setup>
defineProps({
  post: Object,
});
</script>
