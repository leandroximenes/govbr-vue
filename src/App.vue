<script setup lang="ts">
import Cookiebar from "./components/Cookiebar.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
</script>

<template>
  <header>
    <Header></Header>
  </header>
  <main class="mb-5" id="main">
    <div class="container-lg">
      <div class="row">
        <menu class="col-sm-4 col-lg-3">
          <Menu></Menu>
        </menu>
        <div class="col mb-5">
          <div class="main-content pl-sm-3 mt-4" id="main-content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Cookiebar />
  <footer class="pt-7x">
    <Footer></Footer>
  </footer>
</template>

<style scoped></style>
