<template>
  <v-container fluid class="pa-0 d-flex align-center justify-center">
    <v-responsive :aspect-ratio="16/9">
      <video class="jumbotron-video v-responsive__sizer" loop autoplay muted>
        <source src="/videos/jumbotron.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </v-responsive>
  </v-container>
</template>

<style>
/* Add the following CSS for the video positioning */
.video-container {
  width: 1280px; /* Set the width of the container */
  height: 670px; /* Set the height of the container */
  flex-shrink: 0; /* Prevent the container from shrinking */
  display: flex;
  justify-content: center; /* Horizontally center the video */
  align-items: center; /* Vertically center the video */
}

.jumbotron-video {
  width: 100%; /* Make the video fill the container width */
  height: 100%; /* Make the video fill the container height */
  object-fit: cover; /* Adjust the video's size to cover the container while preserving its aspect ratio */
}

/* Add the following CSS to hide the video controls */
.jumbotron-video::-webkit-media-controls {
  display: none;
}

.jumbotron-video::-webkit-media-controls-enclosure {
  display: none;
}

.jumbotron-video::-webkit-media-controls-panel {
  display: none;
}

.v-responsive.aspect-ratio-16\\3\\9 {
  padding-bottom: 56.25%;
}
</style>

<script>
export default {
  name: 'Jumbotron',
};
</script>
