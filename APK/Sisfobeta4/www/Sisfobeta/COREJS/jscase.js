function pooin(auth) {
    alert(auth.message)
    if (auth.message=='Success') {
    sessionStorage.setItem("ActiveSession", 1);
    sessionStorage.setItem("nrp", auth.data.nrp);
    sessionStorage.setItem("nama", auth.data.name);
    sessionStorage.setItem("role", auth.data.role);
    if (auth.data.thumb!=null) {
        sessionStorage.setItem("thump", auth.data.thumb);        
    }else{
        sessionStorage.setItem("thump",'https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png');
    }
    sessionStorage.setItem("nrp_new", auth.data.nrp_new);
    if(sessionStorage.getItem("role")>=2){
        window.location.replace("../Sisfobeta/mobile/eBALTAB/user-eBaltab.html");
    }else{
        window.location.replace("../Sisfobeta/mobile/eBALTAB/user-eBaltab.html");
        }
    }
}

function sesce() {
        const bin=sessionStorage.getItem("ActiveSession")
        if (bin!=1) {
            window.location.replace("../../login.html");
        }
}
function logsesce() {
        const bin=sessionStorage.getItem("ActiveSession")
        if (bin==1) {
            console.log('sama')
             window.location.replace("../Sisfobeta/mobile/eBALTAB/user-eBaltab.html");
        }else{
            console.log('beda')
        }
}

function login() {
    const NRP=document.getElementById('NRP').value
    const PW=document.getElementById('PW').value
    let formData = new FormData();
    // formData.append('nrp', NRP);
    // formData.append('password', PW);
    fetch('https://asiabytes.tech/api/login', {
    method: 'POST',
    headers: {
    'specToken': 'eyJpdiI6IktxSmlSV1k1WW1ZWTJKaGdXK2FnM2c9PSIsInZhbHVlIjoiYVgwbndSdDN4bGhFdmkrWGIzY3VCZk95UjFiT2pjYWRWd0RaSEdXaTl2ST0iLCJtYWMiOiIxN2VmMDZhMWRkMTZkNmFkNTBjM2U0ZDhjNmJlZmZhMmI2ODc2ZTdlY2ZlZTcwNzMyNjIxZjY4OTExODZiYmE2IiwidGFnIjoiIn0=',
    },
    body: JSON.stringify({
        'nrp':NRP,
        'password':PW
    }),
    })
    .then(response => response.json())
    .then(data => {
        this.pooin(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}

function datapokok() {
    const nrp=sessionStorage.getItem("nrp")
    // console.log('suga');
    // console.log(document.getElementsByClassName('pp_js'));
    document.getElementsByClassName('pp_js')[1].src=sessionStorage.getItem("thump")
    document.getElementsByClassName('pp_js')[0].src=sessionStorage.getItem("thump")
    fetch('https://asiabytes.tech/baltab/api/AjaxUser/'+nrp, {
          method: 'GET', // or 'PUT'
          headers: {
          'specToken': 'eyJpdiI6IktxSmlSV1k1WW1ZWTJKaGdXK2FnM2c9PSIsInZhbHVlIjoiYVgwbndSdDN4bGhFdmkrWGIzY3VCZk95UjFiT2pjYWRWd0RaSEdXaTl2ST0iLCJtYWMiOiIxN2VmMDZhMWRkMTZkNmFkNTBjM2U0ZDhjNmJlZmZhMmI2ODc2ZTdlY2ZlZTcwNzMyNjIxZjY4OTExODZiYmE2IiwidGFnIjoiIn0=',
          },
          })
          .then(response => response.text())
          .then(data => {
            document.getElementsByClassName('mainContent')[0].innerHTML=data
          })
          .catch((error) => {
            console.error('Error:', error);
          });
}

function editdatapokok() {
    // const nrp=sessionStorage.getItem("nrp")
    document.getElementsByClassName('pp_js')[1].src=sessionStorage.getItem("thump")
    document.getElementsByClassName('pp_js')[0].src=sessionStorage.getItem("thump")
    fetch('https://asiabytes.tech/baltab/api/AjaxEdit/527216', {
          method: 'GET', // or 'PUT'
          headers: {
          'specToken': 'eyJpdiI6IktxSmlSV1k1WW1ZWTJKaGdXK2FnM2c9PSIsInZhbHVlIjoiYVgwbndSdDN4bGhFdmkrWGIzY3VCZk95UjFiT2pjYWRWd0RaSEdXaTl2ST0iLCJtYWMiOiIxN2VmMDZhMWRkMTZkNmFkNTBjM2U0ZDhjNmJlZmZhMmI2ODc2ZTdlY2ZlZTcwNzMyNjIxZjY4OTExODZiYmE2IiwidGFnIjoiIn0=',
          },
          })
          .then(response => response.text())
          .then(data => {
            // console.log('as');
            // console.log(data);
            document.getElementsByClassName('wrapperContent')[0].innerHTML=data
          })
          .catch((error) => {
            console.error('Error:', error);
          });
}

function updatedatapokok0() {
    
}
// notifpoin