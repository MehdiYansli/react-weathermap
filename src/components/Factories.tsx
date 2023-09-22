import './Factories.css';
import { Factory } from './Factory';
import FactoryType from '../models/Factory';


type FactoriesListProps = {
    factories: FactoryType[];
};

export const FactoriesList = ({factories}: FactoriesListProps) => {
    const factoriesHtml = factories.map(
        factory => <Factory factory={factory}/>)
    ;    
    return <div>{factoriesHtml}</div>
}