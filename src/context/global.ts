import { createContext } from 'react';
import { Context } from '../interfaces/index';

export const initialContext = {
	defaultInterval: 4000,
	width: 360,
	height: 640,
};

const GlobalContext = createContext<Context>(initialContext);

export default GlobalContext;
