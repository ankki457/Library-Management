document.getElementById('mybtn').addEventListener("click", MyData);
async function MyData() {
  let myTable = `<Table border="1" align="center">
               <tr>
               <td> Book ID </td>;
               <td> Book Name</td>;
               <td> Author </td>;
               <td> Price</td>;
               </tr>`;
  let cnt = 0;
  let bid = document.getElementById("bookid").value;
  let url = `http://localhost:3000/books?Book_Id=${bid}`;
  let FilOb = await fetch(url);
  let MyData = await FilOb.json();
  MyData.map((key) => {
    myTable += `<tr>
                <td> ${key.Book_Id}</td>
                <td> ${key.Book_name}</td>
                <td> ${key.Author_name}</td>
                <td> ${key.Price}</td>
                </tr>`;
    cnt++;
  });
  myTable += `</Table>`;
  if (cnt >= 1) {
    document.getElementById('demo').innerHTML = myTable;
  }
  else {
    document.getElementById('demo').innerHTML = "<font color='red'>No Record found</font>";
  }
  MyData();
}