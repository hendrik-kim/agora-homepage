<template>
      <v-app-bar class="text-center" :height="isMobile ? 64 : 125">
        <v-app-bar-nav-icon @click="toggleDrawer" v-if="isMobile"></v-app-bar-nav-icon>
        <v-row v-if="!isMobile" no-gutters align="center" justify="center" class="menu-container">

            <v-col sm="2"  md="1" class="text-center">
                <span class="menu-link text-xl-h6" @click="navigateTo('Our Team')">Our Team</span>
            </v-col>
            <v-col  sm="2" md="1" class="text-center">
                <span class="menu-link text-xl-h6" @click="navigateTo('Service')">Service</span>
            </v-col>
            <v-col sm="4" md="2" class="text-center">
              <v-img src="/images/Agora_Logo.png" alt="Logo" class="logo"></v-img>
            </v-col>
          <v-col sm="2"  md="1" class="text-center">
            <span class="menu-link text-xl-h6" @click="navigateTo('Project')">Project</span>
          </v-col>
          <v-col sm="2"  md="1" class="text-center">
            <span class="menu-link text-xl-h6" @click="navigateTo('Contact Us')">Contact Us</span>
          </v-col>
        </v-row>
        <v-row v-else >
            <v-col cols="12" class="text-center">
                <v-img src="/images/Agora_Logo.png" alt="Logo" class="logo"></v-img>
            </v-col>
        </v-row>
      </v-app-bar>
  
      <v-navigation-drawer v-if="isMobile" v-model="drawer" app right>
        <v-list>
          <v-list-item @click="navigateTo('Our Team')">
            <v-list-item-content>
              <span class="menu-link">Our Team</span>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="navigateTo('Service')">
            <v-list-item-content>
              <span class="menu-link">Service</span>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="navigateTo('Project')">
            <v-list-item-content>
              <span class="menu-link">Project</span>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="navigateTo('Contact Us')">
            <v-list-item-content>
              <span class="menu-link">Contact Us</span>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
        isMobile: false,
      };
    },
    created() {
      this.isMobile = window.innerWidth <= 960;
      window.addEventListener('resize', this.handleResize);
    },
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer;
      },
      handleResize() {
        this.isMobile = window.innerWidth <= 960;
      },
      navigateTo(item) {
        // 원하는 동작 구현 (아직 미완성이므로 원하는 동작이 있으면 알려주세요)
      },
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
  };
  </script>
  
  <style>
  /* 스타일은 원래 코드와 동일하게 유지합니다. */
  .menu-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
  }
  
  /* 모바일에서 앱바 패딩을 원래대로 되돌립니다. */
  .v-app-bar--is-mobile {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  
  /* 드로워를 위에서 아래로 내려오도록 설정합니다. */
  .v-navigation-drawer {
    top: 0;
    bottom: unset !important;
  }
  .logo {
    width: 170px;
    height: 35px;
    display: block;
    margin: 0 auto;
  }
  
  .menu-link {
  cursor: pointer;
  text-transform: capitalize;
  transition: font-weight 0.1s; /* 폰트 두껍게 변화에 애니메이션 적용 */
}

.menu-link:hover,
.menu-link:active {
  font-weight: 700; /* 폰트 두꺼워지는 스타일 설정 */
}
  
  </style>
  