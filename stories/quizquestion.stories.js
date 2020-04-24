// helloimport React from 'react';
import IngredAbout from '../comps/ingredients/about';
import ben from '../comps/ingredients/about/benzene.png';
import but from '../comps/ingredients/about/butane.png';
import nic from '../comps/ingredients/about/nicotine.png';
import tar from '../comps/ingredients/about/tar.png';


export default {
    title: 'IngredAbout',
    componets: IngredAbout
};


export const Ammonia = () => <IngredAbout />

export const Benzene = () => <IngredAbout img={ben} text="Benzene causes harmful effects on the bone marrow and can cause a decrease in red blood cells. It can also cause a lot of bleeding and can affect the immune system, increasing the chance for infection." />

export const Butane = () => <IngredAbout img={but}  text="Butane slows down the activity of the brain, affecting physical
and mental responses. When butane is inhaled, the fumes are absorbed rapidly through the lungs into the
bloodstream." />

export const Nicotine = () => <IngredAbout img={nic} text="Nicotine is a chemical compound that is present in tobacco. Nicotine is a dangerous and highly addictive chemical. It can cause an increase in blood pressure, heart rate, flow of blood to the heart." />

export const Tar = () => <IngredAbout img={tar} text=" Tar is the word for the solid particles suspended in tobacco smoke. The particles contain chemicals, including cancer-causing substances. Tar is sticky and brown, and stains teeth, fingernails." />