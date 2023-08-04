<template>
   <v-card
    elevation="24"
    class="mx-auto"
    width="100%"
    outlined
  >
    <v-carousel
      height="300"
      cycle
      hide-delimiters
      :show-arrows="false"
    >
      
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-row class="d-flex fill-height justify-center align-center pa-5 pa-md-16" >
          <v-col cols="2" class="grid-item ">
            <v-img v-if="item.image" :src="item.image" :style="{width: '51.247px', height: '50.783px'}"></v-img>
               
          </v-col>
          <v-col cols="10"><p class="grid-item-title" :style="item.image?{}:{fontSize:'30px'}">{{ item.title }} {{ item.content }}</p>
            <div v-if="item.image" class="grid-line" :style="{width: '100%', height: '0.977px'}"></div>
            <p class="grid-item-description">{{ item.description }}</p>     </v-col>

        </v-row>
      </v-carousel-item>
    </v-carousel>
   </v-card>
  </template>
  
  <script>
  export default {
    name: 'ServicesCarousel',
    data() {
      return {
        items: [
          { 
            title: '+ 70', 
            content: 'Clients',
            image: '',
            description: '',
          },
          { 
            title: 'Branding / Marketing', 
            content: '',
            image: '/images/welcome/share.svg',
            description: 'Branding defines identity, marketing shares to world',
          },
          { 
            title: 'Google Business set up', 
            content: '',
            image: '/images/welcome/google.svg',
            description: 'Online presence with our Google Business set up',
          },
          { 
            title: '+ 10', 
            content: 'Partners',
            image: '',
            description: '',
          },
          { 
            title: 'Photo / Videography', 
            content: '',
            image: '/images/welcome/camera.svg',
            description: 'Expert photo/videography services for your marketing',
          },
          { 
            title: 'SEO set up', 
            content: '',
            image: '/images/welcome/bitcoin.svg',
            description: 'Boost online visibility with our professional SEO setup',
          },
          { 
            title: 'Web / App Design', 
            content: '',
            image: '/images/welcome/pencil.svg',
            description: 'Transform your vision into reality with our design',
          },
          { 
            title: 'News / Ads', 
            content: '',
            image: '/images/welcome/group.svg',
            description: 'This is the description for Grid Item 9',
          },
          // add more items as needed
        ],
      }
    },
  }
  </script>
  
  <style scoped>
  .grid-item-title {
    font-size: 30px;
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
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left; /* Align grid item titles to the left */
    letter-spacing: 1px;
  }

  .grid-1-content {
    color: #6D6D6D;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .grid-line {
    width: 219.735px;
    height: 0.977px;
    background-color: #000; /* You can customize the background color here */
    margin-bottom: 15px;
  
}
  </style>
  