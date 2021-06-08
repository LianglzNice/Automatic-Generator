import { ref,reactive } from 'vue'

interface EPlus{
    value: any,
    x: number,
    y: number
}

const cName = ref<string>('');
const cType = ref<string>('');
const taggetGuide = ref<any>(null);

const taggetEPlus = reactive<EPlus>({
    value: null,
    x: 0,
    y: 0
})
const epComponentsList = reactive<any>([]);

export {cName, cType, taggetGuide, taggetEPlus, epComponentsList}