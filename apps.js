// api jsonplaceholder data load;
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => onlyUsername(json));

      function onlyUsername(user){
            var user=user.map(user => user.username);
           var ul= document.getElementById('userface')
            const li=document.createElement('li');
            li.innerText=user
            ul.appendChild(li);
           

      }