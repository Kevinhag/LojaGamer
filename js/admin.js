window.onload = productList();

async function submitForm(form, url) {
  form.addEventListener("submit", async (send) => {
    send.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const result = await response.text();
    alert(result);

    if (response.status === 200) {
      productList();
    }
  });
}

async function productList() {
  var promise = await fetch("./php/admin.php", {
    method: "GET",
  });

  function listSelection() {
    let classes = [
      "fp-id",
      "fp-name",
      "fp-brand",
      "fp-desc",
      "fp-mnfac",
      "fp-model",
      "fp-pline",
      "fp-price",
      "fp-qtt",
      "fp-rating",
      "fp-new",
      "fp-onsale",
      "fp-type",
    ];

    const e = document.getElementById("productDD");
    var selIndex = data[e.selectedIndex - 1];

    if (e.selectedIndex != 0) {
      document.getElementById("fp-pDD").value = parseInt(e.selectedIndex, 10);
      document.getElementById("fp-id").value = selIndex.id;
      document.getElementById("fp-name").value = selIndex.name;
      document.getElementById("fp-brand").value = selIndex.brand;
      document.getElementById("fp-desc").value = selIndex.description;
      document.getElementById("fp-mnfac").value = selIndex.manufacturer;
      document.getElementById("fp-model").value = selIndex.model;
      document.getElementById("fp-pline").value = selIndex.product_line;
      document.getElementById("fp-price").value = selIndex.price;
      document.getElementById("fp-qtt").value = selIndex.stock;
      document.getElementById("fp-rating").value = selIndex.rating;
      document.getElementById("fp-new").value = selIndex.new;
      document.getElementById("fp-onsale").value = selIndex.on_sale;
      document.getElementById("fp-type").value = selIndex.part_type;

      let spImage = document.getElementById("showProductImage");

      while (spImage.firstChild) {
        spImage.removeChild(spImage.firstChild);
      }

      let pImage = document.createElement("img");
      pImage.src = imagePath(selIndex);
      pImage.className = "admin-product-img";
      spImage.appendChild(pImage);
    } else {
      for (let i = 0; i < classes.length; i++) {
        document.getElementById(classes[i]).value = "";
        document.getElementById("fp-pDD").value = "null";
      }

      let spImage = document.getElementById("showProductImage");
      while (spImage.firstChild) {
        // remove a primeira imagem quando troca para não acumular várias
        spImage.removeChild(spImage.firstChild);
      }
    }

    let removeBtn = document.getElementById("removeButton");

    if (removeBtn) {
      // checa se o botao de remove existe para não dar erro na pagina
      removeBtn.addEventListener("click", async function () {
        if (selIndex !== "null") {
          let removeData = new FormData();
          removeData.append("id", selIndex.id);

          const deleteRes = await fetch("./php/product-remove.php", {
            method: "POST",
            body: removeData,
          });

          if (deleteRes.status === 200) {
            const response = await deleteRes.text();
            alert(response);
          }
        }
      });
    }
  }

  var data = await promise.json();
  const container = document.getElementById("productDD");
  container.innerHTML = "";

  let defaultOption = document.createElement("option");
  defaultOption.value = "null";
  defaultOption.text = "-- Select Product --";
  container.appendChild(defaultOption);

  data.forEach(function (product) {
    let option = document.createElement("option");
    option.innerHTML = product.part_type + " | " + product.name;
    option.value = product.id;
    container.appendChild(option);
  });

  document.getElementById("productDD").addEventListener("change", listSelection);
}

document.querySelectorAll(".admin-form").forEach((form) => {
  submitForm(form, "./php/upload-image.php");
});

document.querySelectorAll(".admin-form").forEach((form) => {
  submitForm(form, "./php/product-add.php");
});
