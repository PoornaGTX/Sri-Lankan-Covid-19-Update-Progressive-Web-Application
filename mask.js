
function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


 function getData(){
             fetch('https://www.hpb.health.gov.lk/api/get-current-statistical')
             .then((apidata)=> {
                    //console.log(apidata);
                    return apidata.json();

              }).then((actualdata) => {

                    const mydata = actualdata.data;

                        
                    
                  document.getElementById('newcases').textContent = numberWithCommas(actualdata.data.local_new_cases);
                  document.getElementById('newtotal').textContent = numberWithCommas(actualdata.data.local_total_cases);
                  document.getElementById('covidlkn').textContent = numberWithCommas(actualdata.data.local_new_deaths);
                  document.getElementById('covidlk').textContent = numberWithCommas(actualdata.data.local_deaths);
                  document.getElementById('newrecoverd').textContent = numberWithCommas(actualdata.data.local_recovered);
                  document.getElementById('newupdate').textContent = numberWithCommas(actualdata.data.update_date_time);
                
                
                  document.getElementById('newcasesglobal').textContent = numberWithCommas(actualdata.data.global_new_cases);
                  document.getElementById('newtotalglobal').textContent = numberWithCommas(actualdata.data.global_total_cases);
                  document.getElementById('covidlknglobal').textContent = numberWithCommas(actualdata.data.global_new_deaths);
                  document.getElementById('covidlkglobal').textContent = numberWithCommas(actualdata.data.global_deaths);
                  document.getElementById('newrecoverdglobal').textContent = numberWithCommas(actualdata.data.global_recovered);
                  document.getElementById('newupdateglobal').textContent = numberWithCommas(actualdata.data.update_date_time);
                

                   console.log(actualdata);

                }).catch((error) => {
                  console.log(error);
                });
             }
getData();

