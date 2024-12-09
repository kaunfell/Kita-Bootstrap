const albums = {
    year: {
        "2024": [
            {
                id: "realms",
                name: 'Licence Album: Realms',
                img: "./resources/img/img_cover_realms.png",
                imgsub: "./resources/img/img_cover_realms.png",
                explanation: "Cool album. Mus mauris vitae ultricies leo integer malesuada. Habitasse platea dictumst quisque sagittis purus sit. Aliquet eget sit amet tellus cras adipiscing enim.",
                songs: [
                    { name: 'mecha1', source: "./resources/music/mecha1.wav", adjectives: ['adjective1', 'adj2', 'adj3'], explanation: "super cool." },
                    { name: 'mecha2', source: "./resources/music/mecha2.wav", adjectives: ['adj1', 'adj36363', 'adj3'], explanation: "extra super cool." },
                    { name: 'mecha3', source: "./resources/music/mecha3.wav", adjectives: ['adj1', 'adj2', 'adj3'], explanation: "Yeah!" },
                    { name: 'mecha4', source: "./resources/music/mecha4.wav", adjectives: ['adj1', 'adjektiiive2', 'adj3'], explanation: "WOHOO!" },
                    { name: 'mecha6', source: "./resources/music/mecha6.wav", adjectives: ['adjektiiivvv33', 'adj2', 'adj3'], explanation: "Awesome!" }
                ]
            },
            {
                id: "oracle",
                name: "Oracle Theme",
                img: "./resources/img/img_cover_realms.png",
                imgsub: "./resources/img/img_cover_realms.png",
                explanation: "veery cool album!",
                songs: [
                    { name: "Orrracle song/mecha7", source: "./resources/music/mecha7.wav", explanation: "This song is used on oraclewwwww", adjectives: ['asfsdj1', 'adjektiiive2', 'adj3'] }
                ]
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const defaultAlbum = albums.year["2024"][0];
    const defaultSong = defaultAlbum.songs[0];
    const defaultImg = defaultAlbum.img;

    // Initialize UI
    updateAlbumContent(0); // Set default content
});

// Accessing elements
const albumTitles = document.querySelectorAll('.TheAlbum');
const albumYears = document.querySelectorAll('.TheYear');
const songsContainer = document.querySelector('.songsContainer');
const TheSongs = document.querySelectorAll('.TheSong');
const TheAdjective = document.querySelector('.TheAdjective');
const songExp = document.querySelector('.songExp');
const albumAbout = document.querySelector(".albumAboutP");
const imgPlace = document.querySelector('.nowAlbum');
const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');
const rightAlbum = document.querySelector('.rightAlbum');
const leftAlbum = document.querySelector('.leftAlbum');
const audioPlayer = document.querySelector('.audioPlayer');

let currentAlbumIndex = 0;

function updateAlbumContent(index) {
    const selectedAlbum = albums.year["2024"][index];
    if (selectedAlbum) {
        changeAlbumNames(selectedAlbum);
        handleArrowVisibility(index);
    }
}

function handleArrowVisibility(index) {
    leftArrow.style.display = index > 0 ? "block" : "none";
    rightArrow.style.display = index < albums.year["2024"].length - 1 ? "block" : "none";
    leftAlbum.src = index > 0 ? albums.year["2024"][index - 1].imgsub : '';
    rightAlbum.src = index < albums.year["2024"].length - 1 ? albums.year["2024"][index + 1].imgsub : '';
}

// Event listeners for arrows
rightArrow.addEventListener('click', () => {
    if (currentAlbumIndex < albums.year["2024"].length - 1) {
        currentAlbumIndex++;
        updateAlbumContent(currentAlbumIndex);
        updateAlbumHighlight();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentAlbumIndex > 0) {
        currentAlbumIndex--;
        updateAlbumContent(currentAlbumIndex);
        updateAlbumHighlight();
    }
});

const TheAlbumName = document.querySelectorAll(".TheAlbumName");
TheAlbumName[0].style.fontWeight = "bold";

TheAlbumName.forEach((alb, index) => {
    alb.addEventListener('click', (event) => chooseAlbum(event, index));
});

let previouslyClickedAlbum = null;

function chooseAlbum(event, index) {
    if (previouslyClickedAlbum) {
        previouslyClickedAlbum.style.fontWeight = "normal";
    }
    previouslyClickedAlbum = event.currentTarget;
    previouslyClickedAlbum.style.fontWeight = "bold";
    currentAlbumIndex = index;

    updateAlbumContent(currentAlbumIndex);
}

function changeAlbumNames(selectedAlbum) {
    albumTitles.forEach(albumTitle => {
        albumTitle.innerHTML = selectedAlbum.name;
    });
    albumAbout.innerHTML = selectedAlbum.explanation;
    imgPlace.src = selectedAlbum.img;

    ChangeSongNames(selectedAlbum.songs);
}

function ChangeSongNames(songs) {
    songsContainer.innerHTML = ""; // Clear previous songs
    songs.forEach(song => {
        const popOutDiv = document.createElement("div");
        popOutDiv.classList.add("popOutDiv");
        
        const songTitle = document.createElement("p");
        songTitle.classList.add('otherSongName');
        songTitle.textContent = song.name;

        const songAdjective = document.createElement("p");
        songAdjective.classList.add('adjectives');
        songAdjective.textContent = song.adjectives.join(' - ');

        songsContainer.appendChild(popOutDiv);
        popOutDiv.appendChild(songTitle);
        popOutDiv.appendChild(songAdjective);
        
        popOutDiv.addEventListener('click', () => showSongDetails(song));
    });

    if (songs.length > 0) {
        showSongDetails(songs[0]); // Show details for the first song
    }
}

function showSongDetails(song) {
    TheSongs.forEach(TheSong => {
        TheSong.textContent = song.name;
    });
    TheAdjective.textContent = song.adjectives.join(' - ');
    songExp.innerHTML = song.explanation;
    audioPlayer.src = song.source;
}

// Initial call to set up the default view
updateAlbumContent(0);
