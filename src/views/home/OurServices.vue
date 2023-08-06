<template>
    <v-container style="max-width: 1280px;" class="mt-16 mt-md-0">
      <v-row class="custom-row">
        <!-- Left column -->
        <v-col md="4" cols="12" class="left-column">
          <p class="services-title">Our Services</p>
        </v-col>
  
        <!-- Right column -->
        <v-col md="8" cols="12" class="right-column">
          <p style="word-wrap: break-word;">
            Discover our marketing company, delivering creative solutions to over 70 clients and partners.
            From digital marketing to brand development, our passionate team crafts tailored strategies for maximum impact and ROI.
          </p>
        </v-col>
      </v-row>
  
      <!-- Second Row (3x3 grid) -->
      <v-row class="grid-row mt-16 d-none d-md-flex" style="">
        <v-col md="4" cols="12" class="grid-item">
          <p class="grid-1-title">+ 70</p>
          <p class="grid-1-content">Clients</p>
        </v-col>
        <!-- Grid Item 7 -->
        <v-col md="4" sm="6" cols="12" class="grid-item">
          <v-img src="/images/welcome/share.svg" style="width: 51.247px; height: 50.783px;"></v-img>
          <p class="grid-item-title">Branding / Marketing</p>
          <div class="grid-line" style="width: 219.735px; height: 0.977px;"></div>
          <p class="grid-item-description">Branding defines identity, marketing shares to world</p>
        </v-col>
        <!-- Grid Item 4 -->
        <v-col md="4" sm="6" cols="12" class="grid-item">
          <v-img src="/images/welcome/google.svg" style="width: 51.247px; height: 50.783px;"></v-img>
          <p class="grid-item-title">Google Business set up</p>
          <div class="grid-line" style="width: 219.735px; height: 0.977px;"></div>
          <p class="grid-item-description">Online presence with our Google Business set up</p>
        </v-col>
        <v-col md="4" cols="12" class="grid-item">
          <p class="grid-1-title">+ 10</p>
          <p class="grid-1-content">Partners</p>
        </v-col>
  
        <!-- Grid Item 5 -->
        <v-col md="4" sm="6" cols="12" class="grid-item">
          <v-img src="/images/welcome/camera.svg" style="width: 51.247px; height: 50.783px;"></v-img>
          <p class="grid-item-title">Photo / Videography</p>
          <div class="grid-line" style="width: 219.735px; height: 0.977px;"></div>
          <p class="grid-item-description">Expert photo/videography services for your marketing</p>
        </v-col>
  
        <!-- Grid Item 6 -->
        <v-col md="4" sm="6" cols="12" class="grid-item">
          <v-img src="/images/welcome/bitcoin.svg" style="width: 51.247px; height: 50.783px;"></v-img>
          <p class="grid-item-title">SEO set up</p>
          <div class="grid-line" style="width: 219.735px; height: 0.977px;"></div>
          <p class="grid-item-description">Boost online visibility with our professional SEO setup</p>
        </v-col>
  
        <v-col md="4" cols="12" class="grid-item d-none d-md-block">
          <!-- Empty Grid Item -->
        </v-col>
  
        <!-- Grid Item 8 -->
        <v-col md="4" sm="6" cols="12" class="grid-item">
          <v-img src="/images/welcome/pencil.svg" style="width: 51.247px; height: 50.783px;"></v-img>
          <p class="grid-item-title">Web / App Design</p>
          <div class="grid-line" style="width: 219.735px; height: 0.977px;"></div>
          <p class="grid-item-description">Transform your vision into reality with our design</p>
        </v-col>
  
        <!-- Grid Item 9 -->
        <v-col md="4" sm="6" cols="12" class="grid-item">
          <v-img src="/images/welcome/group.svg" style="width: 51.247px; height: 50.783px;"></v-img>
          <p class="grid-item-title">News / Ads</p>
          <div class="grid-line" style="width: 219.735px; height: 0.977px;"></div>
          <p class="grid-item-description">This is the description for Grid Item 9.</p>
        </v-col>
      </v-row>
      <v-row class="my-16 my-md-0">
        <v-col class="d-flex justify-center d-md-none">
          <ServicesCarousel/>
        </v-col>
      </v-row>
      <v-row class="my-16">
          <v-col class="d-flex justify-center">
              <button class="btn-service" @click="onButtonClick">Find more about service</button>
            </v-col>
        </v-row>
    </v-container>
  </template>
  
  <script>
import ServicesCarousel from './OurServicesCarousel.vue';

  export default {
    name: 'OurServices',  
    components: {
    ServicesCarousel,  
  },
  };
  </script>
  
  <style scoped>
  .custom-row {
    background-color: #000;
    min-height: 200px;
    padding: 20px;

  }

   @media (min-width: 960px) {
    .custom-row {
    padding: 113px 197px;
    padding-left: 143px;
    height: 307px;
  }}
 


@media (max-width: 1280px ) {
    .grid-row {
    padding: 0px !important;
    margin-left:0px !important;
    margin-top: 30px !important;
  }
  .grid-item {
    padding-left: 0px !important;
  }
  
} 
  
  .left-column {
    color: #FFF;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  
  .right-column {
    color: #FFF;
    /* text-align: justify; */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  /* Styling for the 3x3 grid */
  .grid-row {
    padding: 60px;
    margin-left:40px;
    margin-top: 20px;
  }
  
  .grid-item {
    background-color: #FFF;
    text-align: center;
    padding-left: 100px;
    height: 220px; /* Set the height to 220px to make it a square */
  }
  

  /* Styles for grid-1-title and grid-1-content */
  .grid-1-title {
    color: #000;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
  }
  
  .grid-1-content {
    color: #6D6D6D;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  /* Styles for grid items 5 to 9 */
  .grid-image {
    width: 51.247px;
    height: 50.783px;
    flex-shrink: 0;
    background-color: #000; /* You can customize the background color here */
    margin-bottom: 20px;
}
  
.grid-item-title {
    font-size: 18px;
    font-weight: 600;  
    text-align: left; /* Align grid item titles to the left */
    margin: 15px 0;
    line-height: normal;
    letter-spacing: 1.5px;
}
  
  .grid-item-description {
    color: #6D6D6D;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left; /* Align grid item titles to the left */
    letter-spacing: 1px;
  }
  
  .grid-line {
    width: 219.735px;
    height: 0.977px;
    background-color: #000; /* You can customize the background color here */
    margin-bottom: 15px;
  
}

.btn-service{
    color: #FFF;
    font-family: 'Poppins', sans-serif;
font-size: 23px;
font-style: normal;
font-weight: 500;
line-height: normal;
    display: flex;
width: 372px;
height: 79px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
/* flex-shrink: 0; */
  background: #000;
}
  </style>
  