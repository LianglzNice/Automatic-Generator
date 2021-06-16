import { ref,reactive } from 'vue'

const scrollTop = ref<number>(0);
const cName = ref<string>('');
const cType = ref<string>('');
const cCount = ref<number>(0);
const taggetGuide = ref<any>(null);

const taggetEPlus = reactive<any>({
    target: null,
    x: 0,
    y: 0
});
const taggetShape = reactive<any>({
    target: null,
    l: 0,
    t: 0,
    r: 0,
    b: 0
});
const epComponentsList = reactive<any>([]);
const cAttributes = reactive<any>({});

export {scrollTop, cName, cType, cCount, taggetGuide, taggetEPlus, taggetShape, epComponentsList, cAttributes}