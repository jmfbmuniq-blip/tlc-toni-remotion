import React from 'react';
import {OffthreadVideo, Sequence, staticFile} from 'remotion';
import {broll} from '../config/broll';
import {secondsToFrames} from '../data/scenes';
export const BrollLayer: React.FC = () => <>
 {broll.filter(x=>x.end>x.start).map((x,i)=><Sequence key={i} from={secondsToFrames(x.start)} durationInFrames={secondsToFrames(x.end)-secondsToFrames(x.start)}>
  <OffthreadVideo src={staticFile(x.file)} volume={0} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
 </Sequence>)}
</>;
