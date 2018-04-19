window.onload = function () {document.getElementById('name').focus();} //focus on the first text field when screen loaded
/*variables to see whether the infomation from use is correct and complete.*/
var name_invalid = false;
var email_invalid = false;
var design_invalid = false;
var color_invalid = false;
var activity_invalid = false;
var zero_payment = false;
var card_invalid = false;
var zip_invalid = false;
var cvv_invalid = false;
var total = 0; //total amount of fees for registering activites
var list = document.getElementById('title');
var shirt_leg = document.getElementById('shirt_info');
var activity_leg = document.getElementById('activity_info');
var payment_leg = document.getElementById('payment_info');
$('#other-title').hide();
/*when select "other" in the job role*/
$('#title').change(function() {
	var selected_job = $('#title').val();
	if(selected_job == 'other')
	{
		$('#other-title').show();
	}
	else
	{
		$('#other-title').hide();
	}
});
/* T-shirt section: the user needs to select design first, and corresponding options for color will be 
   displayed */
$('#design').change(function() {
	var selected_design = $("#design option:selected").val();
	if(selected_design == "js puns")
	{
		$('#color').val('cornflowerblue');
		$("#color option[value='starter']").hide();
		$("#color option[value='cornflowerblue']").show();
		$("#color option[value='darkslategrey']").show();
		$("#color option[value='gold']").show();
		$("#color option[value='tomato']").hide();
		$("#color option[value='steelblue']").hide();
		$("#color option[value='dimgrey']").hide();
	}
	else if(selected_design === "heart js")
	{
		$('#color').val('tomato');
		$("#color option[value='starter']").hide();
		$("#color option[value='cornflowerblue']").hide();
		$("#color option[value='darkslategrey']").hide();
		$("#color option[value='gold']").hide();
		$("#color option[value='tomato']").show();
		$("#color option[value='steelblue']").show();
		$("#color option[value='dimgrey']").show();
	}
	else
	{
		$('#color').val('starter');
		$("#color option[value='cornflowerblue']").hide();
		$("#color option[value='darkslategrey']").hide();
		$("#color option[value='gold']").hide();
		$("#color option[value='tomato']").hide();
		$("#color option[value='steelblue']").hide();
		$("#color option[value='dimgrey']").hide();
	}
});

$("input[name='all']").change(function(){
			if($("input[name='all']").is(':checked'))
			{
				total = total + 200;
			}
			else
			{
				total = total - 200;
			}
});

$("input[name='js-frameworks']").change(function(){
			if($("input[name='js-frameworks']").is(':checked'))
			{
				total = total + 100;
				$("#the_express").addClass('disabled');
				$("input[name='express']").attr('disabled', 'disabled');
			}
			else
			{
				total = total - 100;
				$("#the_express").removeClass('disabled');
				$("input[name='express']").removeAttr('disabled');
			}
});

$("input[name='js-libs']").change(function(){
			if($("input[name='js-libs']").is(':checked'))
			{
				total = total + 100;
				$("#the_node").addClass('disabled');
				$("input[name='node']").attr('disabled', 'disabled');
			}
			else
			{
				total = total - 100;
				$("#the_node").removeClass('disabled');
				$("input[name='node']").removeAttr('disabled');
			}
});

$("input[name='express']").change(function(){
			if($("input[name='express']").is(':checked'))
			{
				total = total + 100;
				$("#the_frameworks").addClass('disabled');
				$("input[name='js-frameworks']").attr('disabled', 'disabled');
			}
			else
			{
				total = total - 100;
				$("#the_frameworks").removeClass('disabled');
				$("input[name='js-frameworks']").removeAttr('disabled');
			}
});

$("input[name='node']").change(function(){
			if($("input[name='node']").is(':checked'))
			{
				total = total + 100;
				$("#the_libs").addClass('disabled');
				$("input[name='js-libs']").attr('disabled', 'disabled');
			}
			else
			{
				total = total - 100;
				$("#the_libs").removeClass('disabled');
				$("input[name='js-libs']").removeAttr('disabled');
			}
});

$("input[name='build-tools']").change(function(){
			if($("input[name='build-tools']").is(':checked'))
			{
				total = total + 100;
			}
			else
			{
				total = total - 100;
			}
});

$("input[name='npm']").change(function(){
			if($("input[name='npm']").is(':checked'))
			{
				total = total + 100;
			}
			else
			{
				total = total - 100;
			}
});
$(".check").change(function(){
	var last_item = document.getElementById('the_last');
	if($("#the_activities input:checked").length > 0)
	{
		if(last_item.nextSibling.id != "total_amount")
		{
			var total_num = document.createElement("p");
			total_num.id = "total_amount";
			total_num.innerHTML = "Total: $" + total;
			last_item.parentNode.insertBefore(total_num, last_item.nextSibling);
		}
		else
		{
			document.getElementById("total_amount").innerHTML = "Total: $" + total;
		}
	}
	else
	{
		last_item.parentNode.removeChild(last_item.nextSibling);
	}
});
/*select one payment and hide other 2 payment info*/
$('#credit-card').hide();
		$('#paypal').hide();
		$('#bitcoin').hide();
