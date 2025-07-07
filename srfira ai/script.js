
let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours = day.getHours()
    if(hours >= 0 && hours<12) {
        speak("Good Morning Sir")
    }else if(hours >= 12 && hours < 16){
        speak("Good Afternoon Sir")
    }else {
        speak("Good Evening Sir")
    }  
}
window.addEventListener('load',()=> {
    wishMe()
})
let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    // console.log(event)
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=> {
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
// you  are intregrate any talkiing skill in this sequence
function takeCommand(message) {
     btn.style.display="flex"
      voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir, what can i help you")
    }
    else if(message.includes("who are you")|| message.includes("who are u")) {
        speak("i am created by soumya sir he thought about me every time")
    }
    else if(message.includes("how are you") || message.includes("sifra how are you ")) {
        speak("i am fine & how are you")
    }
   /* else if(message.includes("") || message.includes("")){
        speak("")
    }*/
     else if(message.includes("my brother name")|| message.includes("brother")) {
        speak(" your brother name name is satym sai tripathy")
    }
    else if(message.includes("thank you") || message.includes("thank")) {
        speak("welcome sir")
    }
    else if(message.includes("open youtube")){
        speak("opening in youtube")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening in google")
        window.open("https://www.google.com/","_blank")
    }  else if(message.includes("open calculator")){
        speak("opening in calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening in whatsapp...")
        window.open("whatsapp://")
    }
     else if(message.includes("time")){
      let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
       else if(message.includes("date")){
      let date = new Date().toLocaleString(undefined,{day:"numeric",month:"numeric"})
      speak(date)
    }
    else {
        let finalText = "this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        // speak(`this is what i found on internet regarring ${message}`)
        window.open(`https://www.google.com/search?q=${message.replace("shifra","") || message.replace("shipra","")}`,
    "_blank")
    }
}