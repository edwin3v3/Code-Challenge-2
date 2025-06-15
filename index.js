/** Breaking Solution into Small problems
 * Define an Array to hold guests
 * Use Query Selector to select various elements on document
 * 
 * Start with a very simple array
 * onclick event of button
 * pick value from input field
 *  use push to add guest name to array
 * display array on output div
 * 
 *
 * 
 * */ 
// define simple array
let arrayGuestList = [];
let allDeleteButtons = [];

// query select input field - define variable
let guestNameInput = document.querySelector('#guestName');
console.log(guestNameInput);
//query select add button - define variable
let addGuestBtn = document.querySelector('#addGuest');
console.log(addGuestBtn);



// declare Click event listener
addGuestBtn.addEventListener('click', ()=>{
    
    
    console.log(guestNameInput.value);

     arrayGuestList.push(guestNameInput.value);
     console.log(arrayGuestList);//
     guestNameInput.value =''; // reset value of name input field

     printGuestList(arrayGuestList);


    //validateName(guestNameInput.value);

    // validation: confirm if guestNameInput has value and is string    
    
});

function printGuestList(newArray){
    // select output section
    newArray = arrayGuestList;
    let output = document.querySelector('#output-section');
    output.innerHTML = '';
    for(let i=0; i<newArray.length; i++){
        //output.appendChild(newArray.i);
        let nameDiv = document.createElement('div');
        nameDiv.innerText = newArray[i];
        output.append(nameDiv);

        // append delete button for each div
       // appendDeleteBtn(i);
        nameDiv.append(appendDeleteBtn(i));
    }

    allDeleteButtons = document.querySelectorAll('button.btn-del');
    console.log('Here we are '+allDeleteButtons);
}

// Create and append delete button next to each guest name
// Furthermore add id and style attributes to the each delete button

function appendDeleteBtn(key){
    let index = key;
    let deleteButton = document.createElement('Button');
    deleteButton.setAttribute('name',"delete");
    deleteButton.setAttribute('id','del-btn-'+index);
    deleteButton.setAttribute('onclick','deleteGuest('+index+')');
    deleteButton.textContent = 'Delete Guest';
    deleteButton.classList.add('btn-del','btn','btn-orange','mx-4','my-1');
    return deleteButton;
}

// Query select all Delete Buttons

//

function deleteGuest(i){
    let guestid = i;
    if (guestid > -1) { // only splice array when item is found
        arrayGuestList.splice(guestid, 1); // 2nd parameter means remove one item only
    }
    // do fresh print of guest list
    printGuestList(arrayGuestList);

}




// function validateName(nameIput){
//     nameIput = guestNameInput.value
//     if( /*(guestNameInput.value!==null) && */ (typeof nameIput !== 'String')){
//         // push string value into arrayGuestList
//         let errorMessage = "Enter Valid Name";
//         guestNameInput.classList.add('bgcolor-red-500');
//         console.log(errorMessage);

//     }
//     else{
//         arrayGuestList.push(guestNameInput.value);
//         console.log(arrayGuestList);//

//     }

// }