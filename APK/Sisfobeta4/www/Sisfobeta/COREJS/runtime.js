setInterval(
function notify() {
    const nrp=sessionStorage.getItem("nrp")
    fetch('https://asiabytes.tech/baltab/api/AjaxNotif/1234567', {
          method: 'GET', // or 'PUT'
          headers: {
          'specToken': 'eyJpdiI6IktxSmlSV1k1WW1ZWTJKaGdXK2FnM2c9PSIsInZhbHVlIjoiYVgwbndSdDN4bGhFdmkrWGIzY3VCZk95UjFiT2pjYWRWd0RaSEdXaTl2ST0iLCJtYWMiOiIxN2VmMDZhMWRkMTZkNmFkNTBjM2U0ZDhjNmJlZmZhMmI2ODc2ZTdlY2ZlZTcwNzMyNjIxZjY4OTExODZiYmE2IiwidGFnIjoiIn0=',
          },
          })
          .then(response => response.text())
          .then(data => {
            console.log('jalan')
            document.getElementById('notifpoin').innerHTML=data
          })
          .catch((error) => {
            console.error('Error:', error);
          });
}, 3000);