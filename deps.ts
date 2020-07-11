// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server";
export { opine } from "https://deno.land/x/opine@0.14.0/mod.ts";
export  * as oscillator from "https://dev.jspm.io/audio-oscillator";
import AudioWrite from "https://dev.jspm.io/web-audio-write";

const AudioOutput = AudioWrite();
export { React, ReactDOMServer, AudioOutput};

