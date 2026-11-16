import React from 'react';
import {Composition} from 'remotion';
import {ToniTLCReel} from './compositions/ToniTLCReel';
import {TLCBrand} from './config/tlcBrand';
export const RemotionRoot: React.FC = () => <>
 <Composition id="ToniTLCFinal" component={ToniTLCReel} durationInFrames={TLCBrand.video.durationFrames} fps={TLCBrand.video.fps} width={TLCBrand.video.width} height={TLCBrand.video.height} defaultProps={{graphicsOnly:false,debug:false}}/>
 <Composition id="ToniTLCGraphicsOnly" component={ToniTLCReel} durationInFrames={TLCBrand.video.durationFrames} fps={TLCBrand.video.fps} width={TLCBrand.video.width} height={TLCBrand.video.height} defaultProps={{graphicsOnly:true,debug:false}}/>
 <Composition id="ToniTLCPreview" component={ToniTLCReel} durationInFrames={TLCBrand.video.durationFrames} fps={TLCBrand.video.fps} width={TLCBrand.video.width} height={TLCBrand.video.height} defaultProps={{graphicsOnly:false,debug:true}}/>
 </>;
