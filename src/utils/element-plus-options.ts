/**
 * 左侧菜单
 * 代号、标题、名称等组件配置信息
 */
interface term{
    value: number, //编号
    label: string,  //中文名称
    name: string,   //名称
    alias: string,  //组件别名
    component: string,  //组件名称
    hasModel: boolean, //是否包含v-model
    original: any,   //el-plus原名称
    style: any, //组件样式表
    attributes: any //组件属性
}

const EPList:term[] = [
{
    value: 1,
    label: 'div 盒子',
    name: 'div',
    alias: 'LDiv',
    component: 'l-div',
    hasModel: false,
    original: {
        name: 'div',
    },
    style: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: '100px',
        height: '100px',
        position: 'absolute',
        'z-index': 100,
        'border-width': '1px',
        'border-style': 'solid',
        'border-radius': '0px',
        'border-color': '#000000',
        'background-color': '#ffffff'
    },
    attributes: {
        width: {value: '100px', label: '宽度', type: 'input', unit: 'px'},
        height: {value: '100px', label: '高度', type: 'input', unit: 'px'},
        'border-width': {value: '1px', label: '边框宽度', type: 'input', unit: 'px'},
        'border-style': {value: 'solid', label: '边框样式', type: 'select', list: 'borderStyleList'},
        'border-radius': {value: '0px', label: '圆角选择', type: 'input', unit: 'px/百分比'},
        'border-color': {value: '#000000', label: '边框颜色', type: 'color'},
        'background-color': {value: '#ffffff', label: '背景色', type: 'color'}
    }
},
{
    value: 2,
    label: 'Button 按钮',
    name: 'button',
    alias: 'LButton',
    component: 'l-button',
    hasModel: false,
    original: {
        name: 'el-button',
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {
        value: {value: '按钮', label: '值', type: 'input'},
        size: {value: '', label: '尺寸', type: 'select', list: 'sizeList'},
        type: {value: null, label: '类型', type: 'select', list: 'buttonTypeList'},
        plain: {value: false, label: '朴素按钮', type: 'radio', list: 'ynList'},
        circle: {value: false, label: '圆形按钮', type: 'radio', list: 'ynList'}
    }
},
{
    value: 3,
    label: 'Radio 单选框',
    name: 'radio',
    alias: 'LRadio',
    component: 'l-radio',
    hasModel: true,
    original: {
        name: 'el-radio-group',
        children: { 
            name: 'el-radio',
            childAttrs: ['label']
        }
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {
        shapeType: {value: 'el-radio', label:'按钮样式', type:'select', list: 'radioTypeList'},
        size: {value: '', label: '尺寸', type: 'select', list: 'sizeList'},
        border: {value: false, label:'是否带有边框', type: 'radio', list: 'ynList'},
        disabled: {value: false, label:'是否禁用', type: 'radio', list: 'ynList'}  
    }
},{
    value: 4,
    label: 'Checkbox 多选框',
    name: 'checkbox',
    alias: 'LCheckbox',
    component: 'l-checkbox',
    hasModel: true,
    original: {
        name: 'el-checkbox-group',
        children: {
            name: 'el-checkbox',
            childAttrs: ['label']
        }
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {
        shapeType: {value: 'el-checkbox', label: '按钮样式', type: 'select', list: 'checkboxTypeList'},
        size: {value: '', label: '尺寸', type: 'select', list: 'sizeList'},
        border: {value: false, label:'是否带有边框', type: 'radio', list: 'ynList'},
        disabled: {value: false, label:'是否禁用', type: 'radio', list: 'ynList'}
    }
},{
    value: 5,
    label: 'Input 输入框',
    name: 'input',
    alias: 'LInput',
    component: 'l-input',
    hasModel: true,
    original: {
        name: 'el-input',
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
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
    hasModel: true,
    original: {
        name: 'el-select',
        children: {
            name: 'el-option'
        }
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {}
},{
    value: 7,
    label: 'Switch 开关',
    name: 'switch',
    alias: 'LSwitch',
    component: 'l-switch',
    hasModel: true,
    original: {
        name: 'el-switch',
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {}
},{
    value: 8,
    label: 'DateTimePicker 日期时间',
    name: 'datetimepicker',
    alias: 'LDatetimepicker',
    component: 'l-datetimepicker',
    hasModel: true,
    original: {
        name: 'el-date-picker',
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {}
},{
    value: 9,
    label: 'Upload 上传',
    name: 'upload',
    alias: 'LUpload',
    component: 'l-upload',
    hasModel: true,
    original: {
        name: 'el-upload',
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {}
},{
    value: 10,
    label: 'Form 表单',
    name: 'form',
    alias: 'LForm',
    component: 'l-form',
    hasModel: true,
    original: {
        name: 'el-form',
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {}
},{
    value: 11,
    label: 'Table 表格',
    name: 'table',
    alias: 'LTable',
    component: 'l-table',
    hasModel: true,
    original: {
        name: 'el-table',
        children: {
            name: 'el-table-column'
        }
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {}
},{
    value: 12,
    label: 'Descriptions 描述列表',
    name: 'descriptions',
    alias: 'LDescriptions',
    component: 'l-descriptions',
    hasModel: true,
    original: {
        name: 'el-descriptions',
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {}
},{
    value: 13,
    label: 'NavMenu 导航菜单',
    name: 'navmenu',
    alias: 'LNavmenu',
    component: 'l-navmenu',
    hasModel: true,
    original: {
        name: 'el-navmenu',
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {}
},{
    value: 14,
    label: 'Tabs 标签页',
    name: 'tabs',
    alias: 'LTabs',
    component: 'l-tabs',
    hasModel: true,
    original: {
        name: 'el-tabs',
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {}
},{
    value: 15,
    label: 'Carousel 走马灯',
    name: 'carousel',
    alias: 'LCarousel',
    component: 'l-carousel',
    hasModel: true,
    original: {
        name: 'el-carousel',
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {}
},{
    value: 16,
    label: 'Collapse 折叠面板',
    name: 'collapse',
    alias: 'LCollapse',
    component: 'l-collapse',
    hasModel: true,
    original: {
        name: 'el-collapse',
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {}
},{
    value: 17,
    label: 'Drawer 抽屉',
    name: 'drawer',
    alias: 'LDrawer',
    component: 'l-drawer',
    hasModel: true,
    original: {
        name: 'el-drawer',
    },
    style: {position: 'absolute', left: 0, top: 0, 'z-index': 100},
    attributes: {}
}]

export default EPList