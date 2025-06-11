<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Posts</h1>

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load posts: {{ error.message }}</div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PostCard
        v-for="post in postsData.posts"
        :key="post.id"
        :post="post"
        @click="handlePostClick(post)"
      />
    </div>

    <!-- Dialog -->
    <PostDialog :show="showDialog" :post="selectedPost" @close="closeDialog" />
  </div>
</template>

<script setup>
import PostCard from "@/components/PostCard.vue";
import PostDialog from "@/components/PostDialog.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const {
  data: postsData,
  pending,
  error,
} = await useFetch("https://dummyjson.com/posts", {
  server: true,
  lazy: false,
  key: "posts",
});

const showDialog = ref(false);
const selectedPost = ref(null);

const handlePostClick = (post) => {
  selectedPost.value = post;
  showDialog.value = true;
  router.push(`/posts/${post.id}`); // navigate to dynamic route
};

const closeDialog = () => {
  showDialog.value = false;
  router.push("/posts"); // go back to posts page
};
</script>
