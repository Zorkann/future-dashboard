import { useGetGraph4Data } from '../../../src/api/getGraph4Data';
import { DottedCircleBlock } from '../../components/DottedCircleBlock';

export function Graph4() {
  const { status, data } = useGetGraph4Data();

  if (status === 'pending') return <h2>Loading...</h2>;

  if (status === 'error') return <h2>Error</h2>;

  const HIGHEST_VALUE = Math.max(...data.data.map((data) => data.value));

  return (
    <div className="flex h-full gap-4">
      {data.data.map(({ label, value, description }, index) => (
        <DottedCircleBlock
          key={label}
          label={label}
          value={value}
          description={description}
          highlighted={value === HIGHEST_VALUE}
          colorVariant={index}
        />
      ))}
    </div>
  );
}
