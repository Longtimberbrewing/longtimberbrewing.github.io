<template>
  <header id="ltb-navigation-header">
    <div
      :class="[ 'menu-toggle', open ? 'menu-toggle--open' : null ]"
      @click="open = !open"
    >
      <span></span>
    </div>
    <nav :class="[ 'menu' ]">
      <div class="menu--header">
        <img src="~assets/images/ltb-logo.svg" alt="Long Timber Brewing">
      </div>
      <ul class="menu--list">
        <li class="menu--list-item">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="menu--list-item">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li class="menu--list-item">
          <nuxt-link to="/beer" title="Beer">Beer</nuxt-link>
        </li>
        <li class="menu--list-item">
          <nuxt-link to="/menu">Menu</nuxt-link>
        </li>
        <li class="menu--list-item">
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data () {
    return {
      open: false
    }
  }
}
</script>
<style lang="scss">
html {
  font-size: 20px;
}
#ltb-navigation-header {
  position: relative;
}
.menu {
  position: fixed;
  display: flex;
  top: 0;
  left: -100%;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: darken($cream-light, 5%);
  
  &::after {
    content: "";
    background: url('~assets/images/bg-raw.svg');
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  @media screen and (min-width: 992px) {
    width: 550px;
  }
  &--header {
    width: 40%;
    margin: 1.25rem 0 1rem;

    @media screen and (min-width: 992px) {
      width: 65%;
    }
  }

  &--list {
    padding: 0;
    margin: 0;

    &-item {
      list-style: none;
      list-style-type: none;

      a {
        display: block;
        padding: 1rem 0;
        @extend %headings;
        @extend %nav-links;
      }
    }
  }
}
.menu-toggle {
  position: fixed;
  top: .5rem;
  left: .5rem;
  width: 4em;
  height: 4em;
  padding: 1rem;
  cursor: pointer;
  transition: all .2s ease-out;
  z-index: 20;

  span {
    $this: &;
    position: relative;
    margin-top: .9em;
    @extend %hamburger;

    &::before,
    &::after {
      content: " ";
      position: absolute;
      @extend %hamburger;
      top: -.55em;
    }

    &::after {
      top: .55em;
    }
  }

  &--open {
    span {
      background-color: transparent;
      &::before {
        transform: rotate(45deg) translate(0.5em, 0.4em);
      }

      &::after {
        transform: rotate(-45deg) translate(0.4em, -0.3em);
      }
    }
    + .menu {
      left: 0;
    }
  }
}
</style>
