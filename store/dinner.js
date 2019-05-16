// import dinner from '@/data/dinner.md'
export const state = () => ({
    text: `# Dinner

## St. Helen’s Choice Steaks!raw!!gluten!
1. **14 oz Ribeye**   40 
2. **12oz New York Strip**   34

These Northwest steaks are grilled to perfection, tender, juicy and just amazing. Each comes with house steak sauce, local seasonal vegetables and choice of side

## St Louis Style Ribs !gluten!
1. **1/2 rack** 19
2. **full rack** 33

Slow smoked with Long Timber’s custom dry rub, our thick cut ribs come with your choice of house barbecue sauce, local seasonal vegetables and choice of side

## Pork Chop!raw!!gluten! **24**
Smoked and grilled Carlton Farm’s bone in double cut pork chop, chunky apple butter, braised kale, local seasonal vegetables and choice of side

## Beef Tip Gnocchi !raw! **20**
Tender beef tips, oil cured tomato and mushroom sauce, blue cheese, house herb gnocchi, topped with micro-shredded parmesan cheese and arugula

## Lamb Loin Chops !raw!!gluten! **35**
2 Anderson Ranch loin chops rubbed with rosemary and hazelnuts and pan seared. Accompanied with creamy garlic jus, local seasonal vegetables and choice of side

## Savory Mushroom Tart **20**
Locally sourced mushrooms, swiss and parmesan cheese, oil cured tomatoes, wrapped in a flaky pastry crust served with a Northwest hazelnut romesco sauce and a petite arugula salad   $20

## Blackened Ahi Tuna !raw!!gluten! **25**
10 oz Ahi filet, cucumber, tomato and chickpea salad, pickled vegetables, rice noodles tossed with sesame and cilantro, wasabi and avocado

## DUI mussels !raw!!gluten! **16**
One pound of pilsner steamed mussels with garlic, herbs, butter and tomatoes. Comes with grilled bread

## Sides
1. **Mac &amp; Cheese**
2. **Mashed Potatoes**
3. **Side Salad**
	3. ranch, bleu cheese, italian, balsamic
4. **Baked Beans**
5. **Cheese Grits**
6. **Local Market Vegetables**
7. **Baked Potato**
8. **Potato Barrel**
	8. Jalapeño cheddar, sour cream, chives
9. **Fries**
`,
    disclaimers: false
})

export const mutations = {
    set (state, { key, value } = {}) {
        state[key] = value
    }
}
