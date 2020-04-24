import React from 'react';
import IngName from '../comps/ingredients/name';

export default {
    title: 'ingredname',
    componets: IngName
};

export const DefaultName = () => <IngName />

export const Names = () => <div>
    <div><IngName text="Benzene" color="#588B8B" border="#588B8B 3px solid" /></div>
    <div><IngName text="Butane" color="#707071" border="#707071 3px solid"/></div>
    <div><IngName text="Tar" color="#4469E3" border="#4469E3 3px solid"/></div>
    <div><IngName text="Annmonia" color="#F28F3C" border="#F28F3C 3px solid"/></div>
    <div><IngName text="Nicotine" color="#C8553D" border="#C8553D 3px solid"/></div>
</div>