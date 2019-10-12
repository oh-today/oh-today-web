import axios from 'axios'

export function listSiteAll(){
    return axios.get('/api/sites')
}