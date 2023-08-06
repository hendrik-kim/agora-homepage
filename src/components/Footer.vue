<template>
  <v-footer class="footer pa-10 d-sm-inline">
    <v-sheet class="mx-0 px-lg-16" color="#000">
      <v-row class="footer-first-row">
        <v-col cols="12" md="2" sm="12" class="d-flex justify-sm-center d-md-block">
            <v-img src="/images/footer/logo_footer.png" alt="Logo" class="footer-logo"></v-img>
        </v-col>
        <v-col cols="12" md="2" class="d-flex align-center justify-center  d-sm-flex d-md-flex d-lg-flex">
          <h4>Our Team</h4>
        </v-col>
        <v-col cols="12" md="2" class="d-flex align-center justify-center  d-sm-flex d-md-flex d-lg-flex">
          <h4>Service</h4>
        </v-col>
        <v-col cols="12" md="2" class="d-flex align-center justify-center  d-sm-flex d-md-flex d-lg-flex">
          <h4>Project</h4>
        </v-col>
        <v-col cols="12" md="2" class="d-flex align-center justify-center d-sm-flex d-md-flex d-lg-flex">
          <h4>Contact Us</h4>
        </v-col>
        <v-col cols="12" md="2" sm="12" class="d-flex justify-center justify-sm-center justify-md-end">
          <div class="d-flex justify-end">
            <v-img
              src="/images/footer/facebook_footer.png"
              alt="Facebook"
             height="28"
             width="28"
              class="d-inline-block mx-5 ml-md-3"
            ></v-img>
            <v-img
              src="/images/footer/instagram_footer.png"
              alt="Instagram"
              height="28"
             width="28"
              class="d-inline-block mx-5 ml-md-3"
            ></v-img>
          </div>
        </v-col>
</v-row>
      <div class="white-line"></div>
      <v-row class="footer-second-row">
        <v-col cols="12" sm="12" md="5" lg="4" xl="4" class="d-flex justify-center justify-sm-center justify-md-start">
          <p>© 2023 by AGORA Production.</p>
        </v-col>
        <v-col cols="12" md="1" lg="4" xl="5" class="d-none d-sm-none d-md-block"></v-col>
        <v-col cols="12" sm="12" md="3" lg="2" xl="2" class=" d-flex justify-center  justify-md-end justify-sm-center">
          <p>Terms of Service</p>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="2" xl="1" class=" d-flex justify-center  justify-md-end justify-sm-center">
          <p>Privacy Policy</p>
        </v-col>
      </v-row>
    </v-sheet>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  padding: 61px 130px;
  height: 246px;
  background-color: black;
  color: white;
  font-family: 'Inter', sans-serif;;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%; /* 19.2px */
}

.footer-logo {
  width: 170px;
  height: 35px;
  display: block;
  margin: 0 auto;
  float: left;
}

.footer-first-row h4 {
  color: #FFF;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.footer-second-row p {
  color: #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%; /* 19.2px */
}

.white-line {
  margin: 33px 0;
  border-top: 1px solid white;
}
</style>
