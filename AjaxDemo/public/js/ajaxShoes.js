
$(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
  });
  var table = $('.data-table').DataTable({
      serverSide: true,
      ajax: "{{ route('climbingShoes.index') }}",
      columns: [
          {data: 'DT_RowIndex', name: 'DT_RowIndex'},
          {data: 'name', name: 'name'},
          {data: 'price', name: 'price'},
          {data: 'quality', name: 'quality'},
          {data: 'action', name: 'action', orderable: false, searchable: false},
      ]
  });
  $('#createNewClimbingShoes').click(function () {
      $('#saveBtn').val("create-climbingShoes");
      $('#climbingShoes_id').val('');
      $('#climbingShoesForm').trigger("reset");
      $('#modelHeading').html("Create New Climbing shoes.");
      $('#ajaxModel').modal('show');
  });
  
  $('#saveBtn').click(function (e) {
      e.preventDefault();
      $(this).html('Save');
      $.ajax({
        data: $('#climbingShoesForm').serialize(),
        url: "{{ route('climbingShoes.store') }}",
        type: "POST",
        dataType: 'json',
        success: function (data) {
            $('#climbingShoesForm').trigger("reset");
            $('#ajaxModel').modal('hide');
            table.draw();
        },
        error: function (data) {
            console.log('Error:', data);
            $('#saveBtn').html('Save Changes');
        }
    });
  });
  
});