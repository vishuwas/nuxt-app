import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
    loading: false,
    lastFetched: null,
  }),
  actions: {
    async fetchPosts() {
      const now = new Date();
      if (this.lastFetched && now - this.lastFetched < 15 * 60 * 1000) return;

      this.loading = true;
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      this.posts = data.posts;
      this.loading = false;
      this.lastFetched = now;
    },
  },
});
