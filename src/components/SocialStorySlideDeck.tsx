import React, { useState } from 'react';
import { SocialStory, VideoScene } from '../types';
import { useAccessibility } from '../context/AccessibilityContext';
import { buildVideoScenesFromStory } from '../utils/socialStoryVideoBuilder';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  Grid,
  Layers,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Heart,
  Star,
  Quote,
  ShieldCheck,
  User,
} from 'lucide-react';

interface SocialStorySlideDeckProps {
  story: SocialStory;
  onSwitchToVideoMode?: () => void;
  onSwitchToTextMode?: () => void;
}

export const SocialStorySlideDeck: React.FC<SocialStorySlideDeckProps> = ({
  story,
  onSwitchToVideoMode,
  onSwitchToTextMode,
}) => {
  const { config, speakText } = useAccessibility();
  const scenes: VideoScene[] = buildVideoScenesFromStory(story);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [layoutMode, setLayoutMode] = useState<'slide' | 'grid'>('slide');

  const currentScene = scenes[activeSlideIndex] || scenes[0];

  const handleNext = () => {
    if (activeSlideIndex < scenes.length - 1) {
      const nextIdx = activeSlideIndex + 1;
      setActiveSlideIndex(nextIdx);
      speakText(`Slide ${nextIdx + 1}: ${scenes[nextIdx].title}`);
    }
  };

  const handlePrev = () => {
    if (activeSlideIndex > 0) {
      const prevIdx = activeSlideIndex - 1;
      setActiveSlideIndex(prevIdx);
      speakText(`Slide ${prevIdx + 1}: ${scenes[prevIdx].title}`);
    }
  };

  const getSlideThemeClasses = (type?: string, theme?: string) => {
    switch (theme) {
      case 'emerald':
        return 'bg-emerald-900/90 text-emerald-100 border-emerald-500/50';
      case 'amber':
        return 'bg-amber-900/90 text-amber-100 border-amber-500/50';
      case 'teal':
        return 'bg-teal-900/90 text-teal-100 border-teal-500/50';
      case 'purple':
        return 'bg-purple-900/90 text-purple-100 border-purple-500/50';
      default:
        return 'bg-indigo-950/90 text-indigo-100 border-indigo-500/50';
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Slide Deck Top Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-2xl p-4 text-white">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/30">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
              <span>SOCIAL STORY SLIDE DECK</span>
              <span>•</span>
              <span className="text-slate-400">
                {layoutMode === 'slide' ? `Slide ${activeSlideIndex + 1} of ${scenes.length}` : '6-Panel Comic Grid'}
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-white">{story.title}</h3>
          </div>
        </div>

        {/* Layout View Switcher: Single Slide vs Full Comic Grid */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => setLayoutMode('slide')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                layoutMode === 'slide'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Slides</span>
            </button>

            <button
              onClick={() => setLayoutMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                layoutMode === 'grid'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Comic Grid View</span>
            </button>
          </div>

          <button
            onClick={() =>
              speakText(
                `Slide ${activeSlideIndex + 1}: ${currentScene.title}. ${currentScene.captionText}`
              )
            }
            className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-xs"
            title="Read Slide Aloud"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: SINGLE SLIDE INTERACTIVE PRESENTATION */}
      {layoutMode === 'slide' ? (
        <div className="space-y-4">
          {/* Main Slide Card Stage */}
          <div
            className={`relative min-h-[420px] rounded-[2.5rem] border-2 p-6 sm:p-10 space-y-6 shadow-2xl transition-all duration-300 flex flex-col justify-between ${getSlideThemeClasses(
              currentScene.type,
              currentScene.visualTheme
            )}`}
          >
            {/* Top Slide Number Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Panel {activeSlideIndex + 1}
              </span>

              <span className="text-xs font-bold text-slate-300 bg-black/30 px-3 py-1 rounded-full border border-white/10">
                {currentScene.type.replace('_', ' ').toUpperCase()}
              </span>
            </div>

            {/* Slide Title */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                {currentScene.title}
              </h2>

              {/* Main Content Card Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-white/20 space-y-4 shadow-xl">
                {/* Dialogue Callout or Situation Text */}
                <div className="flex items-start gap-3">
                  {currentScene.type === 'dialogue' ? (
                    <MessageSquare className="w-6 h-6 text-amber-300 shrink-0 mt-1" />
                  ) : currentScene.type === 'action_step' ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                  ) : (
                    <Quote className="w-6 h-6 text-indigo-300 shrink-0 mt-1" />
                  )}

                  <div className="space-y-1">
                    {currentScene.speaker && (
                      <span className="text-xs font-black text-amber-300 uppercase tracking-wider block">
                        Speaker: {currentScene.speaker}
                      </span>
                    )}
                    <p className="text-base sm:text-2xl font-black leading-relaxed text-white">
                      "{currentScene.captionText}"
                    </p>
                  </div>
                </div>

                {/* Additional Voiceover or Detail Context */}
                {currentScene.voiceoverText !== currentScene.captionText && (
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 border-t border-white/10 pt-3">
                    💡 Context: {currentScene.voiceoverText}
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Slide Progress Tracker */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-bold text-slate-300">
              <span>
                Slide {activeSlideIndex + 1} of {scenes.length}
              </span>

              {/* Dots Indicator */}
              <div className="flex items-center gap-1.5">
                {scenes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === activeSlideIndex
                        ? 'w-8 bg-amber-400'
                        : 'w-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Control Bar */}
          <div className="flex items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <button
              onClick={handlePrev}
              disabled={activeSlideIndex === 0}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs flex items-center gap-2 border border-slate-700 disabled:opacity-40 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Slide</span>
            </button>

            <span className="text-xs font-extrabold text-slate-400">
              Use arrows to navigate story panels
            </span>

            <button
              onClick={handleNext}
              disabled={activeSlideIndex === scenes.length - 1}
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-md disabled:opacity-40 transition-all"
            >
              <span>Next Slide</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* VIEW MODE 2: COMIC GRID VIEW (Recreating the original Social Story panel layout) */
        <div className="bg-amber-50/80 border-2 border-amber-200 rounded-[2.5rem] p-6 sm:p-8 space-y-6 shadow-lg">
          {/* Story Banner Header */}
          <div className="text-center border-b-2 border-slate-800/20 pb-4 space-y-1">
            <span className="text-xs font-black text-amber-800 uppercase tracking-widest">
              SOCIAL STORY 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Requesting Permission to Board the Bus Early
            </h2>
          </div>

          {/* 6 Panel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Panel 1 */}
            <div className="bg-amber-100/90 border-2 border-slate-800 rounded-2xl p-4 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="border-b border-slate-700/30 pb-2">
                <span className="text-xs font-black text-slate-900">
                  1. Situation: Radha arrives at the bus stop and notices a long queue.
                </span>
              </div>
              <div className="bg-white/80 border border-slate-300 rounded-xl p-3 text-center space-y-2 my-auto">
                <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-400 flex items-center justify-center mx-auto text-blue-700 font-extrabold text-xs">
                  🚌 109
                </div>
                <p className="text-xs font-bold text-slate-800">
                  Bus 109 (Broadway to Kovalam) arrives. Long queue at bus stop.
                </p>
              </div>
              <button
                onClick={() =>
                  speakText('1. Situation: Radha arrives at the bus stop and notices a long queue.')
                }
                className="w-full py-1.5 rounded-lg bg-slate-800 text-white font-bold text-[11px] flex items-center justify-center gap-1"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen Panel 1</span>
              </button>
            </div>

            {/* Panel 2 */}
            <div className="bg-amber-100/90 border-2 border-slate-800 rounded-2xl p-4 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="border-b border-slate-700/30 pb-2">
                <span className="text-xs font-black text-slate-900">
                  2. Communication Target: Learning to politely request assistance from fellow passengers.
                </span>
              </div>
              <div className="bg-white/90 border-2 border-indigo-400 rounded-2xl p-3 text-slate-900 space-y-1 relative my-auto shadow-xs">
                <span className="text-[10px] font-black text-indigo-700 uppercase block">
                  Radha's Speech Bubble
                </span>
                <p className="text-xs font-black leading-snug">
                  "Excuse me. I have to reach NIEPMD by 9 o'clock. May I please get into the bus before you? Thank you."
                </p>
              </div>
              <button
                onClick={() =>
                  speakText(
                    '2. Communication Target: Learning to politely request assistance from fellow passengers.'
                  )
                }
                className="w-full py-1.5 rounded-lg bg-slate-800 text-white font-bold text-[11px] flex items-center justify-center gap-1"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen Panel 2</span>
              </button>
            </div>

            {/* Panel 3 */}
            <div className="bg-amber-100/90 border-2 border-slate-800 rounded-2xl p-4 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="border-b border-slate-700/30 pb-2">
                <span className="text-xs font-black text-slate-900">
                  3. Functional Phrase: “Excuse me. I have to reach NIEPMD by 9 o'clock. May I please get into the bus before you? Thank you.”
                </span>
              </div>
              <div className="bg-indigo-50 border border-indigo-300 rounded-xl p-3 text-center space-y-1.5 my-auto">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center mx-auto">
                  💬
                </div>
                <p className="text-xs font-extrabold text-indigo-950">
                  Practicing clear, respectful functional phrases builds confidence.
                </p>
              </div>
              <button
                onClick={() =>
                  speakText(
                    '3. Functional Phrase: Excuse me. I have to reach NIEPMD by 9 o\'clock. May I please get into the bus before you? Thank you.'
                  )
                }
                className="w-full py-1.5 rounded-lg bg-slate-800 text-white font-bold text-[11px] flex items-center justify-center gap-1"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen Panel 3</span>
              </button>
            </div>

            {/* Panel 4 */}
            <div className="bg-amber-100/90 border-2 border-slate-800 rounded-2xl p-4 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="border-b border-slate-700/30 pb-2">
                <span className="text-xs font-black text-slate-900">
                  4. Expected Behaviour: Show identity card worn around the neck.
                </span>
              </div>
              <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-3 text-center space-y-2 my-auto">
                <div className="p-2 rounded-lg bg-white border border-slate-300 max-w-[140px] mx-auto text-left shadow-xs">
                  <div className="text-[9px] font-black text-indigo-800 uppercase">NIEPMD</div>
                  <div className="text-[10px] font-bold text-slate-900">Radha R</div>
                  <div className="text-[8px] text-slate-500 font-semibold">Student ID</div>
                </div>
                <p className="text-xs font-bold text-emerald-950">
                  Showing ID card around neck allows instant verification.
                </p>
              </div>
              <button
                onClick={() =>
                  speakText('4. Expected Behaviour: Show identity card worn around the neck.')
                }
                className="w-full py-1.5 rounded-lg bg-slate-800 text-white font-bold text-[11px] flex items-center justify-center gap-1"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen Panel 4</span>
              </button>
            </div>

            {/* Panel 5 */}
            <div className="bg-amber-100/90 border-2 border-slate-800 rounded-2xl p-4 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="border-b border-slate-700/30 pb-2">
                <span className="text-xs font-black text-slate-900">
                  5. Use a polite voice.
                </span>
              </div>
              <div className="bg-amber-50 border border-amber-300 rounded-xl p-3 text-center space-y-1.5 my-auto">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center mx-auto">
                  😊
                </div>
                <p className="text-xs font-bold text-amber-950">
                  A gentle, calm voice and friendly posture invite positive responses.
                </p>
              </div>
              <button
                onClick={() => speakText('5. Use a polite voice.')}
                className="w-full py-1.5 rounded-lg bg-slate-800 text-white font-bold text-[11px] flex items-center justify-center gap-1"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen Panel 5</span>
              </button>
            </div>

            {/* Panel 6 */}
            <div className="bg-amber-100/90 border-2 border-slate-800 rounded-2xl p-4 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="border-b border-slate-700/30 pb-2">
                <span className="text-xs font-black text-slate-900">
                  6. Thank the passenger.
                </span>
              </div>
              <div className="space-y-2 my-auto">
                <div className="bg-white border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-800">
                  Passenger: <span className="font-normal">"You may go ahead, ma."</span>
                </div>
                <div className="bg-indigo-600 text-white border border-indigo-400 rounded-xl p-2 text-xs font-bold">
                  Radha: <span className="font-extrabold">"Thank you!"</span>
                </div>
              </div>
              <button
                onClick={() =>
                  speakText(
                    '6. Thank the passenger. Passenger says: You may go ahead, ma. Radha says: Thank you!'
                  )
                }
                className="w-full py-1.5 rounded-lg bg-slate-800 text-white font-bold text-[11px] flex items-center justify-center gap-1"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen Panel 6</span>
              </button>
            </div>
          </div>

          {/* Remember Footer Banner (Recreating bottom bar from image) */}
          <div className="p-4 rounded-2xl bg-amber-100 border-2 border-amber-300 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-amber-600 fill-amber-500 shrink-0" />
              <span className="text-sm font-black uppercase tracking-wider text-amber-900">
                Remember:
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-extrabold text-slate-800">
              <span className="px-3 py-1 rounded-full bg-white border border-amber-200">
                Be polite.
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-amber-200">
                Show your ID.
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-amber-200">
                Use kind words.
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-amber-200">
                Always thank others.
              </span>
            </div>

            <Heart className="w-6 h-6 text-rose-500 fill-rose-400 shrink-0 hidden sm:block" />
          </div>
        </div>
      )}
    </div>
  );
};
