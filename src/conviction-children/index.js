
import sp from './sp.json';
import cu from './cu.json';
import ts from './ts.json';

export const getProductsByCategory = (category) => {
    switch (category) {
        case 'SP':
            return sp;
        case 'CU':
            return cu;
        case 'TS':
            return ts;
        default:
            // return Promise.resolve([]);
            return;
    }
};