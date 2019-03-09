class VideoPlayer {
    constructor(){
        //all elements from HTML
        this.player = document.querySelector('.player');
        this.video = this.player.querySelector('.viewer');
        this.progress = document.querySelector('.progress');
        this.progressBar = this.progress.querySelector('.progress__filed');
        this.toggle = this.player.querySelector('.toggle');
        this.skipButtons = this.player.querySelectorAll('[data-skip]');
        this.ranges = this.player.querySelectorAll('.player__slider');
    }

    //  start player
    init(){
        const self = this;
        this.events(self);
    }

    //  all events
    events() {
        this.video.addEventListener('click', (e) => this.togglePlay() );
        this.toggle.addEventListener('click', (e) => this.togglePlay() );
        this.ranges.forEach(range =>  range.addEventListener('change', e => this.handleRangeUpdate(e) ));
        this.ranges.forEach(range =>  range.addEventListener('mousemove', e => this.handleRangeUpdate(e) ));
        this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e) ));
    }

    //  play/pause
    togglePlay() {
        const method = this.video.paused ? 'play' : 'pause';
        this.toggle.textContent = this.video.paused ? "▌▌" : '►';
        this.video[method]();
    }

    //volume and speed
    handleRangeUpdate(e){
        this.video['volume'] = e.target.value;
        this.video['playbackRate'] = e.target.value;

    }

    //  time skip
    skip(e){
        this.video.currentTime += parseFloat( e.target.dataset.skip);
    }


}

//create object video
const video = new VideoPlayer();
video.init();