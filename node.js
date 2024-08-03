
var num = 0;
 listOfobj = [];
let btnsubmit = document.getElementById("formbtn");
function dltrow(e)
    {
        let numberId = 0;
        let listchildNodes = e.parentElement.childNodes;
        let lsinodes = listchildNodes[0].childNodes;
        for(var nodes of lsinodes)
        {
            if(nodes.className == "id")
            {
                numberId = nodes.innerText;
                break;
            }
        }let indexToDelete = listOfobj.findIndex(obj => obj.num == numberId);
    
       
        if (indexToDelete > -1) {
            listOfobj.splice(indexToDelete, 1);
        }
        let totalval = "";
        for(var nodes = 0;nodes<listOfobj.length;nodes++)
        {
            totalval += "<div class='d-flex justify-content-start mt-2'><div class='col-6 border border-white d-flex justify-content-between p-2 rounded'><span class='id'>" + listOfobj[nodes].num + "</span><span class='name'>   Name: "+listOfobj[nodes].name+" </span><span class='profession'>Profession: "+listOfobj[nodes].profession+" </span><span>Age: "+listOfobj[nodes].age+" </span></div><button class='btn btn-Light rounded ml-4 ' id='deleteBtn' onclick='dltrow(this)'>Delete User</button></div>";
        }
        
        let listob = document.getElementById("listObj");
        listob.innerHTML = totalval;
        console.log(listOfobj);
        if(listOfobj.length == 0)
            {
                document.getElementById("empnum1").value = "You have 0 Employees.";
            }
    }
btnsubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let profession = document.getElementById("profession").value;
    if (name == "" || age == "" || profession == "") {
        let error = document.getElementById("error");
        error.innerText = "Error: Please Make sure All the fields are filled before adding in an employee !";
        error.style.color = "red";
    } else {
        error.innerText = "Success: Employee Added!";
        error.style.color = 'green';
        num++;
        let obj = { "num":num, "name":name, "age":age, "profession":profession };
        listOfobj.push(obj);
        let listob = document.getElementById("listObj");
        let totalval = "";
        // console.log(listOfobj);
        for (var curr  of listOfobj) {
            // console.log(curr.name);
            totalval += "<div class='d-flex justify-content-start mt-2'><div class='col-6 border border-white d-flex justify-content-between p-2 rounded'><span class='id'>" + curr.num + "</span><span class='name'>   Name: "+curr.name+" </span><span class='profession'>Profession: "+curr.profession+" </span><span>Age: "+curr.age+" </span></div><button class='btn btn-Light rounded ml-4 ' id='deleteBtn' onclick='dltrow(this)'>Delete User</button></div>";
        }
        listob.innerHTML = totalval;
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("profession").value = "";
         document.getElementById("empnum1").value="";
    }
    
    
});
