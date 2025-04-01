async function fetchTestAPI(){
    const response = await fetch(
        'https://humeniuc-azure-test-avczbdbsfvf9hyef.germanywestcentral-01.azurewebsites.net/'
        // 'http://localhost:18080/'
    ).then(response => response.text())
    .then(data => document.getElementById('toInsert').innerHTML = data)
    .catch(error => console.error(error));
}
fetchTestAPI()