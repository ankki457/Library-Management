async function DataDisplay()
{
  let myTable=`<table border="1" align='center' width='500' bgcolor='#e6ffff'>
              <tr>
              <td>Book ID</td>
              <td>Book Name</td>
              <td>Author</td>
              <td>price</td>
              <td>Edit/Delete</td>;
              </tr>`;
  let url="http://localhost:3000/books";
  let FilOb=await fetch(url);
  let MyData=await FilOb.json();
   MyData.map((key)=>{

    var myid=key.id;
    myTable+=`<tr>
             <td> ${key.Book_Id} </td>
             <td> ${key.Book_name} </td>
             <td> ${key.Author_name} </td>
             <td> ${key.Price} </td>
             <td >
             <a href='#' onclick='DataEdit(${myid})'>
             <img src='pic/edit.png' width='25' height='25'>
             </a>

             <a href='#' onclick='DataDelete(${myid})'>
             <img src='pic/delete.png' width='25' height='25'>
             </a>
             </td>
             </tr>`;
  });
  myTable+=`</table>`;
  document.getElementById('demo').innerHTML=myTable;
}
DataDisplay();

function DataDelete(myval)
{
  let url=`http://localhost:3000/books/${myval}`;
  fetch(url,{
    method:'DELETE'
  }).then(()=>alert("Record Succefully deleted"));

  DataDisplay();
}

async function DataEdit(myval1)
{
 let url1=`http://localhost:3000/books/${myval1}`;
 let MyFrm="";
 let FileOb1=await fetch(url1);
 let MyData1=await FileOb1.json();

  MyFrm=` 
         
       <lable Class="my2">  Enter Book Id:</lable>
         <input type="text" value="${MyData1.Book_id}" id="b1id"><br><br>

        <lable Class="my2"> Enter Book Name:</lable>
         <input type="text" value="${MyData1.Book_name}" id="b1name"><br><br>

        <lable Class="my2"> Book Author:</lable>
         <input type="text" value="${MyData1.Author_name}" id="b1aut"><br><br>

        <lable Class="my2"> Book Price:</lable>
         <input Type="text" value="${MyData1.Price}" id="b1price"><br><br>

         <button type="button" onclick="EditSave(${MyData1.id})">Update Record</button><br><br>`;
         

        document.getElementById("myfrm").innerHTML=MyFrm;
}
function EditSave(myval)
{
	let bid=document.getElementById("b1id").value;
	let bname=document.getElementById("b1name").value;
	let baut=document.getElementById("b1aut").value;
	let bprice=document.getElementById("b1price").value;

	let url=`http://localhost:3000/books/${myval}`;

	fetch(url,{
		method: 'PATCH',
		body: JSON.stringify({
                Book_Id: bid,
                Book_name: bname,
                Author_name: baut,
                Price: bprice
		}),
		headers: {

			'Content-type': 'application/json; charset=UTF-8',

	              },

	})
	.then((response)=>response.json())
	.then((json)=>{
		alert("Data Succesfully Updated!")

		DataDisplay();
	});
}