<template>
  <div class="menu" :style="{ maxWidth: `${styles.maxWidth}%`}">
    <div class="menu--contents" v-html="text"></div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  layout: 'menu',
  components: {
    Disclaimer: () => import('./Disclaimer')
  },
  props: {
    text: '',
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    sides: {
      type: Array,
      default: null
    }
  },
  computed: {
    styles: function () {
      return this.$store.state.styles
    }
  }
}
</script>
<style lang="scss">
.row {
  margin-bottom: 1.2rem;
}
.menu {
  $sans-serif: brandon-grotesque, serif;
  $serif: 'Courier New', monospace;
  $font-size: 1.25rem;
  $gray: #535555;
  $color: #d88474;

  position: relative;
  color: $gray;
  width: 100%;
  min-height: 100%;
  height: 100%;
  text-align: center;
  margin: 0 auto;

  @media screen {
    max-width: 1170px;
    padding-bottom: 5rem;
  }

  &--wrap {
    position: relative;

    @media print {
      margin-left: 0;
      margin-right: 0;
      // margin-bottom: .125in;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: $sans-serif;
    text-transform: uppercase;
    color: $color;
    margin: 0;
    letter-spacing: .1rem;

    strong {
      margin-left: 1rem;
      color: $gray;
    }

    .menu-icon {
      vertical-align: text-top;
    }
    ~ p {
      font-family: $serif;
      letter-spacing: .5px;
      .menu-icon {
        vertical-align: middle;
      }
    }
  }

  h1 {
    font-size: 16pt;
    margin-bottom: 1rem;
    @media print {
      margin-bottom: .125in;
    }
  }

  h2 {
    font-size: 12pt;
  }

  h3 {
    font-size: 10pt;
  }

  h4 {
    font-size: 9pt;
  }

  h5 {
    font-size: 8pt;
  }

  h6 {
    font-size: 7pt;
  }

  hr {
    width: 20%;
    margin: 1rem auto;
    border-top-width: 2px;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;

    li {
      font-family: $serif;
      list-style: none;
      list-style-type: none;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
    }
  }

  ol {
    li {
      display: block;
    }
  }

  &--contents {
    > h1 {
      color: $gray;
    }
  }

  &--title {
    position: relative;
    display: inline-flex;
    justify-content: center;
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: .1rem;
    color: $color;
    font-family: $sans-serif;
    text-transform: uppercase;
  }

  &--group {
    position: relative;
    display: inline-flex;
    flex-direction: row;
  }

  &--title,
  &--price {
    font-weight: 800;
  }

  &--description,
  &--options {
    font-family: $serif;

    @media print {
      margin: 0 auto;
    }
  }

  &--options {
    margin: 0 auto;
    text-align: center;
    span {
      display: block;
    }

    @media print {
      padding-top: .5rem;
    }
  }

  &--price {
    font-size: ($font-size/1.1);
    height: 1rem;
    color: $gray;
    margin-left: 1rem;
  }

  &-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    align-self: center;

    &:first-of-type:not(:last-of-type) {
      margin-left: .25rem;
    }

    &--raw {
      background: url(~assets/images/raw.svg) center center no-repeat;
    }

    &--gluten {
      background: url(~assets/images/less-gluten.svg) center center no-repeat;
    }
  }
  .disclaimer {
    position: absolute;
    bottom: 0;
    left: 0;

    @media screen {
      width: 100%;
      padding: 0 5%;
    }
  }

  @media print {
    .menu {
      &--title {
        color: $color;
        font-size: 14pt;
      }

      &--description {
        font-size: 9pt;
      }
    }

    .disclaimer {
      margin: 0 auto;
      padding: 0 .5in;
      position: fixed;
    }
  }
}
</style>
