import service from "./service";

export const getId = async (data)=>{
    return await service(`/answer/${data.id}`, 'get', {})
}