<template>
  <Menu :text="night">
    <Disclaimer slot="footer" v-if="disclaimers" class="menu-footer">footer</Disclaimer>
  </Menu>
</template>
<script>
export default {
  name: 'late-night',
  layout: 'menu',
  components: {
    Menu: () => import('@/components/menu'),
    Disclaimer: () => import('@/components/menu/Disclaimer')
  },
  data() {
    return {
      disclaimers: false,
      hasRaw: false,
      hawGluten: false
    }
  },
  watch: {
    disclaimers: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$store.commit('night/set', { disclaimers: newVal })
      }
    }
  },
  computed: {
    styles: function () {
      return this.$store.state.styles
    },
    menu: function () {
      return this.$store.state.night
    },
    night: function () {
      let result = marked(this.$store.state.night.text)
        .split('!gluten!').join('<span class="menu-icon menu-icon--gluten"></span>')
        .split('!raw!').join('<span class="menu-icon menu-icon--raw"></span>')
      const disclaimers = [ '!gluten!', '!raw!' ].filter(item => {
        return this.$store.state.night.text.indexOf(item) >= 0
      })
      this.disclaimers = disclaimers.length
      return result
    }
  },
  methods: {
    classList({ gluten, raw } = {}) {
      return {
        'icon--gluten': gluten,
        'icon--raw': raw
      }
    }
  }
}
</script>
