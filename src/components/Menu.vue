<template>
  <br-menu ref="menu" show-menu @navigate="navigate"></br-menu>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { useRouter } from "vue-router";

const menu: Ref<any> = ref(null);
const id = "main-navigation";
const router = useRouter();

const menuItems = ref([
  {
    id: 1,
    icon: "home",
    name: "Página Inicial",
    url: "/",
  },
  {
    id: 2,
    icon: "user-cog",
    name: "Usuário",
    isSpaLinkBehavior: true,
    url: "/usuario",
  },
]);

onMounted(() => {
  menu.value.id = id;
  menu.value.isPush = true;
  menu.value.list = menuItems.value;
  menu.value.dataBreakpoints = "col-sm-4 col-lg-3";
});

// Função para navegar para uma rota usando Vue Router
function navigate(route: any) {
  // Importe e utilize o Vue Router para navegar para a rota especificada
  router.push(route.detail[0]); // Navegar usando o Vue Router
}
</script>
