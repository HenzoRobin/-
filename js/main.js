$(function(){
	//先选中页面中的所有自定义的属性 input[data-rule]
	var $inputs = $('[data-rule]');
	var inputs = [];
	var $form = $("#signup");

	$inputs.each(function(index,node){
		var tmp = new Input(node) ;
		inputs.push(tmp);	
	})

	$form.on('submit',function(e){
		e.preventDefault();
		$inputs.trigger('blur');
		for(var i = 0 ; i < inputs.length ; i++){
			var item = inputs[i];
			var r = item.validator.is_valid();
			if(!r){
				alert('error')
				return ;
			}
		}
	})
	//解析每一个input的验证规则
	//验证(核心，越核心，越基础的东西我们就要把它写在最前面)
	// var validator = new Validator('AVZas',{
	// 	pattern:'^[a-z0-9]*$'
	// 	// maxlength:5,
	// 	// minlength:3,
	// });

	// var result = validator.validate_pattern();

	// console.log(result);
})