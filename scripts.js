function show_about() {
    const contents = document.getElementsByClassName("content")
    for (const content of contents) {
        content.style.display = 'none'
    }
    document.getElementById("about").style.display = "block"
}

function show_publications() {
    const contents = document.getElementsByClassName("content")
    for (const content of contents) {
        content.style.display = 'none'
    }
    document.getElementById("publications").style.display = "block"
}

function show_projects() {
    const contents = document.getElementsByClassName("content")
    for (const content of contents) {
        content.style.display = 'none'
    }
    document.getElementById("projects").style.display = "block"
}

function show_honors_awards() {
    const contents = document.getElementsByClassName("content")
    for (const content of contents) {
        content.style.display = 'none'
    }
    document.getElementById("honors-awards").style.display = "block"
}

function show_more() {
    const contents = document.getElementsByClassName("content")
    for (const content of contents) {
        content.style.display = 'none'
    }
    document.getElementById("more").style.display = "block"
}