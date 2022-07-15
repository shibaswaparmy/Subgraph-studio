import { http } from "../http";

export function getUserType(address:string){
    return http.get(`/user/getType/${address}`)
}
export function getValidatorCount(){
    return http.get(`networkDetail/totalValidators`)
}
export function getTotalStake(){
    return http.get(`networkDetail/totalStake`)
}
export function getTotalRewardDistributed(){
    return http.get(`networkDetail/totalReward`)
}
export function getHeimdallHeight(){
    return http.get(`networkDetail/heimdallHeight`)
}
export function getLastCheckpoint(){
    return http.get(`networkDetail/lastCheckpoint`)
}
export function getCheckpointInterval(){
    return http.get(`networkDetail/checkpointInterval`)
}