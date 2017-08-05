$(function(){
	//先选中页面中的所有自定义的属性 input[data-rule]
	//解析每一个input的验证规则
	//验证(核心，越核心，越基础的东西我们就要把它写在最前面)
	var validator = new Validator('a    a',{
		// maxlength:5,
		// minlength:3,
	});

	var result = validator.validate_required();

	console.log(result);
})