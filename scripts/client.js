console.log('script sourced');
//initialize 
$(readyNow); 

const monthlyBudget = 20000;


let employees = [];
/**
 * This function is called after the HTML has loaded.
 */
function readyNow() {
    console.log('ready now');
    //when submit button is clicked it runs addEmployee function
    $( '#submitEmployeeButton' ).on( 'click', addEmployee );
    $( '#delete-employee' ).on( 'click', deleteEmployee );
}

//function that adds employye after fields are filled
function addEmployee(){
    console.log('in addEmployee');

    //varible values for for inputs
    let firstName = $( '#first-name-field' ).val();
    let lastName =  $( '#last-name-field' ).val();
    let numberId = $( '#id-number-field' ).val();
    let title = $( '#job-title-field' ).val();
    let salary = $( '#annual-salary-field' ).val();
    //let deleteButton = $( 'button id="delete-employee">Delete</button>').val().


    
//appending table upon fields being filled and submitted
    $('#employee-info').append(`
    <tr> 
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${numberId}</td>
        <td>${title}</td>
        <td>${salary}</td>
        <td><button id="delete-employee">Delete</button></td>
       
    `)
    //push info into employeees array
    employees.push( addEmployee );
}

function deleteEmployee(){
    console.log('in deleteEmployee');
    // when delete button is clicked, the first parent (the button itself) is removed then it's parent is removed (td+tr)
    $(this).parent().parent().remove();
}
let monthlyTotal = 0;

//function displayEmployee(){
    //console.log('in displayEmployee');

    
    //el.append(newEmployee);
