<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">{{ post?.title }}</h1>
    <p class="mt-4">{{ post?.body }}</p>
  </div>
</template>

<script setup>
const route = useRoute();

const {
  data: post,
  pending,
  error,
} = await useFetch(`https://dummyjson.com/posts/${route.params.id}`, {
  server: true,
  key: `post-${route.params.id}`,
  cache: { maxAge: 60 * 15 },
});
</script>
