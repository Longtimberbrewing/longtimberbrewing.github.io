// import dinner from '@/data/dinner.md'
export const state = () => ({
  text: `# Late Night

## Pulled Pork **13**
Smoked pork mixed with tangy barbecue sauce, coleslaw, bread and butter pickles on a challah bun, comes with fries or a salad

## Fish and Chips !raw! **15.5**
Beer battered Oregon petrale sole, house cut fries, malt vinegar tartar sauce, lemon and coleslaw

## Flatbread of the Moment **12.75**
Chef's selection of house made sauces and toppings

## Long Timber Burger !raw! **14**
2 Double R ranch beef patties stacked with LTOP, roasted garlic aioli, and your choice of cheese, on a toasted challah bun

## Tim's Triple Chopped **13.5**
A combination of our favorite meats tossed with tangy barbecue sauce, on house grilled flatbread with cheddar cheese, sautéed onions and house pickles
`,
  disclaimers: false
})

export const mutations = {
  set(state, {
    key,
    value
  } = {}) {
    state[key] = value
  }
}
