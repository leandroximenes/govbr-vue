<template>
  <br-message :feedback="feedback" :state="type" show-icon="true">
    {{ message }}
  </br-message>
</template>

<script lang="ts">
export default {
  name: "Message",
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    feedback: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
