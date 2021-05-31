/**
 * 左侧菜单
 * 代号、标题、名称
 */
interface term{
    value: number,
    label: string,
    name: string,
    alias: string,
    component: string
}

const EPList:term[] = [{
    value: 1,
    label: 'Button 按钮',
    name: 'button',
    alias: 'LButton',
    component: 'l-button'
},{
    value: 2,
    label: 'Link 文字链接',
    name: 'link',
    alias: 'LLink',
    component: 'l-link'
},{
    value: 3,
    label: 'Radio 单选框',
    name: 'radio',
    alias: 'LRadio',
    component: 'l-radio'
},{
    value: 4,
    label: 'Checkbox 多选框',
    name: 'checkbox',
    alias: 'LCheckbox',
    component: 'l-checkbox'
},{
    value: 5,
    label: 'Input 输入框',
    name: 'input',
    alias: 'LInput',
    component: 'l-input'
},{
    value: 6,
    label: 'Select 选择器',
    name: 'select',
    alias: 'LSelect',
    component: 'l-select'
},{
    value: 7,
    label: 'Switch 开关',
    name: 'switch',
    alias: 'LSwitch',
    component: 'l-switch'
},{
    value: 8,
    label: 'TimePicker 时间选择器',
    name: 'timepicker',
    alias: 'LTimepicker',
    component: 'l-timepicker'
},{
    value: 9,
    label: 'Upload 上传',
    name: 'upload',
    alias: 'LUpload',
    component: 'l-upload'
},{
    value: 10,
    label: 'Form 表单',
    name: 'form',
    alias: 'LForm',
    component: 'l-form'
},{
    value: 11,
    label: 'Table 表格',
    name: 'table',
    alias: 'LTable',
    component: 'l-table'
},{
    value: 12,
    label: 'Descriptions 描述列表',
    name: 'descriptions',
    alias: 'LDescriptions',
    component: 'l-descriptions'
},{
    value: 13,
    label: 'NavMenu 导航菜单',
    name: 'navmenu',
    alias: 'LNavmenu',
    component: 'l-navmenu'
},{
    value: 14,
    label: 'Tabs 标签页',
    name: 'tabs',
    alias: 'LTabs',
    component: 'l-tabs'
},{
    value: 15,
    label: 'Carousel 走马灯',
    name: 'carousel',
    alias: 'LCarousel',
    component: 'l-carousel'
},{
    value: 16,
    label: 'Collapse 折叠面板',
    name: 'collapse',
    alias: 'LCollapse',
    component: 'l-collapse'
},{
    value: 17,
    label: 'Drawer 抽屉',
    name: 'drawer',
    alias: 'LDrawer',
    component: 'l-drawer'
}]

export default EPList