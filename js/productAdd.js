async function productAdd() {
    const form = document.getElementById("form-add");
    const file = document.getElementById("file").files[0];

    let data = new FormData(form);
    data.append("file", file)
  
    const response = await fetch("./php/product-add.php", {
      method: "POST",
      body: data
    });
  
    const res = await response.json();
  
    alert(res);
  }

  function fileChange(event) {
    const sendFile = event.target;
    const file = sendFile.files[0];
  
    if (file) {
        const newName = imagePath(file) + getFileExtension(file.name);
        const newFile = new File([file], newName, { type: file.type });
  
        console.log("Nome antigo do arquivo: " + file.name);
        console.log("Novo nome do arquivo: " + newFile.name);
    }
  }