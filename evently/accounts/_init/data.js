function(data){
    console.log(data.rows);
    return {
	accounts: data.rows.map(
	    function(r) {return {
			     name: r.key,
			     type: r.value.type
			 };})
    };
}