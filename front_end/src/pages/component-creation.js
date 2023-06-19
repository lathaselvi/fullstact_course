import ParentComponent from "../components/ParentComponent";
import ChildComponent from "../components/ChildComponent";

export default function Home() {
  return (
    <div className="main">
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    </div>
  );
}
