// class TheAlbum is in 3 places
//classTheSong is in 1 places


const albums = {
    year:{
        "2024": [

        {
        id: "realms",
        name: 'Licence Album: Realms',
        img: "./resources/img/albumi.png",
        imgsub: "./resources/img/albumi3sub.png",
        explanation: "A licensable collection of personal works designed for Japanese RPGs, capturing themes and evoking the memories inspired by classic Japanese RPGs. ",
        songs: [
            {
                name: 'The Floating Town',
                source: "./resources/music/mecha1.wav",
                adjectives: ['Calm', 'Oriental', 'RPG'],
                explanation: "A calm, water-themed song for an oriental floating town, inspired by an image of a settlement built atop boats and colorful traditional clothing. The plucking movements mimic the sounds of water surface collisions. \
                  "
            },
            {
                name: 'Green Eternal',
                source: "./resources/music/mecha2.wav",
                adjectives: ['Calm', 'Somber', 'Mysterious', 'RPG' ],
                explanation: "A theme for a deep and ancient fantasy forest. This piece is one of my personal favorites, evoking childhood memories of JRPGs and their mysterious escapism."

            },
            { 
                name: 'Race to the Finish',
                source: "./resources/music/mecha3.wav",
                adjectives: ['Energetic', 'Bouncy', 'Exciting', 'Racing'],
                explanation: "An energetic racing theme inspired by racing minigame instances. The song incorporates elements of samba and big band rock, featuring fun sound effects like fireworks and monkeys."
            },
            {
                name: 'The Desert Bastion',
                source: "./resources/music/mecha4.wav",
                adjectives: ['Stoic', 'Militant', 'Exotic', 'RPG'],
                explanation: "A theme for a desolate fortress in a dry, desert fantasy setting. I find composing for desert and tropical settings particularly inspiring! "
            },
            {
                name: 'Humble Fortifications',
                source: "./resources/music/mecha6.wav",
                adjectives: ['Homely', 'Simple', 'Rustic', 'RPG'],
                explanation: "A home base theme conveying warmth and simplicity, inspired by a rustic RPG fortress setting."
            },
            {
                name: 'Ambush on the Mad Monarch',
                source: "./resources/music/mecha6.wav",
                adjectives: ['Dark', 'Tense', 'Eerie', 'RPG'],
                explanation: "A tense RPG battle or event theme for a face-off against a villain. Inspired by classic RPGs, it features dynamic percussive sections for added intensity."
            },
            {
                name: 'Far Below the Clouds',
                source: "./resources/music/mecha6.wav",
                adjectives: ['Adventurous', 'Grand', 'RPG'],
                explanation: "A world map theme for an RPG overworld map with a bird's-eye view perspective."
            },
            {
                name: 'The Scarlet Hunter - Liturgy of Blood',
                source: "./resources/music/mecha6.wav",
                adjectives: ['Vampiric', 'Gothic', 'Dark'],
                explanation: "An RPG battle theme for a confrontation with a vampire hunter, drawing inspiration from the thematic hues of scarlet red and gold."
            },
            {
                name: 'Warfare Maneuvers',
                source: "./resources/music/mecha6.wav",
                adjectives: ['Militant', 'Inspiring', 'Tactical RPG'],
                explanation: "A tactical RPG battle theme inspired by a classic PlayStation game. "
            },

        ]//songs end here
    },//other album here
    {
        id: "oracle",
        name: "Oracle Theme",
        img: "./resources/img/albumi2.png",
        imgsub:"./resources/img/albumi2sub.png",
        explanation: "veery cool album! veery cool album! veery cool album! veery cool album!",
        songs: [
              {  name:"Orrracle song/mecha7",
                 source: "./resources/music/mecha7.wav",
                 explanation: "This song is used on oraclewwwww",
                 adjectives: ['asfsdj1', 'adjektiiive2', 'adj3'],
              }
        ]
    }   

    ], //albums24 end here?
    //2025: [] here
}
};
document.addEventListener('DOMContentLoaded', function(){
    ChangeSongNames(defaultAlbum.songs)
});

//defining some areas where we change strings
const albumTitles = document.querySelectorAll('.TheAlbum');
const albumYears = document.querySelectorAll('.TheYear');

