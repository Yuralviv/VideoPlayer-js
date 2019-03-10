class VideoPlayer {
    constructor(){
        //all elements from HTML
        this.player = document.querySelector('.player');
        this.video = this.player.querySelector('.viewer');
        this.progress = document.querySelector('.progress');
        this.progressBar = this.progress.querySelector('.progress__filled');
        this.toggle = this.player.querySelector('.toggle');
        this.ranges = this.player.querySelectorAll('.player__slider');
    }

    //  start player
    init(){
        const self = this;
        this.events(self);
    }

    //  all events
    events(self) {
        this.video.addEventListener('click', (e) => this.togglePlay(e) );
        this.toggle.addEventListener('click', (e) => this.togglePlay(e) );
        this.ranges.forEach(range =>  range.addEventListener('change', e => this.handleRangeUpdate(e) ));
        this.ranges.forEach(range =>  range.addEventListener('mousemove', e => this.handleRangeUpdate(e) ));
        this.video.addEventListener('timeupdate', e => this.handleProgress(e) );
    }

    //  play/pause
    togglePlay(e) {
        const method = this.video.paused ? 'play' : 'pause';
        this.toggle.textContent = this.video.paused ? "▌▌" : '►';
        this.video[method]();
    }

    //  volume and speed
    handleRangeUpdate(e){
        this.video['volume'] = e.target.value;
        this.video['playbackRate'] = e.target.value;

    }

    //  video progress
    handleProgress(e){
        const percent = (this.video.currentTime / this.video.duration) * 100;
        this.progressBar.style.flexBasis = `${percent}% `;
    }
}

//create object video
const video = new VideoPlayer();
video.init();