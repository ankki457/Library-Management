async function DataDisplay()
{
  let myTable=`<table border="1" align='center' width='500' bgcolor='#e6ffff'>
               <tr>
               <td> Book ID </td>;
               <td> Book Name</td>;
               <td> Author Name</td>;
               <td> Price </td>;
               </tr>`;

  let url="http://localhost:3000/books";
   let FileOb=await fetch(url);
  let Mydata=await FileOb.json();
   Mydata.map((key)=>{
      myTable+=`<tr>
                <td> ${key.Book_Id}</td>
                <td> ${key.Book_name}</td>
                <td> ${key.Author_name}</td>
                <td> ${key.Price}</td>
                </tr>`;
   });
   myTable+=`</Table>`;
   document.getElementById('demo').innerHTML=myTable;
   }
   DataDisplay();             
  