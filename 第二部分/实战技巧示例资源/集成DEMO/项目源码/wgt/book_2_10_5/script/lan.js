var chLanJson = {
	"select_lan" : "选择语言",
	"ch" : "中文",
	"en" : "英文"
};

var enLanJson = {
	"select_lan" : "select language",
	"ch" : "Chinese",
	"en" : "English"
};

function fnInitLan() {
	var all = $api.domAll(".lan");
	var lan = $api.getStorage("lan");
	for (var i = 0; i < all.length; i++) {
		var el = all[i];
		var attr = el.getAttribute('set-lan');
		if (attr) {
			var attrs = attr.split(':');
			var attrType = attrs[0];
			var lanVal; 
			if(lan == 'ch'){
				lanVal = chLanJson[attrs[1]];
			}else{
				lanVal = enLanJson[attrs[1]];
			}
			if (attrType == 'html') {
				$api.html(el, lanVal);
			} else if (attrType == 'value') {
				$api.val(el, lanVal);
			}
		}
	}
}