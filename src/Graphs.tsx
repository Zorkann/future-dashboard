import { Graph1 } from './Graph1';
import { Graph2 } from './Graph2';
import { Graph3 } from './Graph3';
import { Graph4 } from './Graph4';
import { Graph5 } from './Graph5';
import { Graph6 } from './Graph6';
import { Graph7 } from './Graph7';
import { Graph8 } from './Graph8';
import { Graph9 } from './Graph9';
import { Graph10 } from './Graph10';
import { useGraphsContext } from '@features/themes';

export function Graphs() {
  const { graphStates } = useGraphsContext();

  return (
    <div className="grid grid-cols-1 grid-rows-[repeat(24,80px)] lg:grid-rows-[repeat(8,80px)] lg:grid-cols-[5fr,4fr,6fr] grid-flow-col gap-8 p-[40px] pt-[104px]">
      {graphStates.Graph_1 && (
        <div className="row-span-1">
          <Graph1 />
        </div>
      )}
      {graphStates.Graph_2 && (
        <div className="row-span-3">
          <Graph2 />
        </div>
      )}

      {graphStates.Graph_3 && (
        <div className="row-span-2">
          <Graph3 />
        </div>
      )}
      {graphStates.Graph_4 && (
        <div className="row-span-2">
          <Graph4 />
        </div>
      )}
      {graphStates.Graph_5 && (
        <div className="row-span-2">
          <Graph5 />
        </div>
      )}
      {graphStates.Graph_5 && (
        <div className="row-span-1">
          <Graph5 />
        </div>
      )}
      {graphStates.Graph_6 && (
        <div className="row-span-3">
          <Graph6 />
        </div>
      )}
      {graphStates.Graph_7 && (
        <div className="row-span-2">
          <Graph7 />
        </div>
      )}
      {graphStates.Graph_8 && (
        <div className="row-span-2">
          <Graph8 />
        </div>
      )}
      {graphStates.Graph_9 && (
        <div className="row-span-4">
          <Graph9 />
        </div>
      )}
      {graphStates.Graph_10 && (
        <div className="row-span-2">
          <Graph10 />
        </div>
      )}
    </div>
  );
}
