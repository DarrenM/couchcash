function(data){
    return {
	accounts: data.rows.map(
	    function(r) {return {
			     name: r.key,
			     type: r.value.type
			 };})
    };
}