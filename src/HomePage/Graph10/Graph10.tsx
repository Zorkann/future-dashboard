import { ProgressCircle } from '../../components/ProgressCircle';
import { useGetGraph10Data } from '../../../src/api/getGraph10Data';

export function Graph10() {
  const { status, data } = useGetGraph10Data();

  if (status === 'pending') return <h2>Loading...</h2>;

  if (status === 'error') return <h2>Error</h2>;
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-primary h-3 w-3 rounded-full block"></div>
        <span className="uppercase text-2xs">
          Lorem Ipsum is simply dummy lorem dummy lorem
        </span>
      </div>
      <div className="flex gap-4 h-full min-h-0">
        {data.data.map((data, index) => {
          return (
            <ProgressCircle
              key={data.label}
              label={data.label}
              value={data.value}
              colorVariant={index}
            />
          );
        })}
      </div>
    </div>
  );
}
