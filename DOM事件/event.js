
//跨浏览器事件处理程序
/*var  eventUtil={
	 	//添加句柄
	 	addHandler:function(element,type,handler){
	 		if (element.addEventListener) {
	 			//DOM 2级，chrome,firefox...
	 			element.addEventListener(type,handler,false);
	 		} else if(element.attachEvent){
	 			//IE
	 			element.attachEvent('on'+type,handler);
	 		}else{
	 			//DOM 0级，既不支持google，也不支持ie
	 			element['on'+type]=handler;
	 		}
	 	},
	 	//删除句柄
	 	removeHandler:function(element,type,handler){
	 		if (element.removeEventListener) {
	 			//DOM 2级
	 			element.removeEventListener(type,handler,false);
	 		} else if(element.detachEvent){
	 			//IE
	 			element.detachEvent('on'+type,handler);
	 		}else{
	 			//DOM 0级
	 			element['on'+type]=null;
	 		}
	 	},
	 	//获取事件
	 	getEvent:function(event){
	 		return event?event:window.event;
	 	},
	 	//获取事件类型
	 	getType:function(event){
	 		return event.type;
	 	},
	 	//获取事件来源
	 	getElement:function(event){
	 		return event.srcElement||event.target;
	 	},
	 	//阻止事件默认行为
	 	preventDefault:function(event){
	 		if (event.preventDefault) {
	 			event.preventDefault();
	 		} else {
	 			event.returnValue=false;
	 		}
	 	},
	 	//阻止事件冒泡
	 	stopPropagation:function(event){
	 		if (event.stopPropagation) {
	 			event.stopPropagation();
	 		} else {
	 			event.cancelBubble=true;
	 		}
	 	}
	 };*/
	 
var eventUtil={
	//添加句柄
	addhandler:function(element,type,handler){
		if(element.addEventListener){//dom2级
			element.addEventListener(type,handler,false);
			}
		else if(element.attachEvent){
			elemnet.attachEvent('on'+type,handler)//IE事件处理程序
			}
		else{//dom 0级
			element.['on'+type]='handler';
			}
		
		},
	//删除句柄
	deletehandler:function(element,type,handler){
		if(element.removeEventListener){//dom2级
			element.removeEventListener(type,handler,false);
			}
		else if(element.detachEvent){
			elemnet.detachEvent('on'+type,handler)//IE事件处理程序
			}
		else{
			element.['on'+type]=null;
			}
		
		},
		//获取事件
		getEvent:function(event){
			return event?event:window.event;
			}
		//获取事件类
		getType:function(event){
			return event.type;
			}
		//获取事件来源
		getElement:function(event){
			return event.srcElement||event.target;
			}
		//阻止事件默认行为
		preventDefault:function(event){
			if(event.preventDefault){
				event.preventDefault();
				}else{
				event.returnValue=false;
					}
			}
		//阻止事件冒泡
		stopPropagation(event){
			if(event.stopPropagation){
				event.stopPropagation();
				}else{
					event.cancelBubble=true;
				}
			}
	}