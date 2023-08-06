<template>
    <v-container fluid class="pa-0 my-16">
      <v-row class="partners-section">
        <v-col cols="12" md="2" class="partners-header">
          <div class="partners-text">Partners of</div>
          <div class="agora-text">AGORA</div>
        </v-col>
        <v-col cols="12" md="1" class="">
          <div class="vertical-line" style="margin: auto;"></div>
        </v-col>
        <v-col cols="12" md="9" class="partners-list">
            <v-row style="font-family: 'Poppins', sans-serif; font-size: 23px; font-weight: 500;">

          <v-col cols="12" sm="4" md="3" lg="2" xl="1" class="partner-item text-center">outtake</v-col>
          <v-col cols="12" sm="4" md="3" lg="2" xl="1" class="partner-item text-center">SOODA</v-col>
          <v-col cols="12" sm="4" md="3" lg="2" xl="1" class="partner-item text-center flex-grow-1 flex-shrink-1" style="min-width: 120px; max-width: 100%;">Spain Vibe Tour</v-col>
          <v-col cols="12" sm="4" md="3" lg="2" xl="1" class="partner-item text-center flex-grow-1 flex-shrink-1" style="min-width: 120px; max-width: 100%;">West Pacific</v-col>
          <v-col cols="12" sm="4" md="3" lg="2" xl="1" class="partner-item text-center">MAPO</v-col>
          <v-col cols="12" sm="4" md="3" lg="2" xl="1" class="partner-item text-center flex-grow-1 flex-shrink-1" style="min-width: 120px; max-width: 100%;">Cornerstone</v-col>
          <v-col cols="12" sm="4" md="3" lg="2" xl="1" class="partner-item text-center">College</v-col>
          <v-col cols="12" sm="4" md="3" lg="2" xl="1" class="partner-item text-center">GIGU</v-col>
          <v-col cols="12" sm="4" md="3" lg="2" xl="1" class="partner-item text-center flex-grow-1 flex-shrink-1" style="min-width: 120px; max-width: 100%;">LET EAT GO</v-col>
          <v-col cols="12" sm="4" md="3" lg="2" xl="1" class="partner-item text-center flex-grow-1 flex-shrink-1" style="min-width: 120px; max-width: 100%;">Byeol Bam</v-col>
          <v-col cols="12" sm="4" md="3" lg="2" xl="1" class="partner-item d-none d-md-flex" ></v-col>
          <v-col cols="12" sm="4" md="3" lg="2" xl="1" class="partner-item d-none d-md-flex"></v-col>    
        </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  
  <script>
  export default {
    name: 'Partners',
  };
  </script>
  
  <style>
    .partners-section {
      display: flex;
      align-items: center;
      padding-top: 63px;
        padding-bottom: 63px;
        padding-left: 133px;
        border-top: 1px solid black; /* Add top border */
      border-bottom: 1px solid black; /* Add bottom border */
    }
  
    .vertical-line {
      width: 1px;
      height: 98px;
      background-color: black; /* Change the color as needed */
      margin: 0 77px; /* Adjust the default spacing as needed */
    }
  
    .partners-header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .partners-text {
      color: #000;
      font-family: 'Playfair Display', serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin: 0;
      align-self: flex-start;
    }
  
    .agora-text {
      color: #000;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      margin: 0;      
      align-self: flex-start;

    }
  
    .partners-list {
      margin-top: 10px; /* Adjust the spacing as needed */
    }
  
    .partners-list span {
      display: inline-block;
      margin-right: 70px; /* Adjust the spacing between partners as needed */
      font-size: 16px; /* Adjust the font size as needed */
    }
  
    @media (max-width: 959px) {
      .partners-section {
        padding: 33px 0px; /* Set padding to 33px top/bottom, 0px left/right for screens below 960px */
      }
      .vertical-line {
    width: 5rem; /* Set width to 100% to make it a horizontal line */
    height: 1px; /* Set height to 1px for a horizontal line */
    margin: 16px 0; /* Adjust margin for spacing */
    margin: 0px auto; 
  }
      .partners-text, .agora-text {
        font-size: 24px; /* Adjust font size for smaller screens */
      }
      .partners-text {align-self: center;}
      .agora-text {align-self: center;}
    }
  </style>
  