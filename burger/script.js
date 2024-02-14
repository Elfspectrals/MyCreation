let btn = document.getElementById("burgerButton");
let burgerNewAsset = document.querySelector(".burgerNewAsset");

let isBurgerOpen = false;

btn.addEventListener("click", function() {
    if (isBurgerOpen) {
        burgerNewAsset.classList.remove("burgerNewAssetVisible");
        isBurgerOpen = false;
        return;
    }else {
        burgerNewAsset.classList.add("burgerNewAssetVisible");
        isBurgerOpen = true;
        return;
    }
})