export const state = () => ({
  styles: {
    logoWidth: '25',
    logoMargin: '.5',
    titleColor: '#d88474',
    titleFontSize: '12',
    descriptionColor: '#535555',
    descriptionFontSize: '10',
    priceColor: '#535555',
    priceFontSize: '12',
    margin: '.3',
    maxWidth: '85'
  }
})

export const mutations = {
  update (state, { key, value } = {}) {
    state.styles[key] = value
  },
  save (state, { key, value } = {}) {
    state[key] = value
  }
}
