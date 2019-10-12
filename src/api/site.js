import axios from 'axios'

export function listArticle(params){
    return axios.get('/api/articles', {params})
}