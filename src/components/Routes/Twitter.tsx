import { useEffect } from "react";

function Twitter() {
  useEffect(() => {
    window.location.href = "https://twitter.com/officialnosk";
  }, []);
  return <div></div>;
}

export default Twitter;
