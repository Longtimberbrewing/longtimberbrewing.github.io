<template>
  <b-row no-gutters>
    <b-col id="editor">
      <Editor :module="module"></Editor>
    </b-col>
    <b-col>
      <div class="logo" :style="`width: ${styles.logoWidth}%; max-width: ${styles.logoWidth}%; height: auto; margin: 0 auto; margin-bottom: ${styles.logoMargin}in;`">
        <img src="~/assets/images/ltb-logo.svg" alt="Long Timber Brewing" />
      </div>
      <nuxt />
    </b-col>
  </b-row>
</template>
<script>
export default {
  data () {
    return {
      editor: true,
      module: ''
    }
  },
  components: {
    Editor: () => import('@/components/menu/Editor')
  },
  computed: {
    styles: function () {
      return this.$store.state.styles
    },
    stateMenu: function () {
      return this.$store.state[this.module].text
    }
  },
  mounted () {
    this.module = this.$route.name.split('-')[1]
  }
}
</script>

<style lang="scss">
body {
  background-color: #fff;
}
@media screen {
  html,
  body {
    height: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  #editor {
    overflow-y: auto;
    &, + .col {
      height: 100vh;
      overflow-y: auto;

      &::-webkit-scrollbar {
          width: 5px;
      }

      &::-webkit-scrollbar-track {
          background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
          background-color: $gray;
          border-radius: 0;
      }
    }
  }
  
}

@media print {
  @page {
    position: relative;
    margin: 0 !important;
  }

  body {
    width: 8.5in;
    height: 11in;
  }

  #editor {
    display: none;
  }
}

.logo {
  max-width: 25%;
  margin: 0 auto;
  margin-bottom: 2.5rem;

  @media print {
    max-width: 45%;
    margin-bottom: .5in;
    margin-top: .5in;
  }
}
.editor--toggle {
  position: fixed;
  top: 15px;
  right: -15px;

  &.open {
      left: calc(15% + 15px);
  }
}
</style>
