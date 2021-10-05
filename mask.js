 
 function getData(){
             fetch('https://www.hpb.health.gov.lk/api/get-current-statistical')
             .then((apidata)=> {
                    console.log(apidata);
                    return apidata.json();

              }).then((actualdata) => {

                    const mydata = actualdata.data;

                        
                    
                  document.getElementById('newcases').textContent = actualdata.data.local_new_cases;
                  document.getElementById('newtotal').textContent = actualdata.data.local_total_cases;
                  document.getElementById('covidlkn').textContent = actualdata.data.local_new_deaths;
                  document.getElementById('covidlk').textContent = actualdata.data.local_deaths;
                  document.getElementById('newrecoverd').textContent = actualdata.data.local_recovered;
                  document.getElementById('newupdate').textContent = actualdata.data.update_date_time;
                
                
                  document.getElementById('newcasesglobal').textContent = actualdata.data.global_new_cases;
                  document.getElementById('newtotalglobal').textContent = actualdata.data.global_total_cases;
                  document.getElementById('covidlknglobal').textContent = actualdata.data.global_new_deaths;
                  document.getElementById('covidlkglobal').textContent = actualdata.data.global_deaths;
                  document.getElementById('newrecoverdglobal').textContent = actualdata.data.global_recovered;
                  document.getElementById('newupdate').textContent = actualdata.data.update_date_time;
                

                   console.log(actualdata);

                }).catch((error) => {

                });
             }
getData();

