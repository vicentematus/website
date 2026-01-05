import { useEffect, useRef, useState, useCallback } from "react";

const COLS = 24;
const ROWS = 28;

export const GameOfLifeCard = () => {
  const [grid, setGrid] = useState<boolean[][]>(() => generateRandomGrid());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function generateRandomGrid(): boolean[][] {
    return Array.from({ length: ROWS }, () =>
      Array.from({ length: COLS }, () => Math.random() > 0.6)
    );
  }

  const updateGrid = useCallback(() => {
    setGrid((prev) => {
      return prev.map((row) =>
        row.map((cell) => {
          const rand = Math.random();
          if (cell) return rand > 0.25;
          return rand > 0.88;
        })
      );
    });
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(updateGrid, 250);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [updateGrid]);

  return (
    <div
      className="grid h-full w-full gap-[1px] bg-zinc-900 p-1"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
      }}
    >
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            className={`transition-colors duration-150 ${
              cell ? "bg-orange-400" : "bg-gray-800"
            }`}
          />
        ))
      )}
    </div>
  );
};
