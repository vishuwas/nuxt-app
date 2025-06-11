<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-lg p-6 w-[90%] max-w-2xl relative">
      <button
        @click="$emit('close')"
        class="absolute top-2 right-2 text-gray-500 hover:text-black"
      >
        ✖
      </button>
      <h2 class="text-xl font-bold mb-2">{{ post?.title }}</h2>
      <p>{{ post?.body }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  post: Object,
});
defineEmits(["close"]);
</script>
