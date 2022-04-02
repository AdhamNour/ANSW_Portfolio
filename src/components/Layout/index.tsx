import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Sidebar";
import "./index.scss";
interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="page">
        <span className="tags top-tags">
        <span className="bottom-tag-html">&lt;html&gt;</span><br></br>

            &lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">&lt;/body&gt;<br/>
        <span className="bottom-tag-html">&lt;/html&gt;</span>
        
        </span>
      </div>
    </div>
  );
};

export default Layout;
