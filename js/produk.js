
const searchInput =
document.getElementById("productSearch");

searchInput.addEventListener("keyup", () => {

    const keyword =
    searchInput.value.toLowerCase();

    const items =
    document.querySelectorAll(".product-item");

    items.forEach(item => {

        const text =
        item.textContent.toLowerCase();

        item.style.display =
        text.includes(keyword)
        ? "flex"
        : "none";

    });

});

// Ambil semua produk
const products =
document.querySelectorAll(".product-item");

// Konfigurasi
const productsPerPage = 10;

let currentPage = 1;

const totalProducts = products.length;

const totalPages =
Math.ceil(
    totalProducts / productsPerPage
);

// Ambil elemen HTML
const counter =
document.getElementById("productCounter");

const pageNumbers =
document.getElementById("pageNumbers");


// Tampilkan produk sesuai halaman
function renderProducts(){

    products.forEach(product => {
        product.style.display = "none";
    });

    const start =
    (currentPage - 1) * productsPerPage;

    const end =
    start + productsPerPage;

    products.forEach((product,index) => {

        if(
            index >= start &&
            index < end
        ){
            product.style.display = "flex";
        }

    });

    counter.textContent =
    `Menampilkan ${
        start + 1
    }–${
        Math.min(end,totalProducts)
    } dari ${
        totalProducts
    } produk`;

}


// Render nomor halaman
function renderPagination(){

    pageNumbers.innerHTML = "";

    for(
        let i = 1;
        i <= totalPages;
        i++
    ){

        const btn =
        document.createElement("button");

        btn.classList.add("page-btn");

        btn.textContent = i;

        if(i === currentPage){
            btn.classList.add("active");
        }

        btn.addEventListener(
            "click",
            () => {

                currentPage = i;

                renderProducts();

                renderPagination();

            }
        );

        pageNumbers.appendChild(btn);

    }

}


// Tombol Prev
document
.getElementById("prevPage")
.addEventListener("click", () => {

    if(currentPage > 1){

        currentPage--;

        renderProducts();

        renderPagination();

    }

});


// Tombol Next
document
.getElementById("nextPage")
.addEventListener("click", () => {

    if(currentPage < totalPages){

        currentPage++;

        renderProducts();

        renderPagination();

    }

});


// Jalankan pertama kali
renderProducts();
renderPagination();


//category filter
const categoryBtns =
document.querySelectorAll(".category-btn");

categoryBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        categoryBtns.forEach(b => {
            b.classList.remove("active");
        });

        btn.classList.add("active");

        const category =
        btn.dataset.category;

        products.forEach(product => {

            const productCategory =
            product.dataset.category;

            if(
                category === "all" ||
                productCategory === category
            ){

                product.style.display =
                "flex";

            }else{

                product.style.display =
                "none";

            }

        });

    });

});

//jumlah produk per kategori
const categoryButtons =
document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    const category =
    button.dataset.category;

    let count = 0;

    products.forEach(product => {

        const productCategories =
        product.dataset.category || "";

        if(category === "all"){

            count++;

        }else if(
            productCategories.includes(category)
        ){

            count++;

        }

    });

    button.querySelector("span")
          .textContent = `(${count})`;

});

//dropdown
const moreBtn =
document.getElementById("moreCategoriesBtn");

const moreCategories =
document.getElementById("moreCategories");

if(moreBtn){

    moreBtn.addEventListener("click", () => {

        moreCategories.classList.toggle("show");

        const icon =
        moreBtn.querySelector("i");

        if(
            moreCategories.classList.contains("show")
        ){

            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");

        }else{

            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");

        }

    });

}