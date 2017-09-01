//
//调用JSON数据 


window.onload=function(){
	var modalbg=document.getElementById('modal-bg');//获取整个弹框
//	var img=document.createElement('img');//创建img元素
	var oBox=document.getElementsByClassName('suggest-box')[0];//项目圆图列表
/*	for(var i=0;i<Json.project.length;i++){
		//alert(Json.project.length);
		var item=document.createElement('div');//创建div元素
		item.className='item';
		item.innerHTML = '<div class="img"><div class="circle"></div><div class="photo"><img src="'+ Json.project[i].image[0] +'" alt=""/><div class="shadow"></div></div></div><div class="text"><h4>'+ Json.project[i].name +'</h4><p>'+ Json.project[i].date +'</p></div>';
        oBox.appendChild(item);
	}*/
	var aItem=oBox.children;//圆图列表的子元素
	//alert(aItem);
	var photo=modalbg.getElementsByClassName('photo')[0];//获取model-bg里面的photo类名
	var oli=modalbg.getElementsByTagName('li');//获取 model-bg弹框里面的li标签名
	var oClose=modalbg.getElementsByClassName('close')[0];//获取关闭按钮类名
	
	for(var i=0;i<aItem.length;i++){//遍历圆列表
		
		aItem[i].index=i;
		aItem[i].onclick=function(){//遍历圆子列表点击事件\n
			modalbg.style.display='block';
			photo.innerHTML='';
			for(var i=0;i<Json.project[this.index].image.length;i++){//给弹框依次点击后获取JSON图片数据并添加到photo子元素里
				//alert(Json.project);
				var img=document.createElement('img');
				img.src=Json.project[this.index].image[i];
				photo.appendChild(img);
			}
			
			oli[0].getElementsByTagName('span')[0].innerHTML=Json.project[this.index].name;//把JSON.JS中的project当前索引 下的name值赋值
			oli[1].getElementsByTagName('span')[0].innerHTML=Json.project[this.index].date;//日期值 这里的下标要注意应该是第二个oli元素下获取第一个span元素
			oli[2].getElementsByTagName('a')[0].innerHTML=Json.project[this.index].link;//链接文本
			oli[2].getElementsByTagName('a')[0].href='http://'+Json.project[this.index].link;//链链接值 
			oli[3].getElementsByTagName('p')[0].innerHTML=Json.project[this.index].detail;//描述部分赋值
			
		};
	}
	oClose.onclick=function(){//点击让弹窗隐藏
		modalbg.style.display='none';
	}
	
}
	
	

























