const sorter_function = (id, type) => {
    console.log(type)
    $.ajax({
        url: '/products' + type + '?product_sorter=' + id,
        type: 'GET',
        success: function (resp) {

            var newHtml = resp.data.map(d => {
                if (d.type_id == 1 && (type == '/games/' || type == '')) {
                    return `<div class="well product">
                                <div class="card">
                                <div class="card-body">
                            <a href="/products/games/${d.id}">
                                <img class="product-img" src="${d.firstImage}"/>
                                <h6>${d.name}</h6>
                            </a>
                            <h3 class="mb-0 font-weight-semibold">${ d.price }</h3>
                            <button type="button" class="btn bg-cart" onclick="addToCart(${ d.id });"><i
                            class="fa fa-cart-plus mr-2"></i>Add to cart</button>
                            </div></div>
                        </div>`
                }
                else {
                    return `<div class="well product">
                                <div class="card">
                                <div class="card-body">
                            <a href="/products/consoles/${d.id}">
                                <img class="product-img" src="${d.firstImage}"/>
                                <h6>${d.name}</h6>
                            </a>
                            <h3 class="mb-0 font-weight-semibold">${ d.price }</h3>
                            <button type="button" class="btn bg-cart" onclick="addToCart(${ d.id });"><i
                            class="fa fa-cart-plus mr-2"></i>Add to cart</button>
                            </div></div>
                        </div>`
                }
            });
            $('.products').html(newHtml.join(''));

        },
        error: function (xhr, status, error) {
            // TODO: Show toastr
            console.error(error)
        }
    });
};