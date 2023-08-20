document.getElementById('bookid').addEventListener("keyup",DataDisplay);
function DataDisplay()
{
	let mybook=document.getElementById("bookid").value;
	let url="http://localhost:3000/books";
	async function MyData()
	{
		let FilOb=await fetch(url);
		let myData=await FilOb.json();
		let html=`<table border='1' align='center' width='600'>
		          <tr>
		            <th>Book ID</th>
		            <th>Book Name </th>
		            <th>Author</th>
		            <th>Price</th>
		            </tr>
		            `;
		   myData.map((key)=>{
		   	var mystr=key.Book_name;
		   	if(mystr.includes(mybook))
		   	{
		   	html+=`<tr><td>${key.Book_Id}</td>
		   	           <td>${key.Book_name}</td>
		   	           <td>${key.Author_name}</td>
		   	           <td>${key.Price}</td>
		   	        </tr>`;	
		   	    }	
		 });
		 html+="</table>";
	document.getElementById("demo").innerHTML=html;	          
	}
	MyData();
}