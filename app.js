window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add("playing");
})
function removeTransition(e) {
    if (e.propertyName !== "transform") return
    e.target.classList.remove("playing")
}
const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition))

var buttons = document.querySelectorAll("button")
for(i=0; i<9; i++){
    buttons.forEach(function (el) {
        var audio = document.querySelectorAll("audio")[i]
        el.addEventListener("click", function () {
            if (audio.dataset.key == el.dataset.key) {
                audio.currentTime = 0
                audio.play()
                el.classList.add("playing")
            }
        })
    })
}
