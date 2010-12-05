var CC = {};

CC.saveAccount = function(app){
    var arrayForm = $('#account-form').serializeArray();
    var obj = {};
    arrayForm.forEach(function (x) {obj[x.name] = x.value || "";});
    app.db.saveDoc(obj);
    $('#account-dialog').dialog('close');
};

CC.accDialog = function(){
    $('#account-dialog')
	.dialog({title: 'Create Account',
		 buttons: {"OK" : function(){$.couch.app(CC.saveAccount);}}
		});
};

$('document').ready(
    function(){
	$('button').button().bind('click', CC.accDialog);
    }
);