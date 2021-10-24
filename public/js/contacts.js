let nameInp = document.getElementById("nameinput");
let phoneInp = document.getElementById("phoneinput");
let emailInp = document.getElementById("emailinput");
let saveBtn = document.getElementById("savebtn");
let clearBtn = document.getElementById("clearbtn");
let tbody = document.getElementById("tablebody");
let contactList = [];
let count = 0;

function edit(index){
    let selectedContact = contactList[index];
    nameInp.value = selectedContact.name;
    phoneInp.value = selectedContact.phone;
    emailInp.value = selectedContact.email; 
    deleteThis(index);
}

function isNumber(n){
    try{ 
        return Number(n)
    
    }catch(err){
        console.log(err);
        return false
    }
}

function cleanInputFields(){
    nameInp.value = phoneInp.value = emailInp.value = '';
}

function deleteThis(index){
    contactList.splice(index, 1);
    populateContacts();
}

function populateContacts(){
    tbody.innerHTML = "";
    contactList.forEach((element, index) => {
        tbody.innerHTML += ` <tr>
                            <td>${index}</td>
                            <td>${element.name}</td>
                            <td>${element.phone}</td>
                            <td>${element.email}</td>
                            <td><button type="button" id="${index}" onclick = "deleteThis(${index})" class="btn btn-dark">Delete</button>
                            <button type="button" id="_${index}" onclick = "edit(${index})" class="btn btn-dark">Edit</button></td>
                        </tr>`
    })
}

saveBtn.addEventListener("click", ()=>{
    let contactObj = {}

    if(nameInp.value !="" && phoneInp.value != "" && emailInp.value != "" && isNumber(phoneInp.value)){
        contactObj['name'] = nameInp.value;
        contactObj['phone'] = phoneInp.value;
        contactObj['email'] = emailInp.value;
   
        contactList.push(contactObj);
        populateContacts()
    
    }else{
        console.log("Enter something")
    }
})
