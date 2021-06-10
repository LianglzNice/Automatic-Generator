import { ref,reactive } from 'vue'

const cName = ref<string>('');
const cType = ref<string>('');
const cCount = ref<number>(0);
const taggetGuide = ref<any>(null);

const taggetEPlus = reactive<any>({
    target: null,
    x: 0,
    y: 0
});
const epComponentsList = reactive<any>([]);
const cAttributes = reactive<any>({});

export {cName, cType, cCount, taggetGuide, taggetEPlus, epComponentsList, cAttributes}