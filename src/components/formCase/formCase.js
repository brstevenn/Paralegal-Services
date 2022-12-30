export default function formCase(type, value){
	 
	console.log(type, value)

	let typeData = '',
		typeValue = ''


	switch(type) {

    	case 'service':
      		typeData = "Service"
      		switch(value) {
        		case "affidavit":
          			typeValue = "$200 per Affidavit"
        		break;
        		case  "addonservices":
          			typeValue = "Add-on Service: Starting at $100"
        		break;
        		case "writing":
          			typeValue = "Legal Writing: Starting at $175"
        		break;
        		default:
          			typeValue = ""
      		}
    	break;  

    	case "blogpackage":
      		typeData = "Blog Content"
      		switch(value) {
        		case "bronze":
          			typeValue = "Package: Bronze $700"
        		break;
        		case "gold":
          			typeValue = "Package: Gold $3,000"
        		break;
        		case "silver":
          			typeValue = "Package: Silver $1,400"
        		break;
        		default:
          			typeValue = ""
      		}
    	break;

    	case "selectoption":
      		typeData = "Print Marketing"
      		switch(value) {
        		case "palmcard":
          			typeValue = "Palmcard $100.00"
        		break;
        		case "doorhanger":
          			typeValue = "Doorhanger $100.00"
        		break;
        		case "postcard":
          			typeValue = "Folded Postcard $125.00"
        		break;
        		case "prochures":
          			typeValue = "Prochures $130.00"
        		break;
        		case "posters":
          			typeValue = "Posters $100.00"
        		break;
        		case "banner":
          			typeValue = "Floor Banner $100.00"
        		break;
        		case "bussines":
          			typeValue = "Bussines Card $50.00"
        		break;
        		default:
        			typeValue = ""
      		}
    	break;  

    	default:
      		typeData = 'No fue seleccionado ningun servicio'
      		typeValue = "";
  	}

  return {data: typeData, value: typeValue}
}