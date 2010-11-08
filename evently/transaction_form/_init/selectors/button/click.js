function(e){
    e.preventDefault();
    $.couch.app(
	function(app){
	    var arrayForm = $('#trans-form').serializeArray();
	    var obj = {};
	    arrayForm.forEach(function (x) {obj[x.name] = x.value || "";});
	    app.db.saveDoc(obj);
	}
    );
}