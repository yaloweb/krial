export const state = () => ({
  blockquote: {},
  info: '',
  rightMenu: [],
  pressCenter: [],
  copyright: '',
  links: []
})

export const mutations = {
  setFooterInfo (state, data) {
    state.blockquote = data.blockquote
    state.info = data.info
    state.rightMenu = data.rightMenu
    state.pressCenter = data.pressCenter
    state.copyright = data.copyright
    state.links = data.links
  }
}

export const actions = {
  async getFooterInfo (ctx) {
    const res = await this.$axios.get('/footer')
    ctx.commit('setFooterInfo', res.data)
  }
}