const songsContainer = document.querySelector('.songsContainer');


//Access songs in album 0
//const songs = albums.albums24[0].songs;

//getting access to elements
const TheSongs = document.querySelectorAll('.TheSong');
const TheAdjective = document.querySelector('.TheAdjective');
const songExp = document.querySelector('.songExp');
const albumAbout = document.querySelector(".albumAboutP");

const popOutDiv = document.querySelector(".popOutDiv");
const speaker = document.querySelector(".speaker");


const imgPlace = document.querySelector('.nowAlbum');

const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');

const rightAlbum = document.querySelector('.rightAlbum');
const leftAlbum = document.querySelector('.leftAlbum');

//access to audioplayer
const audioPlayer = document.querySelector('.audioPlayer');

//DEFAULT is the first song
const defaultAlbum = albums.year["2024"][0]; // Default to first album
const defaultSong = defaultAlbum.songs[0]; 
const defaultImg = albums.year["2024"][0].img;



TheSongs[0].textContent = defaultSong.name;
TheAdjective.textContent = defaultSong.adjectives; 

songExp.textContent = defaultSong.explanation;
audioPlayer.src = defaultSong.source;

albumAbout.textContent = defaultAlbum.explanation;
imgPlace.src = defaultImg;

leftArrow.style.display = "none";
rightAlbum.src = albums.year["2024"][1].imgsub;
leftAlbum.src = albums.year["2024"][0].imgsub;
leftAlbum.style.display = "none";

//albumYears.textContent = albums.year;
albumTitles.forEach(albumTitle => {
    albumTitle.innerHTML = defaultAlbum.name; // 
});



//         FUNCTIONS >>
//arrow album change
let currentAlbumIndex = 0;

rightAlbum.src = albums.year["2024"][1].imgsub;

//

function arrowVisibility(index){
    if(index > 0 ){
        leftArrow.style.display = "block";
        leftAlbum.style.display = "block";

        rightArrow.style.display = "none";
        rightAlbum.style.display = "none";

        

    }else if(index < albums.year["2024"].length - 1){
        rightArrow.style.display = "block";
        rightAlbum.style.display = "block";

        leftArrow.style.display = "none";
        leftAlbum.style.display = "none";
    }else{
        rightArrow.style.display ="none";
        rightAlbum.style.display = "none";


    }


   
}

let previouslyClickedAlbum = null;
function updateAlbumContent(index) {
    const selectedAlbum = albums.year["2024"][index];
    TheAlbumName[0].style.fontWeight= "normal";

    

    if(previouslyClickedAlbum){

        previouslyClickedAlbum.style.fontWeight = "normal";

    }

    TheAlbumName[index].style.fontWeight = "bold";
    previouslyClickedAlbum = TheAlbumName[index];


   

    if (selectedAlbum) {
        changeAlbumNames(selectedAlbum);
        arrowVisibility(index);
        /*rightArrow.style.display = "block";
        leftArrow.style.display = "none";
        
        rightAlbum.style.display = "block";
        leftAlbum.style.display = "none";*/

       
    }
    //popOutDiv[1].style.transform = "translate(-50px)";

}

rightArrow.addEventListener('click', () => {
   // TheAlbumName[currentAlbumIndex].style.fontWeight = "normal";
    if (currentAlbumIndex < albums.year["2024"].length - 1) {
        currentAlbumIndex++;

        updateAlbumContent(currentAlbumIndex);
        arrowVisibility(index);
     /*   rightArrow.style.display = "none";
        leftArrow.style.display = "block";
        rightAlbum.style.display = "none";
        leftAlbum.style.display = "block";*/

        //rightArrow.classList.add('.rightArrowAnimation');
    //17.10 test
    //TheAlbumName[currentAlbumIndex].style.fontWeight= "bold";
    }

});

leftArrow.addEventListener('click', () => {
    //TheAlbumName[currentAlbumIndex].style.fontWeight = "normal";
    if (currentAlbumIndex > 0) {
        currentAlbumIndex--;

        updateAlbumContent(currentAlbumIndex);
        arrowVisibility(index);
        //rightAlbum.style.display = albums.year["2024"][currentAlbumIndex].imgsub;

                //17.10 test
                //TheAlbumName[currentAlbumIndex].style.fontWeight = "bold";
    }
});
//

