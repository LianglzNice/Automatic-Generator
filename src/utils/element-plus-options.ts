/**
 * 左侧菜单
 * 代号、标题、名称
 */
interface term{
    value: number,
    label: string,
    name: string,
    alias: string,
    component: string,
    style: any,
    attributes: any
}

const EPList:term[] = [{
    value: 1,
    label: 'Button 按钮',
    name: 'button',
    alias: 'LButton',
    component: 'l-button',
    style: {left: 0, top: 0},
    attributes: {
        value: {value: '按钮', label: '值', type: 'input'},
        size: {value: '', label: '尺寸', type: 'select', list: 'sizeList'},
        type: {value: null, label: '类型', type: 'select', list: 'buttonTypeList'},
        plain: {value: false, label: '朴素按钮', type: 'radio', list: 'ynList'},
        circle: {value: false, label: '圆形按钮', type: 'radio', list: 'ynList'}
    }
},
// {
//     value: 2,
//     label: 'Link 文字链接',
//     name: 'link',
//     alias: 'LLink',
//     component: 'l-link',
//     style: {left: 0, top: 0},
//     attributes: {}
// },
{
    value: 3,
    label: 'Radio 单选框',
    name: 'radio',
    alias: 'LRadio',
    component: 'l-radio',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 4,
    label: 'Checkbox 多选框',
    name: 'checkbox',
    alias: 'LCheckbox',
    component: 'l-checkbox',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 5,
    label: 'Input 输入框',
    name: 'input',
    alias: 'LInput',
    component: 'l-input',
    style: {left: 0, top: 0},
    attributes: {
        size: {value: '', label: '尺寸', type: 'select', list: 'sizeList'},
        type: {value: null, label: '类型', type: 'select', list: 'inputTypeList'},
        disabled: {value: false, label: '是否禁用', type: 'radio', list: 'ynList'},
        clearable: {value: false, label: '是否可以清空', type: 'radio', list: 'ynList'},
        showPassword: {value: false, label: '是否为密码框', type: 'radio', list: 'ynList'}
    }
},{
    value: 6,
    label: 'Select 选择器',
    name: 'select',
    alias: 'LSelect',
    component: 'l-select',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 7,
    label: 'Switch 开关',
    name: 'switch',
    alias: 'LSwitch',
    component: 'l-switch',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 8,
    label: 'TimePicker 时间选择器',
    name: 'timepicker',
    alias: 'LTimepicker',
    component: 'l-timepicker',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 9,
    label: 'Upload 上传',
    name: 'upload',
    alias: 'LUpload',
    component: 'l-upload',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 10,
    label: 'Form 表单',
    name: 'form',
    alias: 'LForm',
    component: 'l-form',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 11,
    label: 'Table 表格',
    name: 'table',
    alias: 'LTable',
    component: 'l-table',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 12,
    label: 'Descriptions 描述列表',
    name: 'descriptions',
    alias: 'LDescriptions',
    component: 'l-descriptions',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 13,
    label: 'NavMenu 导航菜单',
    name: 'navmenu',
    alias: 'LNavmenu',
    component: 'l-navmenu',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 14,
    label: 'Tabs 标签页',
    name: 'tabs',
    alias: 'LTabs',
    component: 'l-tabs',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 15,
    label: 'Carousel 走马灯',
    name: 'carousel',
    alias: 'LCarousel',
    component: 'l-carousel',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 16,
    label: 'Collapse 折叠面板',
    name: 'collapse',
    alias: 'LCollapse',
    component: 'l-collapse',
    style: {left: 0, top: 0},
    attributes: {}
},{
    value: 17,
    label: 'Drawer 抽屉',
    name: 'drawer',
    alias: 'LDrawer',
    component: 'l-drawer',
    style: {left: 0, top: 0},
    attributes: {}
}]

export default EPList