import { Spin } from "antd";
import './style.css'

const Loading = () => {
  return <div className="fullScreenLoading"><Spin size="large" /></div>;
};

export default Loading;
