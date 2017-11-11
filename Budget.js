  
  var main = function(){
  	var text = $('#in');
  	var button = $('#submit');
  	var money;
  	var shop;
  	var eat;
  	var travel;
  	var savings;

  window.onload = $('.submit').click(function(){
  		money = text.val();
  		shop = $('input[name=shop]:checked').val();
  		eat = $('input[name=eat]:checked').val();
  		travel = $('input[name=travel]:checked').val();
  		savings = $('input[name=savings]:checked').val();

  	if(shop == "tesco"){
  		shop = (.12 * money);
  		money = money - (.12 * money);
  	} else if (shop == "M&S"){
  		shop = (.24 * money);
  		money = money - (.24 * money);
  	} else if (shop == "wholefoods"){
  		shop = (.36 * money);
  		money = money - (.36 * money);
  	}
	
	

  	if (eat == "Packed Lunch"){
  		eat = 23;
  	} else if (eat == "Fast Food"){
  		eat = (.3 * money);
  		money = money - (.1 * money);
  	} else if (eat == "Cafe"){
  		eat = (.5 * money); 
  		money = money - (.2 * money);
  	} else if (eat == "Restaurants"){
  		eat = (.8 * money);
  	}

  	if (travel == "walk/bike"){
  		travel = 0;
  	} else if (travel == "car"){
  		travel = (.30 * money);
  		money = money - (.15 * money);
  	} else if (travel == "train"){
  		travel = (.70 * money);
  		money = money - (.7 * money);
  	}

  	

  	if (savings == "little"){
  		savings = (.1 * money);
  		money = money - (.05 * money);
  	} else if(savings == "decent"){
  		savings = (.2 * money);
  		money = money - (.1 * money);
  	} else if(savings == "lot"){
  		savings = (.30 * money);
  		money = money - (.15 * money);
  	}

document.getElementById("fbudget").innerHTML = shop;
document.getElementById("eatbudget").innerHTML = eat;
document.getElementById("tbudget").innerHTML = travel;
document.getElementById("sbudget").innerHTML = savings;
document.getElementById("moneyleft").innerHTML = money;
  	 });
  }
 $(document).ready(main);
