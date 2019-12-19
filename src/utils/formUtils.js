/**
 * 获取表单内容
 * @param {*} form 
 */
export function getFormData (form) {
    const res = {}; //存放结果的对象
    
    for(let i=0; i<form.elements.length; i++){
        
        let current = form.elements[i];
        
        //disabled表示字段禁用，需要区分与readonly的区别
        if(current.disabled) continue;
        
        switch(current.type){
            
            //可忽略控件处理
            case "file":    //文件输入类型
            case "submit":  //提交按钮
            case "button":  //一般按钮
            case "image":   //图像形式的提交按钮
            case "reset":   //重置按钮
            case undefined: //未定义
                break;
            
            //select控件
            case "select-one":
            case "select-multiple":
                if(current.name && current.name.length){
                    console.log(current)
                    for(let k=0; k<current.options.length; k++){
                        let option = current.options[k];
                        let optionValue = "";
                        if(option.selected){
                            if(option.hasAttribute){
                                optionValue = option.hasAttribute('value') ? option.value : option.text
                            }else{
                                //低版本IE需要使用特性 的specified属性，检测是否已规定某个属性
                                optionValue = option.attributes('value').specified ? option.value : option.text;    
                            }
                            // res[encodeURIComponent(current.name)] = encodeURIComponent(optionValue);
                            res[encodeURIComponent(current.name)] = optionValue;
                        }
                    }
                }
                break;
                
            //单选，复选框
            case "radio":
            case "checkbox":
                //这里有个取巧 的写法，这里的判断是跟下面的default相互对应。
                //如果放在其他地方，则需要额外的判断取值
                if(!current.checked) break;
            
            default:
                //一般表单控件处理
                if(current.name && current.name.length){
                    // res[encodeURIComponent(current.name)] = encodeURIComponent(current.value);
                    res[encodeURIComponent(current.name)] = current.value;
                }
                break;
        }
    }
    return res;
}