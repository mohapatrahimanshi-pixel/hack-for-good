/**
 * Browser-native Web Audio synthesizer for Miami sunset vibes and interface micro-sounds.
 * Zero external audio assets required. Fully client-side and user-controlled.
 */

class SunsetAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlayingAmbient = false;
  private ambientGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];

  private initContext() {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play crisp retro click / tap sound
  playClick(type: 'tap' | 'action' | 'success' = 'tap') {
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      const now = this.ctx.currentTime;

      if (type === 'tap') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.07);
      } else if (type === 'action') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(640, now + 0.12);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.16);
      } else if (type === 'success') {
        // Melodic two-tone chime
        const freqs = [523.25, 659.25, 783.99, 1046.5]; // C E G C
        freqs.forEach((freq, idx) => {
          const o = this.ctx!.createOscillator();
          const g = this.ctx!.createGain();
          o.type = 'sine';
          o.frequency.setValueAtTime(freq, now + idx * 0.06);
          g.gain.setValueAtTime(0.07, now + idx * 0.06);
          g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.3);
          o.connect(g);
          g.connect(this.ctx!.destination);
          o.start(now + idx * 0.06);
          o.stop(now + idx * 0.06 + 0.35);
        });
      }
    } catch {
      // Audio playback fails silently if user has not interacted
    }
  }

  // Toggle ambient warm sunset synth pad
  toggleAmbient(): boolean {
    try {
      this.initContext();
      if (!this.ctx) return false;

      if (this.isPlayingAmbient) {
        this.stopAmbient();
        return false;
      } else {
        this.startAmbient();
        return true;
      }
    } catch {
      return false;
    }
  }

  getAmbientState(): boolean {
    return this.isPlayingAmbient;
  }

  private startAmbient() {
    if (!this.ctx) return;
    this.stopAmbient();

    const now = this.ctx.currentTime;
    const masterGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);
    filter.Q.setValueAtTime(2.5, now);

    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.12, now + 2); // Gentle 2s fade in

    filter.connect(masterGain);
    masterGain.connect(this.ctx.destination);
    this.ambientGain = masterGain;

    // F minor 9th lush chord: F2, C3, Ab3, Eb4, G4
    const chordFrequencies = [87.31, 130.81, 207.65, 311.13, 392.0];
    this.oscillators = chordFrequencies.map((f, i) => {
      const osc = this.ctx!.createOscillator();
      osc.type = i % 2 === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(f, now);

      // Subtle detune for analog warmth
      const detune = (Math.random() - 0.5) * 8;
      osc.detune.setValueAtTime(detune, now);

      osc.connect(filter);
      osc.start(now);
      return osc;
    });

    this.isPlayingAmbient = true;
  }

  private stopAmbient() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    if (this.ambientGain) {
      this.ambientGain.gain.setValueAtTime(this.ambientGain.gain.value, now);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
    }

    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // already stopped
        }
      });
      this.oscillators = [];
      this.isPlayingAmbient = false;
    }, 1300);
  }
}

export const audioEngine = new SunsetAudioEngine();
