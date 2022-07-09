import {API_URL} from "./consts"

export const getAssets = async() => {
  try{
    const response: any = await fetch(API_URL)
    const responseTXT: string = await response.text()
    const indexName = responseTXT.indexOf("tvlStakedHistory")
    const strValue = responseTXT.slice(indexName)
    const indexEnd = strValue.indexOf("]")
    const indexStart = strValue.indexOf("[")
    const parsedValue = JSON.parse(strValue.slice(indexStart, indexEnd+1))
    return parsedValue
  } catch(e){
    console.log(e)
  }
}