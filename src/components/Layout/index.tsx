import { FunctionComponent } from 'react';
import SideBar from '../Sidebar';
import'./index.scss';
interface LayoutProps {
    
}
 
const Layout: FunctionComponent<LayoutProps> = () => {
    return ( <SideBar/> );
}
 
export default Layout;