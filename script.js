// Create an array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const emojis = {
    applause: '👏',
    boo: '👎',
    gasp: '😮',
    tada: '🎉',
    victory: '🏆',
    wrong: '❌'
};

// For each sound, create a button, add a class 'btn', update the text, append to DOM
sounds.forEach((sound) => {
    // create a button
    const btn = document.createElement('button');

    // add a class of 'btn; to the button element 
    btn.classList.add('btn');

    // set the button label text to be the same as the string value in the sounds array
    btn.innerText = `${emojis[sound]} ${sound}`;

    //Add an event listener to this button
    btn.addEventListener('click', () => {
        // Stop all sounds first
        stopSounds();
        document.getElementById(sound).play();
    });

    // Add the button to the DOM
    document.getElementById('buttons').appendChild(btn);
});

// Helper fuctions
function stopSounds() {
    sounds.forEach((sound) => {
        const snd = document.getElementById(sound);

        snd.pause();
        snd.currentTime = 0;
    });
}

