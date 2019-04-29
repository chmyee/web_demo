const msg = {
  state: {
    connect: false,
    msg_detail: {},
    msg_total: 0
  },

  mutations: {
    SOCKET_CONNECT: (state, status) => {
      state.connect = true
    },
    SOCKET_ALARM_SERVER: (state, response) => {
      state.msg_detail = response.data.msg_detail
      state.msg_total = response.data.msg_total
    },
  },
}

export default msg
