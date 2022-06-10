import{Application} from 'express';
import { list } from './controllers/product_controller';

export function routes(app:Application){
    app.get('/api/products',list);
}