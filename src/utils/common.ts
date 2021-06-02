import { taggetEPlus } from '@/datas/screen'

const mouseDown = (event:any):void => {
    for(const item of event.path){
        if(item.className === 'eplus'){
            taggetEPlus.value = item; 
            taggetEPlus.x = event.layerX;
            taggetEPlus.y = event.layerY;
        }
    }
}

export {
    mouseDown
}