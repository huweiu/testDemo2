import request from "@/utils/request.js"

const service = (url, method, options, timeout = '6000')=>{
    const meter = {
        url,
        method,
        timeout,
        ...options
    }

    return new Promise((resolve,reject)=>{
        request(meter)
        .then((res)=>{
            resolve(res?.data?.data)
        })
        .catch((err)=>{
            reject(err)
        })
    })       
}

export default service