import React from 'react';
import {AbsoluteFill, OffthreadVideo, staticFile, useCurrentFrame} from 'remotion';
import {TLCBrand as b} from '../config/tlcBrand';
import {ReferenceStyle} from '../components/ReferenceStyle';
import {CaptionOverlay} from '../components/CaptionOverlay';
import {BrollLayer} from '../components/BrollLayer';
// Keep this single unmuted video mounted across the entire composition so
// Toni's original speech audio continues uninterrupted through motion cards.
// Default mirrors the reference: kinetic words replace conventional subtitles.
// Set to true if you want a traditional verbatim caption variant.
const ENABLE_FULL_CAPTIONS = false;
const ENABLE_OPTIONAL_BROLL = false;
export const ToniTLCReel:React.FC<{graphicsOnly?:boolean;debug?:boolean}> = ({graphicsOnly=false,debug=false}) => {
 const f=useCurrentFrame();
 return <AbsoluteFill style={{background:graphicsOnly?'transparent':b.colors.primary}}>
  {!graphicsOnly&&<AbsoluteFill style={{display:'flex',alignItems:'center',justifyContent:'center'}}><OffthreadVideo src={staticFile('assets/toni.mp4')} style={{width:1080,height:1908,objectFit:'contain'}}/></AbsoluteFill>}
  {!graphicsOnly && ENABLE_OPTIONAL_BROLL && <BrollLayer/>}
  <ReferenceStyle graphicsOnly={graphicsOnly}/>
  {/* The large editorial words already carry the narrative in this reference cut.
      Standard subtitles can be re-enabled here for a second accessible variant. */}
  {ENABLE_FULL_CAPTIONS && <CaptionOverlay/>}
  {debug&&<div style={{position:'absolute',left:20,top:20,color:'#FFFFFF',background:'rgba(0,0,0,.85)',padding:12,fontSize:25}}>{`frame ${f} / ${(f/30).toFixed(2)}s`}</div>}
 </AbsoluteFill>;
};
