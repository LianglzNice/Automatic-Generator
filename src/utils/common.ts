import { taggetEPlus } from '@/datas/screen'

const recoveryEplus = (point:string[]):void => {
    const eplusList:any = document.getElementsByClassName('eplus active');
    for(let i=0; i<eplusList.length; i++){
        for(let j=0; j<point.length; j++){
            const el:any = document.getElementsByClassName(`shape-point-${point[j]}`);
            if(eplusList[i].contains(el[0])){
                eplusList[i].removeChild(el[0]);
            }
        }
        eplusList[i].id = '';
        eplusList[i].className = 'eplus';
    }
}

const mouseDown = (event:any):void => {
    taggetEPlus.value = event.currentTarget; 
    taggetEPlus.x = event.layerX;
    taggetEPlus.y = event.layerY;

    const point:string[] = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
    recoveryEplus(point);

    event.currentTarget.className = 'eplus active';
    event.currentTarget.id = "active";

    const fragment:DocumentFragment = document.createDocumentFragment();
    for(const item of point){
        const div:HTMLDivElement = document.createElement('div');
        div.className = 'shape-point-' + item;
        fragment.appendChild(div);
    }
    
    (document.getElementById('active') as any).appendChild(fragment);
}

const deleteCom = (event:any):void => {
    event.currentTarget.remove();
}

const handleComponent = (event:any):void => {
    console.log(event);
}
export {
    recoveryEplus,
    mouseDown,
    deleteCom,
    handleComponent
}