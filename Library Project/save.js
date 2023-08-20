document.getElementById('mybtn').addEventListener("click", DataSave);
function DataSave() 
{
	let url="http://localhost:3000/books";
	let bookid=document.getElementById('bid').value;
	let booknm=document.getElementById('bname').value;
	let author=document.getElementById('author').value;
	let price=document.getElementById('price').value;

	fetch(url, {
		method: "POST",
		body: JSON.stringify({
			"Book_Id": bookid,
			"Book_name": booknm,
			"Author_name": author,
			"Price": price
		}),
		headers: { "Content-type": "application/json; charset=UTF-8" }
	})
		.then(res => res.json())
		.then(data => alert("Record Save!!!"));
}