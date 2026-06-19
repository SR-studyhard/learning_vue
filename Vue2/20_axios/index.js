//原生ajax
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:5000/students')
xhr.send()
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}