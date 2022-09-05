
    //method to get all data, Function ini berfungsi untuk mengambil data dari localStorage dan menampilkannya ke tabel.
    function allData()
    {
    table.innerHTML = ``;
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    kamusKu = JSON.parse(localStorage.getItem('dictionary')) ?? []
    //looping data and show data in table
    kamusKu.forEach(function (value, i){
    var table = document.getElementById('table')
    table.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${value.word}</td>
            <td>${value.mean}</td>
            <td>${value.sentence}</td>
            <td>
                <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                    <i class="fa fa-edit"></i>
                </button>
            </td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        </tr>`
        })
    }

    //method to save data into localstorage, function ini berfungsi untuk menyimpan data baru atau mengupdate data yang sudah ada.
    function save()
    {
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    kamusKu = JSON.parse(localStorage.getItem('dictionary')) ?? []

    //get last array to get last id
    //and store it into variable id
    var id
    kamusKu.length != 0 ? kamusKu.findLast((item) => id = item.id) : id = 0
    if(document.getElementById('id').value){

        //edit kamusKu array based on id
        kamusKu.forEach(value => {
            if(document.getElementById('id').value == value.id){
                value.word      = document.getElementById('word').value
                value.mean  = document.getElementById('mean').value
                value.sentence  = document.getElementById('sentence').value
            }
        });

        //remove hidden input
        document.getElementById('id').value = ''
    }
    else{
        //save
        //get data from form
        var item = {
            id        : id + 1, 
            word      : document.getElementById('word').value,
            mean  : document.getElementById('mean').value,
            sentence  : document.getElementById('sentence').value
        }
        //add item data to array kamusKu
        kamusKu.push(item)
    }
    // save array into localstorage
    localStorage.setItem('dictionary', JSON.stringify(kamusKu))
    //update table list
    allData()
    //remove form data
    document.getElementById('form').reset();
    location.href = 'dictionary.html';
    }

    //method to get detail personal data based on id, function ini berfungsi untuk mengambil data dari localStorage sesuai id yang dipilih
    function find(id){
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    kamusKu = JSON.parse(localStorage.getItem('dictionary')) ?? []
    kamusKu.forEach(function (value){
        if(value.id == id)
        {
           document.getElementById('id').value = value.id
           document.getElementById('word').value = value.word
           document.getElementById('mean').value = value.mean
           document.getElementById('sentence').value = value.sentence
        }
        })
    }

    // function ini berfungsi untuk menghapus data array lalu menyimpannya kembali ke localStorage
    function removeData(id){
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    kamusKu = JSON.parse(localStorage.getItem('dictionary')) ?? []
    if(confirm('are u sure'))
    {
        kamusKu = kamusKu.filter(function(value){ 
        return value.id != id; 
        });
    }
    // save array into localstorage
    localStorage.setItem('dictionary', JSON.stringify(kamusKu))
    //get data again
    allData()
    location.href = 'dictionary.html';
    }

    allData();
    function clearData(){
        document.getElementById('form').reset();
        document.getElementById('id').value = "";
    }