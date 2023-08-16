<template>
  <br-footer ref="footer"></br-footer>
</template>

<script setup lang="ts">
import discordSvg from "@/assets/discord.svg";
import { onMounted, ref, Ref } from "vue";

const footer: Ref<any> = ref(null);
const license =
  "Todo o conteúdo deste site está publicado sob a licença CC0 1.0 Universal";
const social = {
  label: "Redes Sociais",
  networks: [
    {
      href: "https://discord.gg/U5GwPfqhUP",
      image: discordSvg,
      description: "Discord",
      target: "_blank",
    },
  ],
};

onMounted(() => {
  footer.value.social = social;
  footer.value.text = license;
});
</script>
