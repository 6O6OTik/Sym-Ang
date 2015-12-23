var id = null;
var name = null;
var age = null;

$(function(){
    $('#saveChanges').on('click', updateUser);

    $.ajax({
        method: "GET",
        url: "/web/app_dev.php/show"
    })
        .done(function( data,response ) {
            for (var i = 0; i< data.length;i++)  {
                $( ".content" ).append(

                    "<tr id="+data[i]['id']+">" +
                    "<td id='userID' class='col-1'>" + data[i]['id'] + "</td>"+
                    "<td id='userName' class='col-1'>" + data[i]['name'] + "</td>" +
                    "<td id='userAge' class='col-1'>" + data[i]['age'] + "</td>" +
                    "<td >" + "<button onClick='openPopup("+ data[i]['id']+",\""+ data[i]['name']+"\",\""+ data[i]['age']+"\")'  data-toggle='modal' data-target='#editModal' class='editUser btn btn-success col-1 fa fa-users  btn-block btn-md' type='button' value='"+ data[i]['id']+"' name='edit'> Edit </button>" + "</td>" +
                    "<td >" + "<button onClick='deleteRow("+ data[i]['id']+")' class='deleteUser btn btn-danger col-1 fa fa-trash-o btn-block btn-md' type='button' value='"+ data[i]['id']+"' name='delete'> Delete</button>" + "</td>" +
                    "</tr>" );
            }

        });
});

function addRow(id, name, age){
    $.ajax({
        url: '/web/app_dev.php/add',
        type: 'POST',
        data: {'userName': name, 'userAge': age},
        success: function(result) {
            var lastRecordId = JSON.parse(result).userId;
            $( ".content" ).append(
                "<tr id="+ lastRecordId +">" +
                "<td id='userID' class='col-1'>" + lastRecordId + "</td>"+
                "<td id='userName' class='col-1'>" + name + "</td>" +
                "<td id='userAge' class='col-1'>" +age + "</td>" +
                "<td >" + "<button onClick='openPopup("+ lastRecordId+",\""+ name+"\",\""+ age+"\")'  data-toggle='modal' data-target='#editModal' class='editUser btn btn-success col-1 fa fa-users  btn-block btn-md' type='button' value='"+ lastRecordId+"' name='edit'> Edit </button>" + "</td>" +
                "<td >" + "<button onClick='deleteRow("+ lastRecordId+")' class='deleteUser btn btn-danger col-1 fa fa-trash-o btn-block btn-md' type='button' value='"+ lastRecordId+"' name='delete'> Delete</button>" + "</td>" +
                "</tr>" );
            $('.modal, .modal-backdrop').hide();
            $('.modal-backdrop.fade.in').remove();
        }
    });
    return false;
}

 function deleteRow(id){

     $.ajax({
         url: '/web/app_dev.php/delete',
         type: 'DELETE',
         data: {'userId': id},
         success: function(result) {
             if (result.result === true) {
                console.log('delete');

                $("#"+id).remove();
             }
         }
     });
 }



 function openPopup(idd,namee,agge) {
     id  = idd;
     name = namee;
     age = agge;


     $("#editName").val(name);
     $("#editAge").val(age);

     return false;
 }

function updateUser(event){

    event.stopPropagation();
    name = $("#editName").val();
    age = $("#editAge").val();
    console.log(id);
    console.log(name);
    console.log(age);

    $.ajax({
        url: '/web/app_dev.php/edit',
        type: 'PUT',
        data: {
            'userId': id,
            'userName': name,
            'userAge': age
        },

        success: function(result) {

            $("#" + id+" #userAge").text(age);
            $("#" + id+" #userName").text(name);

            $('.modal, .modal-backdrop').hide();
            $('.modal-backdrop.fade.in').remove();

            return false;
        }

    });
}