$('#payment').change(function() {
	var selected_payment = $("#payment option:selected").val();
	if(selected_payment == "credit card")
	{
		$('#credit-card').show();
		$('#paypal').hide();
		$('#bitcoin').hide();
	}
	else if(selected_payment == "paypal")
	{
		$('#credit-card').hide();
		$('#paypal').show();
		$('#bitcoin').hide();
	}
	else if(selected_payment == "bitcoin")
	{
		$('#credit-card').hide();
		$('#paypal').hide();
		$('#bitcoin').show();
	}
	else
	{
		$('#credit-card').hide();
		$('#paypal').hide();
		$('#bitcoin').hide();
	}
});

function emailValidate(email){
	var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

/*validate form if info is wrong or missing, the red error message will pop up*/ 
function validateForm() {
	if($('#name').val() == '')
	{
		document.getElementById("name_info").innerHTML = "Name: (Please enter your name)"
		$("#name_info").css("color", "red");
		name_invalid = true;
	}
	else
	{
			document.getElementById("name_info").innerHTML = "Name:"
			$("#name_info").css("color", "#000");
			name_invalid = false; 	
	}
	var email = $('#mail').val();
	if((email == '') || (emailValidate(email) == false))
	{
		document.getElementById("email_info").innerHTML = "Email: (Please enter valid email)"
		$("#email_info").css("color", "red");
		email_invalid = true;
	}
	else
	{
		document.getElementById("email_info").innerHTML = "Email:"
		$("#email_info").css("color", "#000");
		email_invalid = false;
	}
	var the_design = $("#design option:selected").val();
	if(the_design == "beginner")
	{
		if(design_invalid == false)
		{
			var warning_shirt = document.createElement('label');
			warning_shirt.style.marginTop = "-20px";
			warning_shirt.style.marginBottom = "20px";
			warning_shirt.innerHTML = "Don't forget to pick a T-shirt!";
			warning_shirt.style.color = "red";
			warning_shirt.id = "w_shirt";
			shirt_leg.parentNode.insertBefore(warning_shirt, shirt_leg.nextSibling);
			design_invalid = true;
		}
	}
	else
	{
		if(design_invalid == true)
		{
			shirt_leg.parentNode.removeChild(shirt_leg.nextSibling);
			design_invalid = false;
		}
	}
	if($("#the_activities input:checked").length == 0)
	{
		if(activity_invalid == false)
		{
			var warning_activity = document.createElement('label');
			warning_activity.style.marginTop = "-20px";
			warning_activity.style.marginBottom = "20px";
			warning_activity.innerHTML = "Please select an activity";
			warning_activity.style.color = "red";
			warning_activity.id = "w_activity";
			activity_leg.parentNode.insertBefore(warning_activity, activity_leg.nextSibling);
			activity_invalid = true;
	  }
	}
	else
	{
		if(activity_invalid == true)
		{
			activity_leg.parentNode.removeChild(activity_leg.nextSibling);
			activity_invalid = false;
		}
	}
	var selected_payment = $("#payment option:selected").val();
	if(selected_payment == "select_method")
	{
		if(zero_payment == false)
		{
			var warning_payment = document.createElement('p');
			warning_payment.innerHTML = "Please select a payment method";
			warning_payment.style.marginTop = "-20px";
			warning_payment.style.marginBottom = "20px";
			warning_payment.style.color = "red";
			warning_payment.id = "w_payment";
			payment_leg.parentNode.insertBefore(warning_payment, payment_leg.nextSibling);
			zero_payment = true;
	  }
	}
	else
	{
		if(zero_payment == true)
		{
			payment_leg.parentNode.removeChild(payment_leg.nextSibling);
			zero_payment = false;
		}
		if(selected_payment == "credit card")
		{
			var card_num = $('#cc-num').val();
			var zip_code = $('#zip').val();
			var cvv = $('#cvv').val();
			if((card_num.length > 16) || (card_num.length < 13) || (isNaN(card_num)))
			{
				$('#num_info').css("color", "red");
				card_invalid = true;
			}
			else
			{
				$('#num_info').css("color", "#000");
				card_invalid = false;
			}
			if((zip_code.length != 5) ||(isNaN(zip_code)))
			{
				$('#zip_info').css("color", "red");
				zip_invalid = true;
			}
			else
			{
				$('#zip_info').css("color", "#000");
				zip_invalid = false;
			}
			if((cvv.length != 3)||(isNaN(cvv)))
			{
				$('#cvv_info').css("color", "red");
				cvv_invalid = true;
			}
			else
			{
				$('#cvv_info').css("color", "#000");
				cvv_invalid = false;
			}
		}
		else
		{
			card_invalid = false;
			zip_invalid = false;
			cvv_invalid = false;
		}
	}
	if(name_invalid || email_invalid || design_invalid || activity_invalid || zero_payment || card_invalid || zip_invalid || cvv_invalid)
		return false;
}