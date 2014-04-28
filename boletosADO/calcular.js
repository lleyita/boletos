// JavaScript Document
function calcular(){
	var result, opcion, boleto, descuento;
	opcion=parseInt(document.getElementById("textOpcion").value);
	boleto=parseInt(document.getElementById("textCosto").value);
	switch(opcion){
		case 1:
		case 2:
		case 3:
		descuento=(boleto*50)/100;
		result=boleto-descuento;
		alert("Su descuento es de: $"+descuento+" Su pago final es de: $"+result);
			document.getElementById("textResul").value=result;
			break;
		case 4:
		descuento=(boleto*25)/100;
		result=boleto-descuento;
		alert("Su descuento es de: $"+descuento+" Su pago final es de: $"+result);
		document.getElementById("textResul").value=result;
		break;
		default:alert("valor no valido");
		opcion="";
		}
	}