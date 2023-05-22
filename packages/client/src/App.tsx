import { useComponentValue, useRows } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { useState } from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import React from 'react';

export const App = () => {
  const {
    components: { Achievements },
    systemCalls: { setAchievement },
    network: { playerEntity, network, storeCache },
  } = useMUD();

  storeCache.tables.Achievements.subscribe((storeEvent) => {
    console.log(storeEvent);
    // 구독
  });

  const styles = {
    wrapper: {
      display: 'table',
      minHeight: '100%',
      height: '100vh',
      width: '100%',
      background: 'linear-gradient(0deg, rgba(52, 95, 206, 0.31) 0%, rgba(52, 95, 206, 0.06) 51.07%)',
    },
    body: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }

  return (
    <>
      <div style={styles.wrapper}>
        <Header />
        <div style={styles.body}>
          <Home />
        </div>
      </div>
    </>
  );
};
