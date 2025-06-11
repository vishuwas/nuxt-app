<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Posts</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @click="goToPost(post.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { usePostsStore } from "@/stores/posts";
import PostCard from "@/components/PostCard.vue";
import { useRouter } from "vue-router";

const store = usePostsStore();
const router = useRouter();

await store.fetchPosts();
const posts = store.posts;
const loading = store.loading;

const goToPost = (id) => {
  router.push(`/posts/${id}`);
};
</script>
