import { useEffect, useMemo } from "react";

import { useNavigation } from "@remix-run/react";
import NProgress from "nprogress";
import { useFetchers } from "react-router-dom";

export const useNProgress = () => {
  const nav = useNavigation();
  const fetchers = useFetchers();

  const state = useMemo<ReturnType<typeof useNavigation>["state"]>(() => {
    const states = [nav.state, ...fetchers.map((fetcher) => fetcher.state)];
    return states.every((state) => state === "idle") ? "idle" : "loading";
  }, [nav.state, fetchers]);

  useEffect(() => {
    switch (state) {
      case "loading":
        NProgress.start();
        break;
      case "idle":
        NProgress.done();
        break;
    }
  }, [state, nav.state]);
};
