import { get, post } from '@/utils/request'

const getInfos = () => get('/index-infos')
const updateInfo = () => post('/index-infos')

export default {
  getInfos,
  updateInfo
}
