<template>
  <section id="ltb-logo">
    <div class="wrapper--logo container">
      <img src="~assets/images/ltb-logo.svg" alt="Long Timber Brewing Company" class="img-fluid">
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'default',
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.wrapper-logo {}
</style>
