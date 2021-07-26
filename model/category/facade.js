
import Facade from '../../lib/facade';
import categorySchema from './schema';

class CategoryFacade extends Facade { }

export default new CategoryFacade('Category', categorySchema);