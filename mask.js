 
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
                
                

                   console.log(actualdata);

                }).catch((error) => {

                });
             }
getData();

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';


window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});