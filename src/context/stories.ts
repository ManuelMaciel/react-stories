import { createContext } from 'react';
import {
	StoriesContext as StoriesContextInterface,
	Story,
} from '../interfaces/index';

export const initialContext: { stories: Story[] } = {
	stories: [],
};

const StoriesContext = createContext<StoriesContextInterface>(
	initialContext
);

export default StoriesContext;
