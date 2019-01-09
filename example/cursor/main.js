'use strict';

// Create an instance
var wavesurfer = {};

// Init & load audio file
document.addEventListener('DOMContentLoaded', function() {
    wavesurfer = WaveSurfer.create({
        barWidth: 4,
        barRadius: 2,
        barGap: 2,
        container: document.querySelector('#waveform'),
        plugins: [
            WaveSurfer.cursor.create({
                showTime: true,
                opacity: 1,
                width: 2,
                customShowTimeStyle: {
                    'background-color': '#000',
                    color: '#fff',
                    padding: '2px',
                    'font-size': '10px'
                }
            })
        ]
    });

    // Load audio from URL
    wavesurfer.load('../media/demo.wav');

    // Play button
    var button = document.querySelector('[data-action="play"]');

    button.addEventListener('click', wavesurfer.playPause.bind(wavesurfer));
});
