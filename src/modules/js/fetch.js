import Vue from 'vue'
import axios from 'axios'

function fetch(url,data){
  return new Promise((resolve,reject)=>{
    axios.post(url,data).then(res=>{
      let status = res.status
      if(status === 200){
        resolve(res)
      }else if(status === 300){
        location.href = 'index.html'
      }
    }).catch(err=>{
      reject(err)
    })
  })
}

export default fetch