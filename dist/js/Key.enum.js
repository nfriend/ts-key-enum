"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An enum that includes all non-printable string values one can expect from $event.key.
 * For example, this enum includes values like "CapsLock", "Backspace", and "AudioVolumeMute",
 * but does not include values like "a", "A", "#", "é", or "¿".
 * Auto generated from MDN: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Speech_recognition_keys
 * on 2019-10-23T14:46:54-03:00
 */
var Key;
(function (Key) {
    /** The user agent wasn't able to map the event's virtual keycode to a specific key value. This can happen due to hardware or software constraints, or because of constraints around the platform on which the user agent is running. */
    Key["Unidentified"] = "Unidentified";
    /** The Alt (Alternative) key. */
    Key["Alt"] = "Alt";
    /** The AltGr or AltGraph (Alternate Graphics) key. Enables the ISO Level 3 shift modifier (where Shift is the level 2 modifier). */
    Key["AltGraph"] = "AltGraph";
    /** The Caps Lock key. Toggles the capital character lock on and off for subsequent input. */
    Key["CapsLock"] = "CapsLock";
    /** The Control, Ctrl, or Ctl key. Allows typing control characters. */
    Key["Control"] = "Control";
    /** The Fn (Function modifier) key. Used to allow generating function key (F1-F15, for instance) characters on keyboards without a dedicated function key area. Often handled in hardware so that events aren't generated for this key. */
    Key["Fn"] = "Fn";
    /** The FnLock or F-Lock (Function Lock) key.Toggles the function key mode described by "Fn" on and off. Often handled in hardware so that events aren't generated for this key. */
    Key["FnLock"] = "FnLock";
    /** The Hyper key. */
    Key["Hyper"] = "Hyper";
    /** The Meta key. Allows issuing special command inputs. This is the Windows logo key, or the Command or ⌘ key on Mac keyboards. */
    Key["Meta"] = "Meta";
    /** The NumLock (Number Lock) key. Toggles the numeric keypad between number entry some other mode (often directional arrows). */
    Key["NumLock"] = "NumLock";
    /** The Scroll Lock key. Toggles beteen scrolling and cursor movement modes. */
    Key["ScrollLock"] = "ScrollLock";
    /** The Shift key. Modifies keystrokes to allow typing upper (or other) case letters, and to support typing punctuation and other special characters. */
    Key["Shift"] = "Shift";
    /** The Super key. */
    Key["Super"] = "Super";
    /** The Symbol modifier key (found on certain virtual keyboards). */
    Key["Symbol"] = "Symbol";
    /** The Symbol Lock key. */
    Key["SymbolLock"] = "SymbolLock";
    /** The Enter or ↵ key (sometimes labeled Return). */
    Key["Enter"] = "Enter";
    /** The Horizontal Tab key, Tab. */
    Key["Tab"] = "Tab";
    /** The down arrow key. */
    Key["ArrowDown"] = "ArrowDown";
    /** The left arrow key. */
    Key["ArrowLeft"] = "ArrowLeft";
    /** The right arrow key. */
    Key["ArrowRight"] = "ArrowRight";
    /** The up arrow key. */
    Key["ArrowUp"] = "ArrowUp";
    /** The End key. Moves to the end of content. */
    Key["End"] = "End";
    /** The Home key. Moves to the start of content. */
    Key["Home"] = "Home";
    /** The Page Down (or PgDn) key. Scrolls down or displays the next page of content. */
    Key["PageDown"] = "PageDown";
    /** The Page Up (or PgUp) key. Scrolls up or displays the previous page of content. */
    Key["PageUp"] = "PageUp";
    /** The Backspace key. This key is labeled Delete on Mac keyboards. */
    Key["Backspace"] = "Backspace";
    /** The Clear key. Removes the currently selected input. */
    Key["Clear"] = "Clear";
    /** The Copy key (on certain extended keyboards). */
    Key["Copy"] = "Copy";
    /** The Cursor Select key, CrSel. */
    Key["CrSel"] = "CrSel";
    /** The Cut key (on certain extended keyboards). */
    Key["Cut"] = "Cut";
    /** The Delete key, Del. */
    Key["Delete"] = "Delete";
    /** Erase to End of Field. Deletes all characters from the current cursor position to the end of the current field. */
    Key["EraseEof"] = "EraseEof";
    /** The ExSel (Extend Selection) key. */
    Key["ExSel"] = "ExSel";
    /** The Insert key, Ins. Toggles  between inserting and overwriting text. */
    Key["Insert"] = "Insert";
    /** Paste from the clipboard. */
    Key["Paste"] = "Paste";
    /** Redo the last action. */
    Key["Redo"] = "Redo";
    /** Undo the last action. */
    Key["Undo"] = "Undo";
    /** The Accept, Commit, or OK key or button. Accepts the currently selected option or input method sequence conversion. */
    Key["Accept"] = "Accept";
    /** The Again key. Redoes or repeats a previous action. */
    Key["Again"] = "Again";
    /** The Attn (Attention) key. */
    Key["Attn"] = "Attn";
    /** The Cancel key. */
    Key["Cancel"] = "Cancel";
    /** Shows the context menu. Typically found between the Windows (or OS) key and the Control key on the right side of the keyboard. */
    Key["ContextMenu"] = "ContextMenu";
    /** The Esc (Escape) key. Typically used as an exit, cancel, or "escape this operation" button. Historically, the Escape character was used to signal the start of a special control sequence of characters called an "escape sequence." */
    Key["Escape"] = "Escape";
    /** The Execute key. */
    Key["Execute"] = "Execute";
    /** The Find key. Opens an interface (typically a dialog box) for performing a find/search operation. */
    Key["Find"] = "Find";
    /** The Finish key. */
    Key["Finish"] = "Finish";
    /** The Help key. Opens or toggles the display of help information. */
    Key["Help"] = "Help";
    /** The Pause key. Pauses the current application or state, if applicable.
      This shouldn't be confused with the "MediaPause" key value, which is used for media controllers, rather than to control applications and processes.
      */
    Key["Pause"] = "Pause";
    /** The Play key. Resumes a previously paused application, if applicable.
      This shouldn't be confused with the "MediaPlay" key value, which is used for media controllers, rather than to control applications and processes.
      */
    Key["Play"] = "Play";
    /** The Props (Properties) key. */
    Key["Props"] = "Props";
    /** The Select key. */
    Key["Select"] = "Select";
    /** The ZoomIn key. */
    Key["ZoomIn"] = "ZoomIn";
    /** The ZoomOut key. */
    Key["ZoomOut"] = "ZoomOut";
    /** The Brightness Down key. Typically used to reduce the brightness of the display. */
    Key["BrightnessDown"] = "BrightnessDown";
    /** The Brightness Up key. Typically increases the brightness of the display. */
    Key["BrightnessUp"] = "BrightnessUp";
    /** The Eject key. Ejects removable media (or toggles an optical storage device tray open and closed). */
    Key["Eject"] = "Eject";
    /** The LogOff key. */
    Key["LogOff"] = "LogOff";
    /** The Power button or key, to toggle power on and off.
      Not all systems pass this key through to to the user agent.
      */
    Key["Power"] = "Power";
    /** The PowerOff or PowerDown key. Shuts off the system. */
    Key["PowerOff"] = "PowerOff";
    /** The PrintScreen or PrtScr key. Sometimes SnapShot. Captures the screen and prints it or saves it to disk. */
    Key["PrintScreen"] = "PrintScreen";
    /** The Hibernate key. This saves the state of the computer to disk and then shuts down; the computer can be returned to its previous state by restoring the saved state information. */
    Key["Hibernate"] = "Hibernate";
    /** The Standby key; also known as Suspend or Sleep. This turns off the display and puts the computer in a low power consumption mode, without completely powering off. */
    Key["Standby"] = "Standby";
    /** The WakeUp key; used to wake the computer from the hibernation or standby modes. */
    Key["WakeUp"] = "WakeUp";
    /** The All Candidates key, which starts multi-candidate mode, in which multiple candidates are displayed for the ongoing input. */
    Key["AllCandidates"] = "AllCandidates";
    /** The Alphanumeric key. */
    Key["Alphanumeric"] = "Alphanumeric";
    /** The Code Input key, which enables code input mode, which lets the user enter characters by typing their code points (their Unicode character numbers, typically). */
    Key["CodeInput"] = "CodeInput";
    /** The Compose key. */
    Key["Compose"] = "Compose";
    /** The Convert key, which instructs the IME to convert the current input method sequence into the resulting character. */
    Key["Convert"] = "Convert";
    /** A dead "combining" key; that is, a key which is used in tandem with other keys to generate accented and other modified characters. If pressed by itself, it doesn't generate a character. If you wish to identify which specific dead key was pressed (in cases where more than one exists), you can do so by examining the KeyboardEvent's associated compositionupdate event's  data property. */
    Key["Dead"] = "Dead";
    /** The Final (Final Mode) key is used on some Asian keyboards to enter final mode when using IMEs. */
    Key["FinalMode"] = "FinalMode";
    /** Switches to the first character group on an ISO/IEC 9995 keyboard. Each key may have multiple groups of characters, each in its own column. Pressing this key instructs the device to interpret keypresses as coming from the first column on subsequent keystrokes. */
    Key["GroupFirst"] = "GroupFirst";
    /** Switches to the last character group on an ISO/IEC 9995 keyboard. */
    Key["GroupLast"] = "GroupLast";
    /** Switches to the next character group on an ISO/IEC 9995 keyboard. */
    Key["GroupNext"] = "GroupNext";
    /** Switches to the previous character group on an ISO/IEC 9995 keyboard. */
    Key["GroupPrevious"] = "GroupPrevious";
    /** The Mode Change key. Toggles or cycles among input modes of IMEs. */
    Key["ModeChange"] = "ModeChange";
    /** The Next Candidate function key. Selects the next possible match for the ongoing input. */
    Key["NextCandidate"] = "NextCandidate";
    /** The NonConvert ("Don't convert") key. This accepts the current input method sequence without running conversion when using an IME. */
    Key["NonConvert"] = "NonConvert";
    /** The Previous Candidate key. Selects the previous possible match for the ongoing input. */
    Key["PreviousCandidate"] = "PreviousCandidate";
    /** The Process key. Instructs the IME to process the conversion. */
    Key["Process"] = "Process";
    /** The Single Candidate key. Enables single candidate mode (as opposed to multi-candidate mode); in this mode, only one candidate is displayed at a time. */
    Key["SingleCandidate"] = "SingleCandidate";
    /** The Hangul (Korean character set) mode key, which toggles between Hangul and English entry modes. */
    Key["HangulMode"] = "HangulMode";
    /** Selects the Hanja mode, for converting Hangul characters to the more specific Hanja characters. */
    Key["HanjaMode"] = "HanjaMode";
    /** Selects the Junja mode, in which Korean is represented using single-byte Latin characters. */
    Key["JunjaMode"] = "JunjaMode";
    /** The Eisu key. This key's purpose is defined by the IME, but may be used to close the IME. */
    Key["Eisu"] = "Eisu";
    /** The Hankaku (half-width characters) key. */
    Key["Hankaku"] = "Hankaku";
    /** The Hiragana key; selects Kana characters mode. */
    Key["Hiragana"] = "Hiragana";
    /** Toggles between the Hiragana and Katakana writing systems. */
    Key["HiraganaKatakana"] = "HiraganaKatakana";
    /** The Kana Mode (Kana Lock) key. */
    Key["KanaMode"] = "KanaMode";
    /** The Kanji Mode key. Enables entering Japanese text using the ideographic characters of Chinese origin. */
    Key["KanjiMode"] = "KanjiMode";
    /** The Katakana key. */
    Key["Katakana"] = "Katakana";
    /** The Romaji key; selects the Roman character set. */
    Key["Romaji"] = "Romaji";
    /** The Zenkaku (full width) characters key. */
    Key["Zenkaku"] = "Zenkaku";
    /** The Zenkaku/Hankaku (full width/half width) toggle key. */
    Key["ZenkakuHanaku"] = "ZenkakuHanaku";
    /** The first general-purpose function key, F1. */
    Key["F1"] = "F1";
    /** The F2 key. */
    Key["F2"] = "F2";
    /** The F3 key. */
    Key["F3"] = "F3";
    /** The F4 key. */
    Key["F4"] = "F4";
    /** The F5 key. */
    Key["F5"] = "F5";
    /** The F6 key. */
    Key["F6"] = "F6";
    /** The F7 key. */
    Key["F7"] = "F7";
    /** The F8 key. */
    Key["F8"] = "F8";
    /** The F9 key. */
    Key["F9"] = "F9";
    /** The F10 key. */
    Key["F10"] = "F10";
    /** The F11 key. */
    Key["F11"] = "F11";
    /** The F12 key. */
    Key["F12"] = "F12";
    /** The F13 key. */
    Key["F13"] = "F13";
    /** The F14 key. */
    Key["F14"] = "F14";
    /** The F15 key. */
    Key["F15"] = "F15";
    /** The F16 key. */
    Key["F16"] = "F16";
    /** The F17 key. */
    Key["F17"] = "F17";
    /** The F18 key. */
    Key["F18"] = "F18";
    /** The F19 key. */
    Key["F19"] = "F19";
    /** The F20 key. */
    Key["F20"] = "F20";
    /** The first general-purpose virtual function key. */
    Key["Soft1"] = "Soft1";
    /** The second general-purpose virtual function key. */
    Key["Soft2"] = "Soft2";
    /** The third general-purpose virtual function key. */
    Key["Soft3"] = "Soft3";
    /** The fourth general-purpose virtual function key. */
    Key["Soft4"] = "Soft4";
    /** Presents a list of recently-used applications which lets the user change apps quickly. */
    Key["AppSwitch"] = "AppSwitch";
    /** The Call key; dials the number which has been entered. */
    Key["Call"] = "Call";
    /** The Camera key; activates the camera. */
    Key["Camera"] = "Camera";
    /** The Focus key; focuses the camera. */
    Key["CameraFocus"] = "CameraFocus";
    /** The End Call or Hang Up button. */
    Key["EndCall"] = "EndCall";
    /** The Back button. */
    Key["GoBack"] = "GoBack";
    /** The Home button, which takes the user to the phone's main screen (usually an application launcher). */
    Key["GoHome"] = "GoHome";
    /** The Headset Hook key. This is typically actually a button on the headset which is used to hang up calls and play or pause media. */
    Key["HeadsetHook"] = "HeadsetHook";
    /** The Redial button, which redials the last-called number. */
    Key["LastNumberRedial"] = "LastNumberRedial";
    /** The Notification key. */
    Key["Notification"] = "Notification";
    /** A button which cycles among the notification modes: silent, vibrate, ring, and so forth. */
    Key["MannerMode"] = "MannerMode";
    /** The Voice Dial key. Initiates voice dialing. */
    Key["VoiceDial"] = "VoiceDial";
    /** Switches to the previous channel. */
    Key["ChannelDown"] = "ChannelDown";
    /** Switches to the next channel. */
    Key["ChannelUp"] = "ChannelUp";
    /** Starts, continues, or increases the speed of fast forwarding the media. */
    Key["MediaFastForward"] = "MediaFastForward";
    /** Pauses the currently playing media. Some older applications use simply "Pause" but this is not correct. */
    Key["MediaPause"] = "MediaPause";
    /** Starts or continues playing media at normal speed, if not already doing so. Has no effect otherwise. */
    Key["MediaPlay"] = "MediaPlay";
    /** Toggles between playing and pausing the current media. */
    Key["MediaPlayPause"] = "MediaPlayPause";
    /** Starts or resumes recording media. */
    Key["MediaRecord"] = "MediaRecord";
    /** Starts, continues, or increases the speed of rewinding the media. */
    Key["MediaRewind"] = "MediaRewind";
    /** Stops the current media activity (such as playing, recording, pausing, forwarding, or rewinding). Has no effect if the media is currently stopped already. */
    Key["MediaStop"] = "MediaStop";
    /** Seeks to the next media or program track. */
    Key["MediaTrackNext"] = "MediaTrackNext";
    /** Seeks to the previous media or program track. */
    Key["MediaTrackPrevious"] = "MediaTrackPrevious";
    /** Adjusts audio balance toward the left. */
    Key["AudioBalanceLeft"] = "AudioBalanceLeft";
    /** Adjusts audio balance twoard the right. */
    Key["AudioBalanceRight"] = "AudioBalanceRight";
    /** Decreases the amount of bass. */
    Key["AudioBassDown"] = "AudioBassDown";
    /** Reduces bass boosting or cycles downward through bass boost modes or states. */
    Key["AudioBassBoostDown"] = "AudioBassBoostDown";
    /** Toggles bass boosting on and off. */
    Key["AudioBassBoostToggle"] = "AudioBassBoostToggle";
    /** Increases the amoung of bass boosting, or cycles upward through a set of bass boost modes or states. */
    Key["AudioBassBoostUp"] = "AudioBassBoostUp";
    /** Increases the amount of bass. */
    Key["AudioBassUp"] = "AudioBassUp";
    /** Adjusts the audio fader toward the front. */
    Key["AudioFaderFront"] = "AudioFaderFront";
    /** Adjustts the audio fader toward the rear. */
    Key["AudioFaderRear"] = "AudioFaderRear";
    /** Selects the next available surround sound mode. */
    Key["AudioSurroundModeNext"] = "AudioSurroundModeNext";
    /** Decreases the amount of treble. */
    Key["AudioTrebleDown"] = "AudioTrebleDown";
    /** Increases the amount of treble. */
    Key["AudioTrebleUp"] = "AudioTrebleUp";
    /** Decreases the audio volume. */
    Key["AudioVolumeDown"] = "AudioVolumeDown";
    /** Mutes the audio. */
    Key["AudioVolumeMute"] = "AudioVolumeMute";
    /** Increases the audio volume. */
    Key["AudioVolumeUp"] = "AudioVolumeUp";
    /** Toggles the microphone on and off. */
    Key["MicrophoneToggle"] = "MicrophoneToggle";
    /** Decreases the microphone's input volume. */
    Key["MicrophoneVolumeDown"] = "MicrophoneVolumeDown";
    /** Mutes the microphone input. */
    Key["MicrophoneVolumeMute"] = "MicrophoneVolumeMute";
    /** Increases the microphone's input volume. */
    Key["MicrophoneVolumeUp"] = "MicrophoneVolumeUp";
    /** Switches into TV viewing mode. */
    Key["TV"] = "TV";
    /** Toggles 3D TV mode on and off. */
    Key["TV3DMode"] = "TV3DMode";
    /** Toggles between antenna and cable inputs. */
    Key["TVAntennaCable"] = "TVAntennaCable";
    /** Toggles audio description mode on and off. */
    Key["TVAudioDescription"] = "TVAudioDescription";
    /** Decreases trhe audio description's mixing volume; reduces the volume of the audio descriptions relative to the program sound. */
    Key["TVAudioDescriptionMixDown"] = "TVAudioDescriptionMixDown";
    /** Increases the audio description's mixing volume; increases the volume of the audio descriptions relative to the program sound. */
    Key["TVAudioDescriptionMixUp"] = "TVAudioDescriptionMixUp";
    /** Displays or hides the media contents available for playback (this may be a channel guide showing the currently airing programs, or a list of media files to play). */
    Key["TVContentsMenu"] = "TVContentsMenu";
    /** Displays or hides the TV's data service menu. */
    Key["TVDataService"] = "TVDataService";
    /** Cycles the input mode on an external TV. */
    Key["TVInput"] = "TVInput";
    /** Switches to the input "Component 1." */
    Key["TVInputComponent1"] = "TVInputComponent1";
    /** Switches to the input "Component 2." */
    Key["TVInputComponent2"] = "TVInputComponent2";
    /** Switches to the input "Composite 1." */
    Key["TVInputComposite1"] = "TVInputComposite1";
    /** Switches to the input "Composite 2." */
    Key["TVInputComposite2"] = "TVInputComposite2";
    /** Switches to the input "HDMI 1." */
    Key["TVInputHDMI1"] = "TVInputHDMI1";
    /** Switches to the input "HDMI 2." */
    Key["TVInputHDMI2"] = "TVInputHDMI2";
    /** Switches to the input "HDMI 3." */
    Key["TVInputHDMI3"] = "TVInputHDMI3";
    /** Switches to the input "HDMI 4." */
    Key["TVInputHDMI4"] = "TVInputHDMI4";
    /** Switches to the input "VGA 1." */
    Key["TVInputVGA1"] = "TVInputVGA1";
    /** The Media Context menu key. */
    Key["TVMediaContext"] = "TVMediaContext";
    /** Toggle the TV's network connection on and off. */
    Key["TVNetwork"] = "TVNetwork";
    /** Put the TV into number entry mode. */
    Key["TVNumberEntry"] = "TVNumberEntry";
    /** The device's power button. */
    Key["TVPower"] = "TVPower";
    /** Radio button. */
    Key["TVRadioService"] = "TVRadioService";
    /** Satellite button. */
    Key["TVSatellite"] = "TVSatellite";
    /** Broadcast Satellite button. */
    Key["TVSatelliteBS"] = "TVSatelliteBS";
    /** Communication Satellite button. */
    Key["TVSatelliteCS"] = "TVSatelliteCS";
    /** Toggles among available satellites. */
    Key["TVSatelliteToggle"] = "TVSatelliteToggle";
    /** Selects analog terrestrial television service (analog cable or antenna reception). */
    Key["TVTerrestrialAnalog"] = "TVTerrestrialAnalog";
    /** Selects digital terrestrial television service (digital cable or antenna receiption). */
    Key["TVTerrestrialDigital"] = "TVTerrestrialDigital";
    /** Timer programming button. */
    Key["TVTimer"] = "TVTimer";
    /** Changes the input mode on an external audio/video receiver (AVR) unit. */
    Key["AVRInput"] = "AVRInput";
    /** Toggles the power on an external AVR unit. */
    Key["AVRPower"] = "AVRPower";
    /** General-purpose media function key, color-coded red; this has index 0 among the colored keys. */
    Key["ColorF0Red"] = "ColorF0Red";
    /** General-purpose media funciton key, color-coded green; this has index 1 among the colored keys. */
    Key["ColorF1Green"] = "ColorF1Green";
    /** General-purpose media funciton key, color-coded yellow; this has index 2 among the colored keys. */
    Key["ColorF2Yellow"] = "ColorF2Yellow";
    /** General-purpose media funciton key, color-coded blue; this has index 3 among the colored keys. */
    Key["ColorF3Blue"] = "ColorF3Blue";
    /** General-purpose media funciton key, color-coded grey; this has index 4 among the colored keys. */
    Key["ColorF4Grey"] = "ColorF4Grey";
    /** General-purpose media funciton key, color-coded brown; this has index 5 among the colored keys. */
    Key["ColorF5Brown"] = "ColorF5Brown";
    /** Toggles closed captioning on and off. */
    Key["ClosedCaptionToggle"] = "ClosedCaptionToggle";
    /** Adjusts the brightness of the device by toggling between two brightness levels or by cycling among multiple brightness levels. */
    Key["Dimmer"] = "Dimmer";
    /** Cycles among video sources. */
    Key["DisplaySwap"] = "DisplaySwap";
    /** Switches the input source to the Digital Video Recorder (DVR). */
    Key["DVR"] = "DVR";
    /** The Exit button, which exits the curreent application or menu. */
    Key["Exit"] = "Exit";
    /** Clears the program or content stored in the first favorites list slot. */
    Key["FavoriteClear0"] = "FavoriteClear0";
    /** Clears the program or content stored in the second favorites list slot. */
    Key["FavoriteClear1"] = "FavoriteClear1";
    /** Clears the program or content stored in the third favorites list slot. */
    Key["FavoriteClear2"] = "FavoriteClear2";
    /** Clears the program or content stored in the fourth favorites list slot. */
    Key["FavoriteClear3"] = "FavoriteClear3";
    /** Selects (recalls) the program or content stored in the first favorites list slot. */
    Key["FavoriteRecall0"] = "FavoriteRecall0";
    /** Selects (recalls) the program or content stored in the second favorites list slot. */
    Key["FavoriteRecall1"] = "FavoriteRecall1";
    /** Selects (recalls) the program or content stored in the third favorites list slot. */
    Key["FavoriteRecall2"] = "FavoriteRecall2";
    /** Selects (recalls) the program or content stored in the fourth favorites list slot. */
    Key["FavoriteRecall3"] = "FavoriteRecall3";
    /** Stores the current program or content into the first favorites list slot. */
    Key["FavoriteStore0"] = "FavoriteStore0";
    /** Stores the current program or content into the second favorites list slot. */
    Key["FavoriteStore1"] = "FavoriteStore1";
    /** Stores the current program or content into the third favorites list slot. */
    Key["FavoriteStore2"] = "FavoriteStore2";
    /** Stores the current program or content into the fourth favorites list slot. */
    Key["FavoriteStore3"] = "FavoriteStore3";
    /** Toggles the display of the program or content guide. */
    Key["Guide"] = "Guide";
    /** If the guide is currently displayed, this button tells the guide to display the next day's content. */
    Key["GuideNextDay"] = "GuideNextDay";
    /** If the guide is currently displayed, this button tells the guide to display the previous day's content. */
    Key["GuidePreviousDay"] = "GuidePreviousDay";
    /** Toggles the display of information about the currently selected content, program, or media. */
    Key["Info"] = "Info";
    /** Tellls the device to perform an instant replay (typically some form of jumping back a short amount of time then playing it again, possibly but not usually in slow motion). */
    Key["InstantReplay"] = "InstantReplay";
    /** Opens content liniked to the current program, if available and possible. */
    Key["Link"] = "Link";
    /** Lists the current program. */
    Key["ListProgram"] = "ListProgram";
    /** Toggles a display listing currently available live content or programs. */
    Key["LiveContent"] = "LiveContent";
    /** Locks or unlocks the currently selected content or pgoram. */
    Key["Lock"] = "Lock";
    /** Presents a list of media applications, such as photo viewers, audio and video players, and games. [1] */
    Key["MediaApps"] = "MediaApps";
    /** The Audio Track key. */
    Key["MediaAudioTrack"] = "MediaAudioTrack";
    /** Jumps back to the last-viewed content, program, or other media. */
    Key["MediaLast"] = "MediaLast";
    /** Skips backward to the previous content or program. */
    Key["MediaSkipBackward"] = "MediaSkipBackward";
    /** Skips forward to the next content or program. */
    Key["MediaSkipForward"] = "MediaSkipForward";
    /** Steps backward to the previous content or program. */
    Key["MediaStepBackward"] = "MediaStepBackward";
    /** Steps forward to the next content or program. */
    Key["MediaStepForward"] = "MediaStepForward";
    /** Top Menu button; opens the media's main menu, such as on a DVD or Blu-Ray disc. */
    Key["MediaTopMenu"] = "MediaTopMenu";
    /** Navigates into a submenu or option. */
    Key["NavigateIn"] = "NavigateIn";
    /** Navigates to the next item. */
    Key["NavigateNext"] = "NavigateNext";
    /** Navigates out of the current screen or menu. */
    Key["NavigateOut"] = "NavigateOut";
    /** Navigates to the previous item. */
    Key["NavigatePrevious"] = "NavigatePrevious";
    /** Cycles to the next channel in the favorites list. */
    Key["NextFavoriteChannel"] = "NextFavoriteChannel";
    /** Cycles to the next saved user profile, if this feature is supported and multiple profiles exist. */
    Key["NextUserProfile"] = "NextUserProfile";
    /** Opens the user interface for selecting on demand content or programs to watch. */
    Key["OnDemand"] = "OnDemand";
    /** Starts the process of pairing the remote with a device to be controlled. */
    Key["Pairing"] = "Pairing";
    /** A button to move the picture-in-picture view downward. */
    Key["PinPDown"] = "PinPDown";
    /** A button to control moving the picture-in-picture view. */
    Key["PinPMove"] = "PinPMove";
    /** Toggles display of th epicture-in-picture view on and off. */
    Key["PinPToggle"] = "PinPToggle";
    /** A button to move the picture-in-picture view upward. */
    Key["PinPUp"] = "PinPUp";
    /** Decreases the media playback rate. */
    Key["PlaySpeedDown"] = "PlaySpeedDown";
    /** Returns the media playback rate to normal. */
    Key["PlaySpeedReset"] = "PlaySpeedReset";
    /** Increases the media playback rate. */
    Key["PlaySpeedUp"] = "PlaySpeedUp";
    /** Toggles random media (also known as "shuffle mode") on and off. */
    Key["RandomToggle"] = "RandomToggle";
    /** A code sent when the remote control's battery is low. This doesn't actually correspond to a physical key at all. */
    Key["RcLowBattery"] = "RcLowBattery";
    /** Cycles among the available media recording speeds. */
    Key["RecordSpeedNext"] = "RecordSpeedNext";
    /** Toggles radio frequency (RF) input bypass mode on and off. RF bypass mode passes RF input directly to the RF output without any processing or filtering. */
    Key["RfBypass"] = "RfBypass";
    /** Toggles the channel scan mode on and off; this is a mode which flips through channels automatically until the user stops the scan. */
    Key["ScanChannelsToggle"] = "ScanChannelsToggle";
    /** Cycles through the available screen display modes. */
    Key["ScreenModeNext"] = "ScreenModeNext";
    /** Toggles display of the device's settings screen on and off. */
    Key["Settings"] = "Settings";
    /** Toggles split screen display mode on and off. */
    Key["SplitScreenToggle"] = "SplitScreenToggle";
    /** Cycles among input modes on an external set-top box (STB). */
    Key["STBInput"] = "STBInput";
    /** Toggles on and off an external STB. */
    Key["STBPower"] = "STBPower";
    /** Toggles the display of subtitles on and off if they're available. */
    Key["Subtitle"] = "Subtitle";
    /** Toggles display of teletext, if available. */
    Key["Teletext"] = "Teletext";
    /** Cycles through the available video modes. */
    Key["VideoModeNext"] = "VideoModeNext";
    /** Causes the device to identify itself in some fashion, such as by flashing a light, briefly changing the brightness of indicator lights, or emitting a tone. */
    Key["Wink"] = "Wink";
    /** Toggles between full-screen and scaled content display, or otherwise change the magnification level. */
    Key["ZoomToggle"] = "ZoomToggle";
    /** Presents a list of possible corrections for a word which was incorrectly identified. */
    Key["SpeechCorrectionList"] = "SpeechCorrectionList";
    /** Toggles between dictation mode and command/control mode. This lets the speech engine know whether to interpret spoken words as input text or as commands. */
    Key["SpeechInputToggle"] = "SpeechInputToggle";
    /** Closes the current document or message. Must not exit the application. */
    Key["Close"] = "Close";
    /** Creates a new document or message. */
    Key["New"] = "New";
    /** Opens an existing document or message. */
    Key["Open"] = "Open";
    /** Prints the current document or message. */
    Key["Print"] = "Print";
    /** Saves the current document or message. */
    Key["Save"] = "Save";
    /** Starts spell checking the current document. */
    Key["SpellCheck"] = "SpellCheck";
    /** Opens the user interface to forward a message. */
    Key["MailForward"] = "MailForward";
    /** Opens the user interface to reply to a message. */
    Key["MailReply"] = "MailReply";
    /** Sends the current message. */
    Key["MailSend"] = "MailSend";
    /** The Calculator key, often labeled with an icon such as . This is often used as a generic application launcher key (APPCOMMAND_LAUNCH_APP2). */
    Key["LaunchCalculator"] = "LaunchCalculator";
    /** The Calendar key, often labeled with an icon like . */
    Key["LaunchCalendar"] = "LaunchCalendar";
    /** The Contacts key. */
    Key["LaunchContacts"] = "LaunchContacts";
    /** The Mail key. This is often displayed as . */
    Key["LaunchMail"] = "LaunchMail";
    /** The Media Player key. */
    Key["LaunchMediaPlayer"] = "LaunchMediaPlayer";
    /** The Music Player key, often labeled with an icon such as . */
    Key["LaunchMusicPlayer"] = "LaunchMusicPlayer";
    /** The My Computer key on Windows keyboards. This is often used as a generic application launcher key (APPCOMMAND_LAUNCH_APP1). */
    Key["LaunchMyComputer"] = "LaunchMyComputer";
    /** The Phone key, to open the phone dialer application if one is present. */
    Key["LaunchPhone"] = "LaunchPhone";
    /** The Screen Saver key. */
    Key["LaunchScreenSaver"] = "LaunchScreenSaver";
    /** The Spreadsheet key. This key may be labeled with an icon such as  or that of a specific spreadsheet application. */
    Key["LaunchSpreadsheet"] = "LaunchSpreadsheet";
    /** The Web Browser key. This key is frequently labeled with an icon such as  or the icon of a specific browser, depending on the device manufacturer. */
    Key["LaunchWebBrowser"] = "LaunchWebBrowser";
    /** The WebCam key. Opens the webcam application. */
    Key["LaunchWebCam"] = "LaunchWebCam";
    /** The Word Processor key. This may be an icon of a specific word processor application, or a generic document icon. */
    Key["LaunchWordProcessor"] = "LaunchWordProcessor";
    /** The first generic application launcher button. */
    Key["LaunchApplication1"] = "LaunchApplication1";
    /** The second generic application launcher button. */
    Key["LaunchApplication2"] = "LaunchApplication2";
    /** The third generic application launcher button. */
    Key["LaunchApplication3"] = "LaunchApplication3";
    /** The fourth generic application launcher button. */
    Key["LaunchApplication4"] = "LaunchApplication4";
    /** The fifth generic application launcher button. */
    Key["LaunchApplication5"] = "LaunchApplication5";
    /** The sixth generic application launcher button. */
    Key["LaunchApplication6"] = "LaunchApplication6";
    /** The seventh generic application launcher button. */
    Key["LaunchApplication7"] = "LaunchApplication7";
    /** The eighth generic application launcher button. */
    Key["LaunchApplication8"] = "LaunchApplication8";
    /** The ninth generic application launcher button. */
    Key["LaunchApplication9"] = "LaunchApplication9";
    /** The 10th generic application launcher button. */
    Key["LaunchApplication10"] = "LaunchApplication10";
    /** The 11th generic application launcher button. */
    Key["LaunchApplication11"] = "LaunchApplication11";
    /** The 12th generic application launcher button. */
    Key["LaunchApplication12"] = "LaunchApplication12";
    /** The 13th generic application launcher button. */
    Key["LaunchApplication13"] = "LaunchApplication13";
    /** The 14th generic application launcher button. */
    Key["LaunchApplication14"] = "LaunchApplication14";
    /** The 15th generic application launcher button. */
    Key["LaunchApplication15"] = "LaunchApplication15";
    /** The 16th generic application launcher button. */
    Key["LaunchApplication16"] = "LaunchApplication16";
    /** Navigates to the previous content or page in the current Web view's history. */
    Key["BrowserBack"] = "BrowserBack";
    /** Opens the user's list of bookmarks/favorites. */
    Key["BrowserFavorites"] = "BrowserFavorites";
    /** Navigates to the next content or page in the current Web view's history. */
    Key["BrowserForward"] = "BrowserForward";
    /** Navigates to the user's preferred home page. */
    Key["BrowserHome"] = "BrowserHome";
    /** Refreshes the current page or contentl. */
    Key["BrowserRefresh"] = "BrowserRefresh";
    /** Activates the user's preferred search engine or the search interface within their browser. */
    Key["BrowserSearch"] = "BrowserSearch";
    /** Stops loading the currently displayed Web view or content. */
    Key["BrowserStop"] = "BrowserStop";
    /** The decimal point key (typically . or , depending on the region. In newer browsers, this value to simply be the character generated by the decimal key (one of those two characters). [1] */
    Key["Decimal"] = "Decimal";
    /** The 11 key found on certain media numeric keypads. */
    Key["Key11"] = "Key11";
    /** The 12 key found on certain media numeric keypads. */
    Key["Key12"] = "Key12";
    /** The numeric keypad's multiplication key, *. */
    Key["Multiply"] = "Multiply";
    /** The numeric keypad's addition key, +. */
    Key["Add"] = "Add";
    /** The numeric keypad's division key, /. */
    Key["Divide"] = "Divide";
    /** The numeric keypad's subtraction key, -. */
    Key["Subtract"] = "Subtract";
    /** The numeric keypad's places separator character (in the United States, this is a comma, but elsewhere it is frequently a period). */
    Key["Separator"] = "Separator";
})(Key = exports.Key || (exports.Key = {}));
