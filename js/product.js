    var product = [{
            id: "KS01",
            name: "KS 5S",
            img: "1.jpg",
            price: 900000,
            detail: '<a  href=" " > Detail </a>',
        },
        {
            id: "KS02",
            name: "KHÁCH SẠN VIP ",
            img: "2.jpg",
            price: 400000,
        },
        {
            id: "KS03",
            name: "KHÁCH SẠN VIEW BIEN",
            img: "3.jpg",
            price: 350000,
        },
        {
            id: "KS04",
            name: "KHÁCH SẠN 4S",
            img: "4.jpg",
            price: 564000,
        },
        {
            id: "KS05",
            name: "KHÁCH SẠN B1",
            img: "51.jpg",
            price: 654000,
        },
        {
            id: "KS06",
            name: "KHÁCH SẠN PHÒNG ĐÔI",
            img: "6.jpg",
            price: 123000,
        },
        {
            id: "KS07",
            name: "KHÁCH SẠN 01",
            img: "7.jpg",
            price: 345000,
        },
        {
            id: "KS08",
            name: "KS VIP TẦNG 10",
            img: "81.jpg",
            price: 258000,
        },
    ];
    // đẩy mảng product vào local
    function Save() {
        localStorage.setItem('listProduct', JSON.stringify(product))
    }
    //lấy sản phẩm 
    function load() {
        product = JSON.parse(localStorage.getItem('listProduct'));
    }
    //xuất sản phẩm ra html
    if (localStorage.getItem("listProduct") != null) {
        load();
    }
    Save();
    var listLocal = function() {
        var listproduct = "";
        for (var i in product) {
            var data = JSON.parse(JSON.stringify(product[i]))
            var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';

            listproduct += '<div class="card product p-2" styte="width:auto">';
            listproduct += '<img class="card-img-top" src="img/' + data.img + '" alt="...">';
            listproduct += '<div class="card-title product-title text-center h5" >' + data.name + '</div>';
            listproduct += '<div class="price text-center h6">' + data.price + '₫</div>';
            listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" onclick="tks()">';
            // listproduct +=  '<a class=" add-to-cart btn" data-name="'+product[i].name+'" data-price="'+product[i].price+'" onclick="tks()">';
            listproduct += '<a>';
            listproduct += '<i class="fas fa-cart-plus"></i>';

            listproduct += '</a>';

            listproduct += '</span>';
            listproduct += '<button onclick="Chitiet">  <a href="ks5s.html"> Chi Tiet </a> </button>';
            listproduct += '</div>';

            listproduct += '</div>';

            document.getElementById("banchay").innerHTML += listproduct;
        }
        Save();

    }

    listLocal();