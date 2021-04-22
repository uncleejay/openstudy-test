function getTopLeads() {
     fetch('http://leads.beta.openstudycollege.info/getTopLeads')
     .then(function(response){
          return response.json();
     })
     .then(function(data){
          let html = '';
          data.forEach(function(student){
               html += `
                    <p>${student.name}</p>
               `;
          });
          // Insert into the HTML
          document.getElementById('studID').innerHTML = html;    
     })
     .catch(function(error){
          console.log(error);
     })
}