<template>
  <v-container class="padding-md-130 mt-50" style="max-width: 1280px;" >
    <v-row class="mb-md-16">
      <v-col md="6" cols="12" class="padding-md-16 welcome-image">
        <p class="text-1 d-sm-inline d-md-block">Welcome to &nbsp;</p>
        <p class="text-2 d-sm-inline d-md-block">AGORA PRODUCTION</p>
        <br class="d-none d-md-block"/>
        <br class="d-none d-md-block"/>
        <br />
        <p class="text-3">Agora is a public open space used for assemblies and markets in ancient Greek. Just like agora, we wanted to create an “open space” platform for all people.</p>
      </v-col>
      <v-col md="6" cols="12" class="d-sm-flex justify-sm-center justify-md-start">
        <img src="../../assets/images/welcome.png" style="width: 465px; height: 607px;" alt="Welcome Image" >
      </v-col>
    </v-row>
    <v-row class="mt-md-16">
      <v-col cols="12" class="text-center text-md-left">
        <v-text class="text-bottom pl-md-16 pt-md-16 ml-md-16">AGORA AS OPEN SPACE</v-text>
      </v-col>
    </v-row>
    <!-- Common container for both images -->
    <div class="image-container">
      <!-- Square Image -->
      <img src="../../assets/images/square  1.png" alt="Square Image" class="square-image d-sm-none d-lg-block">
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style scoped>
/* Your existing styles remain unchanged */

.text-1 {
  font-family: 'Playfair Display', serif !important;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
  line-height: normal;
  font-style: normal;
}

.text-2 {
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 300;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
  font-style: normal;
}

.text-3 {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: justify;
  font-style: normal;
}

.text-bottom {
  font-family: "Playfair Display";
  font-size: 45px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 0.01em;
  text-align: left;
}

/* Add custom class for welcome image */
.welcome-image {
  justify-content: center;
  align-items: center;
}


@media (min-width: 960px) {
  .padding-md-130 {
    padding: 130px;
  padding-bottom: 50px;

  }
}

@media (max-width: 960px) {
  .text-1 {
    font-size: 24px;
  }
  .text-2 {
    font-size: 24px;

  }
  .text-bottom {
    font-size: 24px;

  } 
  .square-image{
    display: none;
  }
}

.mt-50 {
  margin-top: 50px;
}

/* Common container for both images */
.image-container {
  position: relative;
}

/* Custom CSS for the square image */
.square-image {
  position: absolute;
  bottom:195px; /* Adjust this value to move the image slightly upwards */
  left:482px;
  transform: translate(-50%, -50%);
  width: 317px;
  height: 99px;
  flex-shrink: 0;
  background: url(path_to_your_square_image.jpg), lightgray 50% / cover no-repeat;
}
</style>
