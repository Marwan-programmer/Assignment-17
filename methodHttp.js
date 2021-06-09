/////get
fetch ('https://fakerestapi.azurewebsites.net/api/v1/Authors')
.then(response => response.json())
  .then(commits => console.log(commits));




///////////////post
let headers = new Headers();////we can use it for put and post 
headers.append('Content-type', 'application/json');



let options = {
	method: 'POST',
	body: JSON.stringify({
		idBook: 190,
		firstName: "Francesco",
		lastName: "Garbo"
	}),
	headers
};

fetch ('https://fakerestapi.azurewebsites.net/api/v1/Authors',options)
.then(response => response.json())
  .then(commits => console.log(commits));





////////////////////////////////put
let options2 = {
	method: 'PUT',
	body: JSON.stringify({
      id:1,
      idBook: 190,
		firstName: "marwan",
		lastName: "Garbo"
	}),
	headers
};


fetch ('https://fakerestapi.azurewebsites.net/api/v1/Authors/1',options2)
.then(response => response.json())
  .then(result => console.log(result));




/////////////////////////////PATCH
let options3 = {
	method: 'PATCH',
	body: JSON.stringify({
		lastName: "alsubayi"///////modify only lastName
	}),
	headers
};


fetch ('https://fakerestapi.azurewebsites.net/api/v1/Authors/3',options3)
.then(response => response.json())
  .then(result => console.log(result));










/////////////////////////////////////DELETE
let options4= {
	method: 'DELETE',
};


fetch ('https://fakerestapi.azurewebsites.net/api/v1/Authors/2',options4)
.then(response => console.log(response.status))
  










