$('document').ready(function() {
  // $('.update').on('click', function() {
  //   // Maybe put these as integers
  //   let tripId = $(event.target).attr('data-id');
  //   let userId = $('#userId')[0].innerText;
  //   console.log(tripId, userId);
  //   $.ajax({
  //     method: "POST",
  //     url: '/trips',
  //     data: {
  //       trip_id: tripId,
  //       user_id: userId
  //     },
  //     success: function(stuff) {
  //       console.log(stuff);
  //     },
  //     error: function (error) {
  //       console.log(error)
  //     }
  //   });
  // });

  $(".updateButton").on("click", function(event) {
    event.preventDefault();
    // let i = $(this)[0];
    // console.log(i);
    // let array = [];
    // for (let j = 0; j < i.length - 1; j++) {
    //   array.push(i[j].value);
    // }
    // let data = {
    //   id: array[0],
    //   name: array[1],
    //   photo: array[2],
    //   description: array[3],
    //   start_date: array[4],
    //   end_date: array[5],
    //   cost: array[6],
    //   numberOfPeople: array[7]
    // }
    let data = $(event.target).closest('form').serialize();
    $.ajax({
      method: "PUT",
      url: "/admin",
      data: data,
      success: function(ryan) {
          console.log('ryan');
      },
      error: function(error) {
        console.log(error);
      }
    });
  })

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });

});
