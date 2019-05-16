<template>
  <Menu :items="items" :text="dinner">
    <Disclaimer slot="footer" v-if="disclaimers" class="menu-footer">footer</Disclaimer>
  </Menu>
</template>
<script>
export default {
  name: 'dinner',
  layout: 'menu',
  components: {
    Menu: () => import('@/components/menu'),
    Disclaimer: () => import('@/components/menu/Disclaimer')
  },
  data() {
    return {
      disclaimers: false,
      hasRaw: false,
      hawGluten: false,
      items: [
        {
          name: `St. Helen's Choice Steaks`,
          description: 'These Northwest steaks are grilled to perfection, tender, juicy and just amazing. Each comes with house steak sauce, local seasonal vegetables and choice of side',
          options: [
            { name: 'Ribeye - 14 oz', price: '40' },
            { name: 'New York Strip - 12 oz', price: '34'}
          ],
          icons: {
            gluten: true,
            raw: true
          }
        },
        {
          name: 'St. Louis Style Ribs',
          description: `Slow smoked with Long Timber’s custom dry rub, our thick cut ribs come with your choice of house barbecue sauce, local seasonal vegetables and choice of side`,
          options: [
            { name: '1/2 Rack', price: '19' },
            { name: 'Full Rack', price: '33' }
          ],
          icons: {
            gluten: true
          }
        },
        {
          name: 'Pork Chop',
          description: 'Smoked and grilled Carlton Farm’s bone in double cut pork chop, chunky apple butter, braised kale, local seasonal vegetables and choice of side',
          price: '24',
          icons: {
            gluten: true,
            raw: true
          }
        },
        {
          name: 'Beef Tip Gnocci',
          description: 'Tender beef tips, oil cured tomato and mushroom sauce, blue cheese, house herb gnocchi, topped with micro-shredded parmesan cheese and arugula',
          price: '20',
          icons: {
            raw: true
          }
        },
        {
          name: 'Lamb Loin Chops',
          description: '2 Anderson Ranch loin chops rubbed with rosemary and hazelnuts and pan seared. Accompanied with creamy garlic jus, local seasonal vegetables and choice of side',
          price: '35',
          icons: {
            gluten: true,
            raw: true
          }
        },
        {
          name: 'Savory Mushroom Tart',
          description: 'Locally sourced mushrooms, swiss and parmesan cheese, oil cured tomatoes, wrapped in a flaky pastry crust served with a Northwest hazelnut romesco sauce and a petite arugula salad',
          price: '20',
          icons: {}
        },
        {
          name: 'Blackened Ahi Tuna',
          description: '10 oz Ahi filet, cucumber, tomato and chickpea salad, pickled vegetables, rice noodles tossed with sesame and cilantro, wasabi and avocado',
          price: '25',
          icons: {
            gluten: true,
            raw: true
          }
        },
        {
          name: 'DUI Mussels',
          description: 'One pound of pilsner steamed mussels with garlic, herbs, butter and tomatoes. Comes with grilled bread',
          price: '24',
          icons: {
            gluten: true,
            raw: true
          }
        }
      ],
      sides: [
        { name: 'Mac & Cheese' },
        { name: 'Mashed Potatoes' },
        {
          name: 'Side Salad',
          description: 'Ranch, Bleu Cheese, Italian, Balsamic'
        },
        { name: 'Baked Beans' },
        { name: 'Cheese Grits' },
        { name: 'Local Market Vegetables' },
        { name: 'Baked Potato' },
        {
          name: 'Potato Barrel',
          description: 'Jalapeno Cheddar, Sour Cream, Chives'
        },
        { name: 'Fries' }
      ]
    }
  },
  watch: {
    disclaimers: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$store.commit('dinner/set', { disclaimers: newVal })
        // this.$store.state.dinner.disclaimers = newVal
      }
    }
  },
  computed: {
    styles: function () {
      return this.$store.state.styles
    },
    menu: function () {
      return this.$store.state.dinner
    },
    dinner: function () {
      let result = marked(this.$store.state.dinner.text)
        .split('!gluten!').join('<span class="menu-icon menu-icon--gluten"></span>')
        .split('!raw!').join('<span class="menu-icon menu-icon--raw"></span>')
      const disclaimers = [ '!gluten!', '!raw!' ].filter(item => {
        return this.$store.state.dinner.text.indexOf(item) >= 0
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
