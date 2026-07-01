const API = "/students";

window.onload = getStudents;

async function getStudents() {

    const res = await fetch(API);

    const data = await res.json();

    const table = document.getElementById("studentTable");

    table.innerHTML = "";

    data.data.forEach(student => {

        table.innerHTML += `

<tr>

<td>${student.name}</td>

<td>${student.age}</td>

<td>${student.email}</td>

<td>${student.course}</td>

<td>${student.marks}</td>

<td>

<button class="edit"
onclick="editStudent('${student._id}',
'${student.name}',
${student.age},
'${student.email}',
'${student.course}',
${student.marks})">

Edit

</button>

<button class="delete"

onclick="deleteStudent('${student._id}')">

Delete

</button>

</td>

</tr>

`;

    });

}

async function saveStudent(){

const id=document.getElementById("studentId").value;

const student={

name:document.getElementById("name").value,

age:Number(document.getElementById("age").value),

email:document.getElementById("email").value,

course:document.getElementById("course").value,

marks:Number(document.getElementById("marks").value)

};

if(id==""){

await fetch(API,{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(student)

});

}

else{

await fetch(API+"/"+id,{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(student)

});

}

clearForm();

getStudents();

}

function editStudent(id,name,age,email,course,marks){

document.getElementById("studentId").value=id;

document.getElementById("name").value=name;

document.getElementById("age").value=age;

document.getElementById("email").value=email;

document.getElementById("course").value=course;

document.getElementById("marks").value=marks;

}

async function deleteStudent(id){

if(confirm("Delete Student?")){

await fetch(API+"/"+id,{

method:"DELETE"

});

getStudents();

}

}

function clearForm(){

document.getElementById("studentId").value="";

document.getElementById("name").value="";

document.getElementById("age").value="";

document.getElementById("email").value="";

document.getElementById("course").value="";

document.getElementById("marks").value="";

}