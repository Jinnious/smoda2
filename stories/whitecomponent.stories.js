import React from 'react';
import EffectDescription from '../comps/EffectDescription';
import teeth from '../comps/EffectDescription/teeth.png';
import lung from '../comps/EffectDescription/lung.png';
import heart from '../comps/EffectDescription/heart.png';
import brain from '../comps/EffectDescription/brain.png';
import bad_lung from '../comps/EffectDescription/bad_lung.png';
import bad_brain from '../comps/EffectDescription/bad_brain.png';
import bad_heart from '../comps/EffectDescription/bad_heart.png';
import bad_mouth from '../comps/EffectDescription/bad_mouth.png';
import { Lungsubhead } from './subhead.stories';
import { Heartsubhead } from './subhead.stories';
import { Mouthsubhead } from './subhead.stories';
import { Brainsubhead } from './subhead.stories';



export default {
    title: 'EffectDescription',
    componets: EffectDescription
};


export const LungD = () => <div><Lungsubhead /><EffectDescription img2={bad_lung} /></div>

export const LungD2 = () => <div><Lungsubhead /><EffectDescription text="Smoking puts you at a significantly higher risk of developing lung cancer." img2={bad_lung}/>
                                    </div>
export const LungD3 = () => <div><Lungsubhead /><EffectDescription text="" img={lung} img2={bad_lung}/>
                                </div>

export const HeartD= () => <div><Heartsubhead /><EffectDescription img2={bad_heart} text="Smoking damages your heart and your blood circulation, increasing the risk of conditions such as coronary heart disease, heart attack, stroke." />
                        </div>
export const HeartD2 = () => <div><Heartsubhead /><EffectDescription img2={bad_heart} text="Both people who smoke and those who are regularly exposed to secondhand smoke are at higher risk for heart attacks." />
</div>
export const HeartD3 = () => <div><Heartsubhead /><EffectDescription img2={bad_heart} text="" img={heart} />
</div>

export const YellowD = () => <div><Mouthsubhead /><EffectDescription img2={bad_mouth} text="Yellowish or brownish stains on the teeth are telltale signs of long-term smoking. It also causes a bad breath." />
</div>
export const YellowD2 = () => <div><Mouthsubhead /><EffectDescription img2={bad_mouth} text="Your sense of smell and taste can be dulled by smoking, which can decrease your appetite." />
</div>
export const YellowD3 = () => <div><Mouthsubhead /><EffectDescription img2={bad_mouth} text="" img={teeth} />
</div>

export const BrainD = () => <div><Brainsubhead /><EffectDescription img2={bad_brain} text="Smoking causes loss of memory, loss of brain volume. You will also lose control over emotions." />
</div>
export const BrainD2 = () => <div><Brainsubhead /><EffectDescription img2={bad_brain} text="Increases risk of having a stroke by at least 50%, which can cause brain damage and death." />
</div>
export const BrainD3 = () => <div><Brainsubhead /><EffectDescription img2={bad_brain} text="" img={brain}/></div>