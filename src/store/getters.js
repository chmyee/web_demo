const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  clusterList: state => state.cluster.clusterList,
  selectedCluster: state => state.cluster.selectedCluster,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  visitedViews: state => state.tagsView.visitedViews,
  msg_detail: state => state.msg.msg_detail
}
export default getters
