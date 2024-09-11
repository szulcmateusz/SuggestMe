<template>
<TheSubpageHeader/>
  <div v-if="!isLoading">
    <h2 class="text-center searched-song">Searched song: {{ $route.params.trackName }}</h2>
    <h3 class="searched-song">Select a song to display suggestions.</h3>
    <div class="tracks-container">
      <div v-for="track in tracks" :key="track.id" class="track-container">
        <div class="d-flex">
          <div class="image-container">
            <img :src="track.album.images[0].url" class="track-image">
          </div>
          <div class="track-info">
            <p>{{ track.name }}</p>
            <small v-for="artist in track.artists" :key="artist.id">{{ artist.name }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
    <LoadingSpinner v-else/>
</template>

<script>
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";

export default {
  components: {LoadingSpinner, TheSubpageHeader},
  data() {
    return {
      tracks: null,
      isLoading: true,
    };
  },
  methods: {
    async fetchTracks() {
      const res = await fetch(`http://localhost:3000/search?track=${this.$route.params.trackName}`);
      this.tracks = await res.json();
      this.isLoading = false;
      console.log(this.tracks);
    },
  },
  mounted() {
    this.fetchTracks();
  }
};
</script>

<style scoped>
.searched-song {
  margin: 20px 0;
}

.image-container {
  max-width: 120px;
}

.image-container img {
  width: 100%;
}

.tracks-container {
  display: flex;
  flex-wrap: wrap;
}

.track-container {
  width: 50%;
  transition: 0.2s;
  cursor: pointer;
  padding: 16px;
}

.track-container:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

.track-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.track-image {
  padding-right: 12px;
}

@media (max-width: 1024px) {
  .track-container {
    width: 100%;
  }
}
</style>