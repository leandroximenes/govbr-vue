<script setup lang="ts">
import govVue from "@/assets/logo-vue.png";
import { ref } from "vue";

const title = ref("Web Components GovBR-DS -  Quickstart Vue");
const subtitle = ref("Baseado na v1.6.1 do @govbr-ds/webcomponents");

const image = ref({
  src: govVue,
  alt: "logo",
});

const links = ref(
  JSON.stringify([
    {
      name: "GOVBR-DS",
      href: "https://gov.br/ds",
      title: "Padrão Digital de Governo",
      target: "_blank",
    },
    {
      name: "Serpro",
      href: "https://www.serpro.gov.br/",
      title: "SERPRO",
      target: "_blank",
    },
    {
      name: "Dataprev",
      href: "https://portal.dataprev.gov.br/",
      title: "Dataprev",
      target: "_blank",
    },
  ])
);
</script>

<template>
  <br-header
    :image="image.src"
    :alt="image.alt"
    :title="title"
    :subtitle="subtitle"
    has-menu
    image-size="medium"
  >
    <br-button
      slot="headerMenu"
      role="option"
      circle
      density="small"
      aria-label="Menu"
      icon="bars"
      data-toggle="menu"
      data-target="#main-navigation"
    ></br-button>
    <br-header-action
      slot="headerAction"
      :list-links="links"
    ></br-header-action>
  </br-header>
</template>
