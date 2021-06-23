import { ElMessage } from 'element-plus';

export default{
	message: (msg:any):void => {
		ElMessage.closeAll();
		ElMessage({message: msg, type: 'info'})
	},
	warning: (msg:any):void => {
		ElMessage.closeAll();
		ElMessage({message: msg, type: 'warning'})
	},
	success: (msg:any):void => {
		ElMessage.closeAll();
		ElMessage({message: msg, type: 'success'})
	},
	error: (msg:any):void => {
		ElMessage.closeAll();
		ElMessage({message: msg, type: 'error'})
	}
}