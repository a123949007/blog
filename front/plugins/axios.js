import {Message} from 'element-ui'
export default function ({ $axios, redirect }) {
  $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
    'post'
  ])
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      Message.error(error.response.data.message)
    }
  })
}