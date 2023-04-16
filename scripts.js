const root1 = document.querySelector('[data-key = "order1"]') //retrieves the first element with said property
const biscuits1 = document.getElementsByClassName('biscuits') //checks all elements and retrieves all elements with said class name in array form
const donuts1 = document.getElementsByClassName('donuts')
const pancakes1 = document.getElementsByClassName('pancakes')
const status1 = document.getElementsByClassName('status')
const root2 = document.querySelector('[data-key = "order2"]')
const root3 = document.querySelector('[data-key = "order3"]')

const bis1 = biscuits1[0].getElementsByTagName("dd")
bis1[0].innerText = root1.getAttribute("data-biscuits")
const don1 = donuts1[0].getElementsByTagName("dd")
don1[0].innerText = root1.getAttribute("data-donuts")
const pan1 = pancakes1[0].getElementsByTagName("dd")
pan1[0].innerText = root1.getAttribute("data-pancakes")
const stat1 = status1[0].getElementsByTagName("dd")
stat1[0].innerText = (root1.getAttribute("data-delivered"))? "Delivered" : "Pending"

const bis2 = biscuits1[1].getElementsByTagName("dd")
bis2[0].innerText = root2.getAttribute("data-biscuits")
const don2 = donuts1[1].getElementsByTagName("dd")
don2[0].innerText = root2.getAttribute("data-donuts")
const pan2 = pancakes1[1].getElementsByTagName("dd")
pan2[0].innerText = root2.getAttribute("data-pancakes")
const stat2 = status1[1].getElementsByTagName("dd")
stat2[0].innerText = (root2.getAttribute("data-delivered"))? "Delivered" : "Pending"

const bis3 = biscuits1[2].getElementsByTagName("dd")
bis3[0].innerText = root3.getAttribute("data-biscuits")
const don3 = donuts1[2].getElementsByTagName("dd")
don3[0].innerText = root3.getAttribute("data-donuts")
const pan3 = pancakes1[2].getElementsByTagName("dd")
pan3[0].innerText = root3.getAttribute("data-pancakes")
const stat3 = status1[2].getElementsByTagName("dd")
stat3[0].innerText = (root3.getAttribute("data-delivered"))? "Delivered" : "Pending"