import { defineStore } from "pinia";

export const useSongStore = defineStore("song", {
  state: () => ({
    isPlaying: false,
    audio: null,
    currentArtist: null,
    currentTrack: null,
    trackTime: null,
    currentVolume: 80,
    isLyrics: false,
    lyricsPosition: "0:00",
  }),
  actions: {
    //function-1
    loadSong(artist, track) {
      this.currentArtist = artist;
      this.currentTrack = track;

      if (this.audio && this.audio.src) {
        this.audio.pause();
        this.isPlaying = false;
        this.audio.src = "";
      }

      this.audio = new Audio();
      this.audio.src = track.path;

      setTimeout(() => {
        this.isPlaying = true;
        this.audio.play();
      }, 200);
    },
    //function-2
    playOrPauseSong() {
      if (this.audio.paused) {
        this.isPlaying = true;
        this.audio.play();
      } else {
        this.isPlaying = false;
        this.audio.pause();
      }
    },
    //function-3
    playOrPauseThisSong(artist, track) {
      if (!this.audio || !this.audio.src || this.currentTrack.id !== track.id) {
        this.loadSong(artist, track);
        return;
      }

      this.playOrPauseSong();
    },
    //function-4
    prevSong(currentTrack) {
      let track = artist.tracks[currentTrack.id - 2];
      this.loadSong(artist, track);
    },
    //function-5
    nextSong(currentTrack) {
      if (currentTrack.id === artist.tracks.length) {
        let track = artist.tracks[0];
        this.loadSong(artist, track);
      } else {
        let track = artist.tracks[currentTrack.id];
        this.loadSong(artist, track);
      }
    },
    //function-6
    playFromFirst() {
      this.resetState();
      let track = artist.tracks[0];
      this.loadSong(artist, track);
    },
    //function-7
    resetState() {
      this.isPlaying = false;
      this.audio = null;
      this.currentArtist = null;
      this.currentTrack = null;
    },
  },
  persist: true,
});
