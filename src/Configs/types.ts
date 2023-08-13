

import {ReactNode } from 'react'; 

export interface childrenType {
   children: ReactNode; 
}


export type PrimaryButtonType  = {
   path: string; 
}  & childrenType; 