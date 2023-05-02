import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Main from "../src/component/Main";
import InteractionProvider from "src/lib/source/components/common/InteractionProvider";

const Home: NextPage = () => {
  const [showChild, setShowChild] = useState(false);

  // 클라이언트 측 수화 후까지 대기하여
  useEffect(() => {
    setShowChild(true);
  }, []);

  return (
    <div>
      {showChild && (
        <InteractionProvider id={"root"}>
          <Main />
        </InteractionProvider>
      )}
    </div>
  );
};

export default Home;
