$(document).ready(function () {
    $('#search-history-btn').on('click', function (e) {

        e.preventDefault();

        $.ajax({
            url: '/products/view_search_history',
            type: 'GET',
            success: function (resp) {
                var newHtml = resp.data.map(d => {
                    return `<div class="well products">
                            <h4>${d.name}</h4>
                    </div>`
                });
                // $('.products').html(newHtml.join(''));
                //$('#search-box').val('');

            },
            error: function (xhr, status, error) {
                alert('You are not logged in. Please log in to see your search history!')

                console.error(error)
            }
        });


    });

});