//arrow movement



//choose and change ALBUM 
const TheAlbumName = document.querySelectorAll(".TheAlbumName");
TheAlbumName[0].style.fontWeight= "bold";

TheAlbumName.forEach(alb => {

    alb.addEventListener('click', chooseAlbum);

});  
    
//let previouslyClickedAlbum = null;

    function chooseAlbum(event){
        const alb = event.currentTarget;


     /*   if(previouslyClickedAlbum){

            previouslyClickedAlbum.style.fontWeight = "normal";

        }*/
        //alb.style.fontWeight = "bold";
        //previouslyClickedAlbum = alb;
        //changeAlbumNames(alb.textContent);
        
        const albumId = alb.getAttribute('data-album-id');
        
        const selectedAlbum = albums.year["2024"].find(album => album.id === albumId);
        
      

        if(selectedAlbum){
            changeAlbumNames(selectedAlbum);
          
            const selectedIndex = albums.year["2024"].indexOf(selectedAlbum);
            currentAlbumIndex = selectedIndex;
            updateAlbumContent(currentAlbumIndex);
       };

    };
 

//Loops through names
function changeAlbumNames(selectedAlbum){

   // albumTitles.forEach(albumTitle => {
     //   albumTitle.innerHTML = ""; // ""Clear the content
   // });

    albumTitles.forEach(albumTitle => {
        
        
        //albumTitle.innerHTML = albums.albums24[0].name;
        albumTitle.innerHTML = selectedAlbum.name;
    });
        albumAbout.innerHTML = selectedAlbum.explanation;
        imgPlace.src = selectedAlbum.img;

    ChangeSongNames(selectedAlbum.songs);
};
    

//Loops through year
albumYears.forEach(albumYear => {

    const year = albumYear.dataset.year;
    albumYear.innerHTML = year + ":" + "&nbsp;" ;

});










// Loop through each songTitle element and update its innerHTML
function ChangeSongNames(songs){

    songsContainer.innerHTML = "";

songs.forEach(song => {

    const popOutDiv = document.createElement("div");
    popOutDiv.classList.add("popOutDiv");
    
    
    //const songTitle = document.querySelector('.otherSongName').cloneNode(true);
    const songTitle = document.createElement("p");
    songTitle.classList.add('otherSongName');
    songTitle.textContent = song.name;


    //const songAdjective = document.querySelector('.adjectives').cloneNode(true);
    const songAdjective = document.createElement("p");
    songAdjective.classList.add('adjectives');
    songAdjective.textContent = song.adjectives.join(' - ');

        
    songsContainer.appendChild(popOutDiv);    
    popOutDiv.appendChild(songTitle );
    popOutDiv.appendChild(songAdjective );
   

    //songtitles/popOutDiv have eventlistener
    popOutDiv.addEventListener('click',()=> showSongDetails(song));
    
    //first song is popped out with speaker
    const firstPopOutDiv = songsContainer.firstElementChild;

    if (firstPopOutDiv) {
        firstPopOutDiv.style.transform = "translate(-50px)";
        firstPopOutDiv.appendChild(speaker);
        previouslyClickedDiv = firstPopOutDiv; 
    }

});

if (songs.length > 0) {
    showSongDetails(songs[0]);
}

};

//function to show details
    function showSongDetails(song){
        
        TheSongs.forEach(TheSong =>{
            TheSong.textContent = song.name;
        });
        //gives the adjectives and explanation of current song
        TheAdjective.textContent = song.adjectives.join(' - ');
        songExp.innerHTML = song.explanation;


        //changes the source
        audioPlayer.src = song.source;
        
        popOut();
        

    }

    let previouslyClickedDiv = null;
    

    function popOut(){

        const popOutDiv = event.currentTarget;
        
        
        if(popOutDiv.closest('.songsContainer')){


        if(previouslyClickedDiv){
            previouslyClickedDiv.style.transform = "translate(0px)";
        }
       
        popOutDiv.style.transform = "translate(-50px)";

        previouslyClickedDiv = popOutDiv;

        popOutDiv.appendChild(speaker);

        let width1 = screen.width;

        if(width1 < 520){
            popOutDiv.style.transform = "translate(0px)";
        }

    }
};