
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

  
});