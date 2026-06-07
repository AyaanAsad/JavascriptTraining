const GetKey = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
  let key
  if(e.keyCode == 32)
  {
    key = 'Spacebar'
  }
  else
  {
    key = e.key
  }
  GetKey.innerHTML=`
  <div class="Keys">
  <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
  `
})