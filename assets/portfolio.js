var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Declare a variable to keep track of the currently active tab
let activeTabName = null;

function opentab(tabname, event) {
    const tabLink = event.currentTarget;  // Current tab link element

    // Check if the clicked tab link is already active
    const isCurrentlyActive = tabLink.classList.contains("active-link");

    // Loop through all tab links and contents to remove active classes
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // If the clicked tab link was not active, activate it and the corresponding tab content
    if (!isCurrentlyActive) {
        tabLink.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        activeTabName = tabname;  // Update the active tab name
    } else {
        activeTabName = null;  // Reset the active tab name when clicking the same tab again
    }
}



var sidemenu = document.getElementById("sidemenu");

const scriptURL = 'https://script.google.com/macros/s/AKfycbymX5w_Hz6BtG-tptzF-yMfc4EJXsBAlLNRHFJ8jYw1yvmB3AkCbM2Py_uW2cptbJGd/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{ 
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
  })

  